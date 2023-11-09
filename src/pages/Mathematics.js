import React from 'react';
import '../App.css';
import qBank from "../Components/MathematicsQb";
import MainComponent from '../Components/MainComponent';

function Mathematics() {
  const link = "/Gk-quiz23/MathematicsSol"
  return(
    <div>
      <MainComponent qBank = {qBank} solLink = {link}/>
    </div>
  )
}
export default Mathematics;