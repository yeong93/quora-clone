import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './QuoraBox.css';

function QuoraBox() {
    const user = useSelector(selectUser);

    return(
        <div className="quoraBox">
            <div className='quoraBox_info'>
                <Avatar src={user.phto}/>
                <h5>{user.displayName}</h5>
            </div>
            <div className='quoraBox_quora'>
                <p>무엇이 궁금하신가요? </p>
            </div>
        </div>
    );
}

export default QuoraBox;
