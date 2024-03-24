import React, { ReactNode } from "react";
import "./panel.css";

interface Props {
    children?: ReactNode;
    className?: string;
}

export const Panel: React.FC<Props> = ({ children, className = "" }) => {
    return (
        <div className={`panel lgs ${className}`}>
            <div className='panel-shadow wds'>
                <div className='panel-paddings'>
                    <div className='panel-border1'>
                        <div className='panel-border2'>
                            <div className='panel-content'>{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
