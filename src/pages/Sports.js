import React from 'react';
import '../App.css';
import qBank from "../Components/SportsQb";
import MainComponent from '../Components/MainComponent';

function Sports() {
  const link = "/SportsSol"
  return(
    <div>
      <MainComponent qBank = {qBank} solLink = {link}/>
    </div>
  )
}
export default Sports;