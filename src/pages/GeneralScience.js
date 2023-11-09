import React from 'react';
import '../App.css';
import qBank from "../Components/GeneralScienceQb";
import MainComponent from '../Components/MainComponent';

function GeneralScience() {
  const link = "/Gk-quiz23/GeneralScienceSol"
  return(
    <div>
      <MainComponent qBank = {qBank} solLink = {link}/>
    </div>
  )
}
export default GeneralScience;