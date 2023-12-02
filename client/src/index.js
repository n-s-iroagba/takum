import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './home/home';
import MVoteControlPage from './ViewContestant/male_contestant/M_voteControlPage';
import MFormPagesControl from './registerContestant/male_contestant/M_FormPagesControl';
import { MRegFormProvider } from './registerContestant/male_contestant/M_RegisterContext';
import {MDetailsProvider} from './ViewContestant/male_contestant/M_VoteDetailsContext'
import AdminHome from './admin/AdminHome';
import FVoteControlPage from './ViewContestant/female_contestant/F_voteControlPage';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AdminViewMale from './admin/male_contestant/M_ViewMale';
import AdminViewFemale from './admin/female_contestant/F_ViewFemale';
import FFormPagesControl from './registerContestant/female_contestant/F_FormPagesControl'
import {FRegFormProvider} from './registerContestant/female_contestant/F_RegisterContext'
import {FDetailsProvider} from './ViewContestant/female_contestant/F_VoteDetailsContext'
import LoginForm from './components/LoginForm'
import Vote from './components/Vote';
import Admin from './components/Admin'
require('dotenv').config()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FDetailsProvider>
  <MDetailsProvider>
  <FRegFormProvider>
  <MRegFormProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/admin" element={ <LoginForm /> }></Route>
        
        <Route path="/malecontestants" element={ <MVoteControlPage/> }>
        </Route>
        <Route path="/femalecontestants" element={ <FVoteControlPage/> }>
        </Route>
        <Route path="/adminmalecontestants" element={ <AdminViewMale/> }>
        </Route>
        <Route path="/adminfemalecontestants" element={ <AdminViewFemale/> }>
        </Route>
        <Route path="/registermale" element={ <MFormPagesControl/> }></Route>
      <Route path="/registerfemale" element={ <FFormPagesControl/> }></Route>
      <Route path="/choosevote" element={ <Vote/> }></Route>
      <Route path="/adminhome" element={ <Admin/> }></Route>
      </Routes>
    </BrowserRouter>
  </MRegFormProvider>
  </FRegFormProvider>
  </MDetailsProvider>
  </FDetailsProvider>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
