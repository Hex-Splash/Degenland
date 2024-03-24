import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./buttonlink.css";

interface Props {
    to: string;
    children?: ReactNode;
    className?: string;
}

export const ButtonLink: React.FC<Props> = ({ to, children, className }) => {
    return (
        <Link className={`link ${className}`} to={to}>
            {children}
        </Link>
    );
};
