import React from 'react';
import '../App.css';
import qBank from "../Components/AstronomyQb";
import MainComponent from '../Components/MainComponent';

function Astronomy() {
  const link = "/AstronomySol"
  return(
    <div>
      <MainComponent qBank = {qBank} solLink = {link}/>
    </div>
  )
}
export default Astronomy;