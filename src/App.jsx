import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card  style={{ width: '18rem' , border: '2px solid blue',borderRadius: '10px'}}>
      <Card.Img variant="top" src="holder.js/100px180" style={{border:'1px solid red',marginTop:'10px',marginLeft:'20px'}}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="fs-4" variant="primary">Switch Employee</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default App
