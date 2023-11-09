import React from 'react';
import '../App.css';
import qBank from "../Components/TechnologyQb";
import MainComponent from '../Components/MainComponent';

function Technology() {
  const link = "/Gk-quiz23/TechnologySol"
  return(
    <div>
      <MainComponent qBank = {qBank} solLink = {link}/>
    </div>
  )
}
export default Technology;