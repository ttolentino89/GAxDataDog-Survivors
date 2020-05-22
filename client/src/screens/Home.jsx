import React from 'react'
import Layout from '../components/shared/Layout'
import Fade from 'react-reveal/Fade'
import bark from './bark.png'

const Home = () => (
    <Layout>
      <Fade>
        <h4>Woof! You're in!</h4>
        <p>Global announcements from your teams will be made here.</p>
        <p>Click "tasks" on the left to view upcoming events and join the fun!</p>
        <p>Join the pack and connect with teammates in "teams"</p>
        <img src={bark} />
      </Fade>
    </Layout>
)

export default Home
