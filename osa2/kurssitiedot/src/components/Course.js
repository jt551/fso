import React from "react";

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

export default Course;