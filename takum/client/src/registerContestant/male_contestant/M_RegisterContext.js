//used context to share state of form field across multiple form pages
import React from "react";
import { createContext,useState} from "react";

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
    

    const submit = (e) => {
        e.preventDefault()
        let x = 0;

        for (const key in state){
            if (state[key] === null){
            x +=1;
            };
        } 

        for (const key in file){
            if (file[key] === null){
            x +=1;
            };
        } 

        if (x > 0){
            alert('some fields are empty or incorrect please go back and check');
           
        }
        else
        { 
            let submitData = new FormData();
            for (const key in state){
                submitData.append(key, state[key])
            }
            for (const key in file){
                submitData.append(key, file[key])
            }
            console.log(submitData)


            fetch("http://localhost:8080/malecontestants",{
                method: 'POST',
                body: submitData,
                })
                .then((response) => response.json())
                .then((data) => {
                     console.log('Success:', data);
               })
                .catch((error) => {
                         console.error('Error:', error);
             })
            }
    }

    return (
            <MRegFormContext.Provider
              value ={{submit,state,handleFile,handleOnChange}}
            >{children}</MRegFormContext.Provider>
    );
    
    }