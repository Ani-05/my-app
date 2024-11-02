import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
function Main() {
  return (
    <div className='Main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.Profile} alt='Profile' className='pfp'/>
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello,User</span></p>
          <p>How may I help You?</p>
        </div>
        <div className="container">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <assets.Compass className='compass img' alt='Compass'/>
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <assets.Bulb className='bulb img' alt='Bulb'/>
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <assets.Chat className='chat img' alt='Chat'/>
          </div>
          <div className="card">
            <p>Tell me about React js and React native</p>
            <assets.Code className='code img' alt='Code'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
