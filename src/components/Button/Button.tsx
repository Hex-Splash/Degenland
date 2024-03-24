import React, { ButtonHTMLAttributes } from "react";
import "./button.css";

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    className = "",
    ...props
}) => {
    return <button className={`button ${className}`} {...props} />;
};
