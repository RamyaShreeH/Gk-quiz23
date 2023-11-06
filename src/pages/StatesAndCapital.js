import React from 'react';
import '../App.css';
import qBank from "../Components/StatesAndCapitalQb";
import MainComponent from '../Components/MainComponent';

function StatesAndCapital() {
  const link = "/Gk-quiz23/StatesAndCapitalSol"
  return(
    <div>
      <MainComponent qBank = {qBank} solLink = {link}/>
    </div>
  )
}
export default StatesAndCapital;