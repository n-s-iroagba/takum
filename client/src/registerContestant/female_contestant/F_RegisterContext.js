//used context to share state of form field across multiple form pages
import React from "react";
import {createContext,useState} from "react";

export const FRegFormContext = createContext();


export const FRegFormProvider = ({children}) => {
  const formData ={
      firstName : null,
        lastName : null,
        middleName : 'NONE',
        dateOfBirth : null,
        nextOfKinName : null,
        stateOfOrigin : null,
        lgaOfOrigin : null,
        country : 'Nigeria',
        ward:null,
        stateOfResidence : null,
        lgaOfResidence : null,
        address : null,
        nextOfKinPhoneNumber : null,
        email : null,
        highestEducationalQualification : null,
        phoneNumber : null,
        contestReason : null,
        hobbies : null,
        permission : null,
        favouriteShow : null,
        isHealthChallenge : null,
        healthChallenge : 'NONE',
        managerName : null,
        roleModel : null,
        
    }
    let pic = {
         image: null
    }
    
    const [state,setState] = useState(formData);
    const [file,setFile] = useState(pic);
   
    
    
    const handleOnChange =async (e) => {
       e.preventDefault()
      setState({...state,[e.target.name]:e.target.value});
      localStorage.setItem('femaleState',JSON.stringify(state))    
    }
    const handleFile = e => {
        setFile({image:e.target.files[0]})
        }
    

    

    return (
            <FRegFormContext.Provider
              value ={{formData,file,state,setState,handleFile,handleOnChange}}
            >{children}</FRegFormContext.Provider>
    );
    
    }