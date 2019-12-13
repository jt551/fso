import React from 'react'
import ReactDOM from 'react-dom'
import courses from "./components/courses"
import Course from "./components/Course"




const App = ( {courses} ) => { 

  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}

ReactDOM.render(<App courses={courses}/>, document.getElementById('root'))