import React, { useRef, useEffect } from "react";
import "./codeinput.css";

// https://blog.designly.biz/how-to-create-a-verification-code-input-component-in-react-next-js

interface Props {
    code: string;
    setCode: React.Dispatch<React.SetStateAction<string>>;
    reset?: boolean;
    isLoading?: boolean;
}

export const CodeInput: React.FC<Props> = ({ code, setCode, reset, isLoading }) => {
    // Refs to control each digit input element
    const inputRefs: any[] = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    // Reset all inputs and clear state
    const resetCode = () => {
        inputRefs.forEach((ref: any) => {
            ref.current.value = "";
        });
        inputRefs[0].current.focus();
        setCode("");
    };

    // Listen for external reset toggle
    useEffect(() => {
        resetCode();
        // eslint-disable-next-line
    }, [reset]);

    // Handle input
    function handleInput(event: any, index: number) {
        const input = event.target;
        const previousInput = inputRefs[index - 1];
        const nextInput = inputRefs[index + 1];

        // Update code state with single digit
        const newCode: any = code.split("");

        // Convert lowercase letters to uppercase
        if (/^[a-z]+$/.test(input.value)) {
            const uc = input.value.toUpperCase();
            newCode[index] = uc;
            inputRefs[index].current.value = uc;
        } else {
            newCode[index] = input.value;
        }

        setCode(newCode.join(""));
        input.select();

        if (input.value === "") {
            // If the value is deleted, select previous input, if exists
            if (previousInput) {
                previousInput.current.focus();
            }
        } else if (nextInput) {
            // Select next input on entry, if exists
            nextInput.current.select();
        }
    }

    // Select the contents on focus
    function handleFocus(event: any) {
        event.target.select();
    }

    // Handle backspace key
    function handleKeyDown(event: any, index: number) {
        const input = event.target;
        const previousInput = inputRefs[index - 1];

        if ((event.keyCode === 8 || event.keyCode === 46) && input.value === "") {
            event.preventDefault();
            setCode((prevCode: any) => prevCode.slice(0, index) + prevCode.slice(index + 1));
            if (previousInput) {
                previousInput.current.focus();
            }
        }
    }

    // Capture pasted characters
    const handlePaste = (event: any) => {
        const pastedCode = event.clipboardData.getData("text");
        if (pastedCode.length === 6) {
            setCode(pastedCode);
            inputRefs.forEach((inputRef, index) => {
                inputRef.current.value = pastedCode.charAt(index);
            });
        }
    };

    return (
        <div className='codeinput-container noselect'>
            {[0, 1, 2, 3, 4].map((index) => (
                <>
                    <span key={`span.${index}`} className='codeinput-slash' />
                    <input
                        key={`input.${index}`}
                        className='codeinput wds'
                        type='text'
                        placeholder='?'
                        maxLength={1}
                        onChange={(e) => handleInput(e, index)}
                        ref={inputRefs[index]}
                        autoFocus={index === 0}
                        onFocus={handleFocus}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onPaste={handlePaste}
                        disabled={isLoading}
                    />
                </>
            ))}
            <span className='codeinput-slash' />
        </div>
    );
};
