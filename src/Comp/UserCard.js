import React from 'react'
import { Button, Card } from 'react-bootstrap'

const UserCard = ({user}) => {
  return (
    <div>
        <Card style={{ width: '18rem' , marginBottom:"20px"}}>
      <Card.Img variant="top" src="https://i.pinimg.com/564x/2c/9e/0f/2c9e0f0f72943eb8585a1c0ef9f44689.jpg" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.username}</Card.Text>
        <Card.Text>{user.email}</Card.Text>
        <Button variant="primary">All Hail!!</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard