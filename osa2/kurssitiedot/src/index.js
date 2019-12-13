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

const Course = ({courses}) => {
  console.log(courses);
  const arr = () => courses.map((course, i) =>
        <div key={i}>
         <Header course={course}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
        </div>
        )
  return (
    <div className="container">
      {arr()}
    </div>
  )
  
    
}


const App = () => {
  const courses = [
    {
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }, 
    {
      name: 'Mode.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))