import { Avatar } from '@material-ui/core';
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlined, ChatBubbleOutlineOutlined, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@material-ui/icons';
import React from 'react';
import './Post.css';

function Post() {
    return(
        <div className="post">
            <div className='post_info'>
                <Avatar/>
                <h5>유저 아이디</h5>
                <small>작성시간</small>
            </div>

            <div className='post_body'>
                <div className='post_question'>
                    <p>질문내용입니다.</p>

                    <buton className="post_btnAnswer">답변하기</buton>
                </div>

                <div className='post_answer'>
                    <p>답변입니다.</p>
                </div>
                <img />
                
            </div>

            <div className='post_footer'>
                <div className='post_footerAction'>
                    <ArrowUpwardOutlined/>
                    <ArrowDownwardOutlined/>
                </div>
                <RepeatOneOutlined/>
                <ChatBubbleOutlineOutlined/>
                <div className='post_footerRight'>
                    <ShareOutlined/>
                    <MoreHorizOutlined/>
                </div>
            </div>
        </div>


    );
}

export default Post;
