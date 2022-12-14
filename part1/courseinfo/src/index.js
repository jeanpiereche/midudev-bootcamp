import React from 'react'
import ReactDOM from 'react-dom'

/**
 * Forma corta
  const Title = ({course}) => <h1>{course}</h1>
 */
const Title = (props) => {
  const { course } = props
  return <h1>{course}</h1>
}

const Part = (props) => {
  const { part, exercises } = props
  return <p>{part} {exercises}</p>

}

const Content = (props) => {
  const { part, exercises } = props
  return <div>
    <Part part={part[0]} exercises={exercises[0]} />
    <Part part={part[1]} exercises={exercises[1]} />
    <Part part={part[2]} exercises={exercises[2]} />
  </div>
}

const Total = (props) => {
  const { exercises1, exercises2, exercises3 } = props
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
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
      <Title course={course} />
      <Content part={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))