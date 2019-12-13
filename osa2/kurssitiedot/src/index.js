import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => {
    return (
        <p>{props.osa} {props.maara}</p>
    )
}

const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    )
} 
const Content = ( props ) => {
    console.log("Content props ",props)    
           const rows = () => props.parts.map( part =>
                <Part key={part.id} osa={part.name} maara={part.exercises} />
            )
            return (
                <div>
                    {rows()}
                </div>
            )
        
            }

    /*const [osa1, osa2, osa3] = props.course.parts;
    return (
        <div>
        <Part osa={osa1.name} maara={osa1.exercises}/>
        <Part osa={osa2.name} maara={osa2.exercises}/>
        <Part osa={osa3.name} maara={osa3.exercises}/>
        </div>
    )*/

const Total = (props) => {
    console.log("Total props ", props);
    const tulos = props.parts.reduce(function(sum, part){
        return sum + part.exercises
    }, 0)
    return (
        <div>
            <p>Total of {tulos} exercises</p>
        </div>
    )
}

const Course = ({course}) => {
    
    return (
        <div>
        <Header course={course}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
        </div>
    )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'node',
        exercises: 7,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))