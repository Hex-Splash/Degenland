import React, { ReactNode } from "react";
import "./textgreen.css";

interface Props {
    children?: ReactNode;
    className?: string;
}

export const TextGreen: React.FC<Props> = ({ children, className, ...props }) => {
    return (
        <div className={`text-green ${className}`} {...props}>
            {children}
        </div>
    );
};
