import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
const Sidebar = () => {

    const [extended, setExtended] = useState(false)

    return (
        <div className='Sidebar'>
            <div className="top">
                <assets.Menu className='menu img' alt="Menu Icon" onClick={() => setExtended(prev => !prev)}/>
                <div className='New-Chat'>
                    <assets.Plus className='plus img' alt=" Plus " />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?(
                    <div className='Recent'>
                        <p className='Recent-Title'>Recent</p>
                        <div className='Recent-entry'>
                            <assets.Chat className='chat img' alt="Chat" />
                            <p>What is React</p>
                        </div>
                    </div>
                    ): null}
            </div>
            <div className="bottom">
                <div className="Bottom-Item Recent-entry">
                    <assets.History className='History img' alt='Chat-History' />
                    {extended ?<p>Activity</p> :null}
                </div>
                <div className="Bottom-Item Recent-entry">
                    <assets.Settings className='Settings img' alt='Chat-Setting' />
                    {extended ? <p>Setting</p> :null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
