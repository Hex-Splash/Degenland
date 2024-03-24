import React, { ButtonHTMLAttributes } from "react";
import "./buttonblue.css";

export const ButtonBlue: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    className = "",
    ...props
}) => {
    return <button className={`button-blue ${className}`} {...props} />;
};
