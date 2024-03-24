import React from "react";
import { Panel } from "../../components/Panel/Panel";
import { ButtonBlue } from "../../components/ButtonBlue/ButtonBlue";
import "./mint.css";

export const Mint: React.FC = () => {
    return (
        <Panel className='big-panel'>
            <div className='mint-content'>
                <div className='mint-image-block wds'>
                    <img className='mint-image dws' src='/images/temp.png' alt='' />
                    <div className='mint-image-text'>+500 pts</div>
                </div>
                <div className='mint-button-block'>
                    <ButtonBlue className='mint-button'>
                        <img src='/images/printer.png' alt='' />
                        Mint for 0.1 SOL
                    </ButtonBlue>
                    <div className='mint-text'>
                        In these components and the blocks will adjust exactly like this. Even
                        aligning the buttons to the left feel right.
                    </div>
                </div>
            </div>
        </Panel>
    );
};
