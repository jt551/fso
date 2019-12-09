import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => {
    return (
        <p>{props.osa} {props.maara}</p>
    )
}

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
} 
const Content = (props) => {
    return (
        <div>
        <Part osa={props.osa1} maara={props.maara1}/>
        <Part osa={props.osa2} maara={props.maara2}/>
        <Part osa={props.osa3} maara={props.maara3}/>
        </div>
    )
}
const Total = (props) => {
    return (
<p>Number of exercises : {props.maara1 + props.maara2 + props.maara3}</p>
    )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content osa1={part1} osa2={part2} osa3={part3} maara1={exercises1} maara2={exercises2} maara3={exercises3}/>      
        <Total maara1={exercises1} maara2={exercises2} maara3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))