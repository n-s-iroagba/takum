import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { useContext } from "react";
import { MVoteDetailsContext } from "./M_VoteDetailsContext";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../voteForm.css"



const MVotePayForm = () => {

  const publicKey = 'pk_live_050a6a4580beec2f54fb4df0b204f9902128a9e1'
  const navigate = useNavigate()
  const [amount, setAmount] = useState(0);
  const [votes, setVote] = useState(0);
  const { voteId, voteFirstName, voteLastName, } = useContext(MVoteDetailsContext);


  //FORM RESET AFTER VOTON
  const resetForm = () => {
    setVote(0);
    setAmount(0);
  };


  //PROPS TO BE SENT TO PAYSTACK API
  const componentProps = {
    email: 'vibranteventmgt@gmail.com',
    amount,
    metadata: {
      name: 'voter',
      phone: +2349029239277,
    },
    publicKey,
    text: 'vote now',
    onSuccess: ({ reference }) => {
      
      axios.patch(`https://takum.fly.dev/malecontestants/${voteId}`, {
        voteNumber: votes
      },
        {
          headers: {
            'Content-Type': 'application/json'
          }
      });

      alert(
        `Your vote casting was successful! Transaction reference: ${reference}`
      );
      
      navigate('/');

      resetForm();
    },
    onClose: () => alert('thank you hope to see your favourite win'),
  };

  return (
    <div className="VotePayForm">
      <div className="container">
        <div className="item">

          <div className="item-details">
            <p className="item-details__title">Vote Mr. Takum</p>
          </div>
        </div>
        <div className="checkout">
          <div className="checkout-form">
            <div className="checkout-field">
              <label>vote for {voteFirstName} {voteLastName}</label>
              <input
                type="number"
                id="name"
                value={votes}
                onChange={(e) => {
                  setVote(e.target.value)
                  setAmount(((e.target.value) * 10000))
                }
                }
              />
            </div>

            <div className="checkout-field">
              <label>Amount</label>
              <input
                type="number"
                value={amount / 100}
              />
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MVotePayForm;