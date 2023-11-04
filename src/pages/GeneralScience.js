import React from 'react';
import '../App.css';
import qBank from "../Components/GeneralScienceQb";
import MainComponent from '../Components/MainComponent';

function GeneralScience() {
  const link = "/GeneralScienceSol"
  return(
    <div>
      <MainComponent qBank = {qBank} solLink = {link}/>
    </div>
  )
}
export default GeneralScience;