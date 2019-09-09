//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        {/* <div className="topRow">
         <Club place="home" clubName = "Lions" score={homeScore}/>
          <div className="timer">00:03</div>
         <Club place="away" clubName="Tigers" score={awayScore}/>
        </div> */}
        <TopRow/>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => {
            setHomeScore(homeScore + 7)
          }}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => {
            setHomeScore(homeScore + 3)
          }}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => {
            setAwayScore(awayScore + 7)
          }}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => {
            setAwayScore(awayScore + 3)
          }}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

function TopRow(){
  return (
    <div className="topRow">
         <Club place="home" clubName = "Lions" score={homeScore}/>
          <div className="timer">00:03</div>
         <Club place="away" clubName="Tigers" score={awayScore}/>
        </div>
  )
}


function Club(props){
  return (
    <div className={props.place}>
    <h2 className={`${props.place}__name`}>{props.clubName}</h2>

    {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

    <div className={`${props.place}__score`}>{props.score}</div>
  </div>
  )
}

export default App;
