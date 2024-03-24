import React, { useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import { CodeInput } from "../../components/CodeInput/CodeInput";
import { Panel } from "../../components/Panel/Panel";
import { ButtonBlue } from "../../components/ButtonBlue/ButtonBlue";
import { TextGreen } from "../../components/TextGreen/TextGreen";
import "./code.css";

export const Code: React.FC = () => {
    const [code, setCode] = useState("");

    const [uploadCode] = useFetching(async () => {
        // вот сюда запрос к бэку, через аксиос, все есть в директории api
        console.log(code);
    });

    const submit = () => {
        uploadCode();
    };

    return (
        <Panel className='big-panel'>
            <div className='code-content'>
                <TextGreen className='code-title'>Enter your invite code</TextGreen>
                <CodeInput code={code} setCode={setCode} />
                <ButtonBlue className='code-button' onClick={submit}>
                    <img src='/images/internet_connection.png' alt='' />
                    ENTER
                </ButtonBlue>
            </div>
        </Panel>
    );
};
