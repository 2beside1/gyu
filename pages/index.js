import React, { useState, useEffect } from 'react'
const axios = require('axios');

function Home() {
  const user_get = async () => {
    const rep = await axios.get('https://www.surveygyu.ml/')
    console.log(rep.data.message)
  }
  const user_post = async () => {
    const data = { title: 'hi' }
    await axios.post("https://www.surveygyu.ml/user/create", data,)
  }
  return (
    <div>
      <br /><br /><br />
      <div className='main'>
        <span>Hi! This page is for practicing.</span>
        <a className='title' href='http://localhost:3000/form/create'>go to make questions!</a>
      </div>
      <div>
        <button onClick={e => user_get()}>get user</button>
        <button onClick={e => user_post()}>plus user</button>
      </div>
    </div >
  )
}

export default Home;