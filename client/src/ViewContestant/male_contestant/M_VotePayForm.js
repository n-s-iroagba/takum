import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { useContext } from "react";
import { MVoteDetailsContext } from "./M_VoteDetailsContext";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../voteForm.css"



const MVotePayForm = () => {

  const publicKey = 'pk_test_3712809dbbcfa2685a106f1b758f23c34bef944f'
  const navigate = useNavigate()
  const [amount, setAmount] = useState(0);
  const [votes, setVote] = useState(0);
  const { voteId, voteFirstName, voteLastName, } = useContext(MVoteDetailsContext);


  //FORM RESET AFTER VOTON
  const resetForm = () => {
    setVote(0);
    setAmount(0);
  };
  

  const castVote =  () =>{ 
    alert('Please be patient, this may take a short while');
   axios.patch(`https://takum.fly.dev/malecontestants/${voteId}`, {
        voteNumber: votes
      },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Headers': 'Authorization'
          }
        })
        setTimeout(alert(
          `Your vote casting was successful! Transaction reference`
        ),5000) 
        resetForm()
        navigate('/')
  }

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
    onSuccess: castVote,
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
                readOnly={true} 
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
