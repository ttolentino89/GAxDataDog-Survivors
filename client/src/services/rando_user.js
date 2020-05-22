import React from 'react'
import axios from 'axios'

const BASE_URL = "https://api.randomuser.me/"

async function fetchUser() {
  try {
    const response = await axios.get(BASE_URL)
    return response
  } catch (error) {
    console.log(error)
  }
}

export default fetchUser
