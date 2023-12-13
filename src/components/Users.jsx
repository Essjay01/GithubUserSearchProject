import React from 'react';
import "../css/User.css"
import Card from './Card'
import Followers from './Followers'


const Users = () => {
  return (
    <section className='section'>
        <div className="section-center user-wrapper">
        <Card/>
        <Followers/>
        </div>
    </section>
  )
}

export default Users