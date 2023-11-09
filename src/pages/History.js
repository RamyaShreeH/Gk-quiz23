import React from 'react';
import '../App.css';
import qBank from "../Components/HistoryQb";
import MainComponent from '../Components/MainComponent';

function History() {
  const link = "/Gk-quiz23/HistorySol"
  return(
    <div>
      <MainComponent qBank = {qBank} solLink = {link}/>
    </div>
  )
}
export default History;