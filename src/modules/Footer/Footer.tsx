import React from "react";
import { Button } from "../../components/Button/Button";
import { Arrow } from "../../icons/Arrow";
import { MusicPlay } from "../../icons/MusicPlay";
import { MusicRight } from "../../icons/MusicRight";
import { MusicLeft } from "../../icons/MusicLeft";
import "./footer.css";

export const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className='path-bar wds text-18-b'>C:\PROJECTS\DEGENLAND\WEB\Ver_1.0(.exe)</div>

            <div className='footer-block wds'>
                <div className='footer-img-text-block'>
                    <div className='footer-img-block dws'>
                        <img className='footer-img' src='/images/music.png' alt='' />
                    </div>
                    <div className='footer-text-block'>
                        <div className='text-22-b '>My Heart Will Go On</div>
                        <div className='text-22-n'>Celine Dion</div>
                    </div>
                </div>

                <div className='progress-block'>
                    <div className='progress-buttons-block'>
                        <Button className='footer-button'>
                            <MusicLeft />
                        </Button>
                        <Button className='footer-button'>
                            <MusicPlay />
                        </Button>
                        <Button className='footer-button'>
                            <MusicRight />
                        </Button>
                    </div>
                    <div className='progress-bar-block'>
                        <div className='text-22-n'>1:15</div>
                        <div className='progress-bar widthpbm'>
                            <div className='strelochka'>
                                <Arrow />
                            </div>
                        </div>
                        <div className='text-22-n'>4:40</div>
                    </div>
                </div>

                <div className='volume-block'>
                    <div className='progress-bar-block'>
                        <img src='/images/loudspeaker.png' alt='' />
                        <div className='progress-bar widthpbv'>
                            <div className='strelochka'>
                                <Arrow />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
