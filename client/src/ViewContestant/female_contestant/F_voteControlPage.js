import React, { useState } from "react";
import ViewFemale from './F_ViewFemale'
import FVotePayForm from "./F_VotePayForm";

//used to control view between male contestants and votepay form
const FVoteControlPage = () =>{
    const [votePage,setVotePage] = useState(false);
    const setPage = () => setVotePage(true);

    const VotePageRender = () => {
        switch (votePage){
            case false : return <ViewFemale setPage={setPage}/>
            case true : return <FVotePayForm/>
            default : return <ViewFemale/>
        }
    }

    return(VotePageRender())
}
export default FVoteControlPage