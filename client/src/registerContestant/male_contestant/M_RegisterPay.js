import React from 'react';
import { PaystackButton } from 'react-paystack';
import { useContext } from "react";
import { MRegFormContext } from "./M_RegisterContext";
import { useNavigate } from 'react-router-dom';



const MRegisterPay = () => {

  const publicKey = 'pk_test_3712809dbbcfa2685a106f1b758f23c34bef944f' ;
  const navigate = useNavigate()
  const amount = 500000
  const {submit} =  useContext( MRegFormContext);


  //PROPS TO BE SENT TO PAYSTACK API
  const componentProps = {
    email : 'nnamdisolomon1@gmail.com',
    amount,
    metadata: {
      name : 'contestant',
      phone: +2349038702607,
    },
    publicKey,
    text: 'Make Payment',
    onSuccess: ({ reference }) => {
      alert(
        `Your registration was successful! Transaction reference: ${reference}`
      );
      submit();
      navigate('/successRegistration');
      },
    onClose: () => alert("Thanks hope to see you win!!!!")
  };

  return(
        <div>
          <h3>Make the payment of {amount/100} naira to complete your registration</h3>
        <PaystackButton className="paystack-button" {...componentProps} />
       </div>
  ) 
     
            
        

};

export default MRegisterPay;