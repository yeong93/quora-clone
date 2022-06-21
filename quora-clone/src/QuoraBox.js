import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './QuoraBox.css';

function QuoraBox() {
    const user = useSelector(selectUser);

    // 질문하기 팝업 오픈
    const qstnPopOpen = () => {

    }

    return(
        <div className="quoraBox" onClick={qstnPopOpen}>
            <div className='quoraBox_info'>
                <Avatar src={user.photo}/>
                <h5>{user.displayName ? user.displayName : user.email}</h5>
            </div>
            <div className='quoraBox_quora'>
                <p>무엇이 궁금하신가요? </p>
            </div>
        </div>
    );
}

export default QuoraBox;
