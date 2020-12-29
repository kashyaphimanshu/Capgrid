import './App.css';
import React, { useState } from "react";
import {Switch, Route} from "react-router-dom";
import FirstScreen from './Component/FirstScreen';
import SecondScreen from './Component/SecondScreen';
import logo from './caplogo.jpg';

const gridData = [
  {
      "name": "Smruti",
      "grade": "Electrical",
      "percentage": "88%",
  }, {
      "name": "John",
      "grade": "Computer",
      "percentage": "85%",
  }, {
      "name": "Simmy",
      "grade": "Mechanical",
      "percentage": "92%",
  }, {
      "name": "Himanshu",
      "grade": "Computer",
      "percentage": "90%",
  }, {
      "name": "Samay",
      "grade": "Electronics",
      "percentage": "80%",
  }];

function App() {
  const [selectedData, setSelectedData]=useState([]);
  return (
    <React.Fragment>
      <div className="header"><img src={logo} alt="CapGrid Solutions" style={{height:"80px"}}/></div>
      
      <Switch>
        <Route exact path="/">
         <FirstScreen GridData={gridData} UpdateRecords={setSelectedData}/>
        </Route>
        <Route path="/records">
         <SecondScreen GridData={selectedData}/>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
