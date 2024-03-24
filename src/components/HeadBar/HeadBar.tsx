import React, { ReactNode } from "react";
import "./headbar.css";

export const HeadBar: React.FC<{ children?: ReactNode }> = ({ children }) => {
    return (
        <div className='headbar wds'>
            <div className='headbar-bg'>
                <div className='headbar-content'>{children}</div>
            </div>
        </div>
    );
};
