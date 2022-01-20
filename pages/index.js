import React, { useState, useEffect } from 'react'
const axios = require('axios');
const url = 'https://www.surveygyu.ml/'


function Home() {


  const userGet = async () => {
    const rep = await axios.get(url)
    console.log(rep.data.message)
  }
  const userPost = async () => {
    const data = { title: 'hi' }
    await axios.post(url + "user/create", data,)
  }
  const userDelete = async (id) => {
    await axios.delete(url + "delete/" + id,)
  }
  return (
    <div>
      <br /><br /><br />
      <div className='main'>
        <span>Hi! This page is for practicing.</span>
        <a className='title' href='http://localhost:3000/form/create'>go to make questions!</a>
      </div>
      <div>
        <button onClick={e => userGet()}>get user</button>
        <button onClick={e => userPost()}>plus user</button>
        <input onChange={e => userDelete(e.target.value)}></input>
      </div>
    </div >
  )
}

export default Home;