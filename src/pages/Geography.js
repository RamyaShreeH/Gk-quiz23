import React from 'react';
import '../App.css';
import qBank from "../Components/GeographyQb";
import MainComponent from '../Components/MainComponent';

function Geography() {
  const link = "/Gk-quiz23/GeographySol"
  return(
    <div>
      <MainComponent qBank = {qBank} solLink = {link}/>
    </div>
  )
}
export default Geography;