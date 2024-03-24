import React from "react";
import { HeadBar } from "../../components/HeadBar/HeadBar";
import { Button } from "../../components/Button/Button";
import "./profile.css";

export const Profile: React.FC = () => {
    return (
        <div className='profile-content'>
            <div className='profile-top-content'>
                <div className='profle-panel wds'>
                    <HeadBar>
                        <div className='profile-headbar'>
                            <div className='profile-headbar-text'>
                                <img
                                    className='head-headbar-icon'
                                    src='/images/favicon.ico'
                                    alt=''
                                />
                                Your invite codes
                            </div>
                            <div className='head-headbar-buttons'>
                                <Button className='head-headbar-button'>+</Button>
                            </div>
                        </div>
                    </HeadBar>
                    <div className='profile-list'>
                        <li className='profile-mark'>123</li>
                        <li className='profile-mark'>123</li>
                        <li className='profile-mark'>123</li>
                    </div>
                </div>
                <div className='profle-panel wds'>
                    <HeadBar>
                        <div className='profile-headbar'>
                            <div className='profile-headbar-text'>
                                <img
                                    className='head-headbar-icon'
                                    src='/images/favicon.ico'
                                    alt=''
                                />
                                Your invite codes
                            </div>
                            <div className='head-headbar-buttons'>
                                <Button className='head-headbar-button'>+</Button>
                            </div>
                        </div>
                    </HeadBar>
                    <div>Profile</div>
                </div>
            </div>

            <div className='profle-panel wds'>
                <HeadBar>
                    <div className='profile-headbar'>
                        <div className='profile-headbar-text'>
                            <img className='head-headbar-icon' src='/images/favicon.ico' alt='' />
                            Your invite codes
                        </div>
                        <div className='head-headbar-buttons'>
                            <Button className='head-headbar-button'>+</Button>
                        </div>
                    </div>
                </HeadBar>
                <Button className='profile-refund-button' onClick={() => console.log("CLICK")}>
                    <span>1000 pts</span>
                    <img src='/images/outlook_express.png' alt='' />
                    <span>0.1 SOL</span>
                </Button>
            </div>
        </div>
    );
};
