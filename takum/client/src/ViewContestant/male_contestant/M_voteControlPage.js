import React, { useState } from "react";
import ViewMale from './M_ViewMale'
import MVotePayForm from "./M_VotePayForm";

//used to control view between male contestants and votepay form
const MVoteControlPage = () =>{
    const [votePage,setVotePage] = useState(false);
    const setPage = () => setVotePage(true);

    const VotePageRender = () => {
        switch (votePage){
            case false : return <ViewMale setPage={setPage}/>
            case true : return <MVotePayForm/>
            default : return <ViewMale/>
        }
    }

    return(VotePageRender())
}
export default MVoteControlPage