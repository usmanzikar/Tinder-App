import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
  return (
    <div className='header'>
      <IconButton>
    <PersonIcon className='header__icon' fontSize='large'/>
    </IconButton>
    <img className='header__logo' src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png'></img>
    <IconButton>
    <ForumIcon className='header__icon' fontSize='large'/>
    </IconButton>
    </div>
  )
}

export default Header