import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { darkModeContext } from '../context/darkModeContext';
import { useContext, useState } from 'react';

const Navbar = () => {
  const { darkMode, dispatch } = useContext(darkModeContext)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon' />
            English
          </div>
          <div
            className="item"
            onClick={
              () => {
                dispatch({ type: 'TOGGLE' })
              }
            }>
            {
              darkMode ?
                <WbSunnyIcon className='icon' /> :
                <DarkModeOutlinedIcon className='icon' />
            }
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className="counter">12</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className='icon' />

          </div>
          <div className="item">
            <img src="https://tse3.mm.bing.net/th?id=OIP.Mq9AdBWAQaYvnBGVJwkxagHaHa&pid=Api&P=0&w=163&h=163"
              alt="avatar"
              className='avatar'
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar