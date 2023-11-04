import React from 'react';
import '../App.css';
import qBank from "../Components/IndianCultureQb";
import MainComponent from '../Components/MainComponent';

function IndianCulture() {
  const link = "/IndianCultureSol"
  return(
    <div>
      <MainComponent qBank = {qBank} solLink = {link}/>
    </div>
  )
}
export default IndianCulture;