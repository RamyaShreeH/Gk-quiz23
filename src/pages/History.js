import React from 'react';
import '../App.css';
import qBank from "../Components/HistoryQb";
import MainComponent from '../Components/MainComponent';

function History() {
  const link = "/HistorySol"
  return(
    <div>
      <MainComponent qBank = {qBank} solLink = {link}/>
    </div>
  )
}
export default History;