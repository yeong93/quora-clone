import { AssignmentTurnedInOutlined, BorderAllRounded, Home, NotificationsOutlined, PeopleAltOutlined } from '@material-ui/icons';
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">

        <div className='qHeader_logo'>
            {/* <img src="" alt="" /> */}

        </div>

        <div className='qHeader_icons'>
            <div className='qHeader_icon'>
                <Home />
            </div>
            <div className='qHeader_icon'>
              <BorderAllRounded />
            </div>
            <div className='qHeader_icon'>
              <AssignmentTurnedInOutlined/>
            </div>
            <div className='qHeader_icon'>
              <PeopleAltOutlined/>
            </div>
            <div className='qHeader_icon'>
              <NotificationsOutlined />
            </div>

        </div>

        <div className='qHeader_input'>
            <input type="text" placeholder="검색하기" />
            <input>search대신</input>
        </div>
    </div>
  );
}

export default Navbar;
