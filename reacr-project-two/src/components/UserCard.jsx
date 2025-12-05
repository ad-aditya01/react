import React from 'react'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id='user-name'>{props.name}</p>
        <img id='user-img' src="https://www.shutterstock.com/image-vector/dr-apj-abdul-kalam-full-600nw-2405030775.jpg" alt="" />
        <p id='user-description'>{props.desc}</p>

    </div>
  )
}

export default UserCard