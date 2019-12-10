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
    console.log(props)
    const [osa1, osa2, osa3] = props.parts;
    return (
        <div>
        <Part osa={osa1.name} maara={osa1.exercises}/>
        <Part osa={osa2.name} maara={osa2.exercises}/>
        <Part osa={osa3.name} maara={osa3.exercises}/>
        </div>
    )
}
const Total = (props) => {
    const [osa1, osa2, osa3] = props.parts;
    return (
<p>Number of exercises : {osa1.exercises + osa2.exercises + osa3.exercises}</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))