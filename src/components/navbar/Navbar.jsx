import {  ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListAltOutlined,   NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material'
import React, { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'
import "./navbar.scss"

function Navbar() {
    const {dispatch} = useContext(DarkModeContext)

  return  (
    <div className='navbar' >
        <div className="wrapper">
            <div className="serach">
                <input type="text" placeholder='search ...' />
                <SearchOutlined className='icon'/>
            </div>
            <div className="items">
                <div className="item">
                    <LanguageOutlined className='icon' />
                    English
                </div>
                <div className="item">
                    <DarkModeOutlined className='icon' onClick={()=>dispatch({type:"TOGGLE"})}/>
                    
                </div>
                <div className="item">
                    <FullscreenExitOutlined className='icon'/>
                    
                </div>
                <div className="item">
                    <NotificationsNoneOutlined className='icon'/>
                    
                </div>
                <div className="item">
                    <ChatBubbleOutlineOutlined className='icon'/>
                    
                </div>
                <div className="item">
                    <ListAltOutlined className='icon'/>
                    
                </div>
                <div className="item">
                <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='avatar' />

                </div>
            </div>
        </div>
    </div>
  )
} 

export default Navbar