import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './home/home';
import MVoteControlPage from './ViewContestant/male_contestant/M_voteControlPage';
import MFormPagesControl from './registerContestant/male_contestant/M_FormPagesControl';
import { MRegFormProvider } from './registerContestant/male_contestant/M_RegisterContext';
import {MDetailsProvider} from './ViewContestant/male_contestant/M_VoteDetailsContext'
import  {Hello} from './App.js'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <MDetailsProvider>
  <MRegFormProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/malecontestants" element={ <MVoteControlPage/> }>
        </Route>
        <Route path="/registermale" element={ <MFormPagesControl/> }></Route>
      </Routes>
    </BrowserRouter>
  </MRegFormProvider>
  </MDetailsProvider>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
