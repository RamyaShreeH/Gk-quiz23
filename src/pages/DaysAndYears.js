import React from 'react';
import '../App.css';
import qBank from "../Components/DaysAndYearsQb";
import MainComponent from '../Components/MainComponent';

function DaysAndYears() {
  const link = "/DaysAndYearsSol"
  return(
    <div>
      <MainComponent qBank = {qBank} solLink = {link}/>
    </div>
  )
}
export default DaysAndYears;