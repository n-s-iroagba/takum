import React from "react";
import { createContext, useState } from "react";

export const FVoteDetailsContext = createContext();

export const FDetailsProvider = ({children}) => {
  
  const [voteId, setVoteId] = useState(0);
  const [voteFirstName,setVoteFirstName] = useState(' ');
  const [voteLastName,setVoteLastName] = useState(' ');
  

  return (
    <FVoteDetailsContext.Provider
      value={{
        voteId, setVoteId,voteFirstName,voteLastName,setVoteFirstName,setVoteLastName,
      }}
    >{children}</FVoteDetailsContext.Provider>
  );
};export default FDetailsProvider
