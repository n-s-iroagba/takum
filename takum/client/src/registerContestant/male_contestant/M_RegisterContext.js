//used context to share state of form field across multiple form pages
import React from "react";
import {createContext,useState} from "react";

export const MRegFormContext = createContext();


export const MRegFormProvider = ({children}) => {
    
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
   
    
    
    const handleOnChange = (e) => {
       e.preventDefault()
            setState({...state,[e.target.name]:e.target.value});
            
        
    }
    const handleFile = e => {
        setFile({image:e.target.files[0]})
        }
    
    const resetForm =()=>{
        setState(formData)
    }
    

    return (
            <MRegFormContext.Provider
              value ={{file,state,resetForm,handleFile,handleOnChange}}
            >{children}</MRegFormContext.Provider>
    );
    
    }