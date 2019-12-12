import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return(
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

const Statistic = (props) => {
    return (
        <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
        </tr>
    )
}

const Statistics = (props) => {
    const goodvotes = props.good;
    const neutralvotes = props.neutral;
    const badvotes = props.bad;
    const all = props.good + props.neutral + props.bad;
    
    if(all > 0){
    return (
        <div>
            <table>
                <tbody>
            <Statistic text="Good" value={goodvotes} />
            <Statistic text="Neutral" value={neutralvotes} />
            <Statistic text="Bad" value={badvotes} />
            <Statistic text="All" value={all} />
            <Statistic text="Average" value={(goodvotes * 1 + badvotes * -1) / all} />
                </tbody>
            </table>
        </div>
    )} else{
        return(
            <p>No statistics yet..</p>
        )
    }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <h1>How did we do today?</h1>  
        <Button handleClick={()=> setGood(good + 1)} text="Good"/> <Button handleClick={()=> setNeutral(neutral + 1)} text="Neutral"/><Button handleClick={()=> setBad(bad + 1)} text="Bad"/>  
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
