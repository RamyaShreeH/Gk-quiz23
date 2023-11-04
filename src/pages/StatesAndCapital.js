import React from 'react';
import '../App.css';
import qBank from "../Components/StatesAndCapitalQb";
import MainComponent from '../Components/MainComponent';

function StatesAndCapital() {
  const link = "/StatesAndCapitalSol"
  return(
    <div>
      <MainComponent qBank = {qBank} solLink = {link}/>
    </div>
  )
}
export default StatesAndCapital;