import React from "react";
import { createContext, useState } from "react";

export const MVoteDetailsContext = createContext();

export const MDetailsProvider = ({children}) => {
  
  const [voteId, setVoteId] = useState(0);
  const [voteFirstName,setVoteFirstName] = useState(' ');
  const [voteLastName,setVoteLastName] = useState(' ');
  

  return (
    <MVoteDetailsContext.Provider
      value={{
        voteId, setVoteId,voteFirstName,voteLastName,setVoteFirstName,setVoteLastName,
      }}
    >{children}</MVoteDetailsContext.Provider>
  );
};export default MDetailsProvider
