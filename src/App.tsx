import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { FullInput } from './components/FullInput';
import { Input } from './components/Input';
import { Button } from './components/Button';

function App() {

    let [message, setMessage] = useState<MessageType[]>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addMessage = (s: string) => {
        console.log(s);
        setMessage([{message: s}, ...message])
    }

    let [inputText, setInputText] = useState<string>("")

    const onClickButtonHandler = () => {
        addMessage(inputText)
        setInputText("")
    }

    return (
        <div className={'App'}>
            {/*<div>
                <input/>
                <button>+</button>
            </div>*/}
            <FullInput onClick={addMessage} />
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
            <Input inputText={inputText} setInputText={setInputText} />
            <Button name="+" callBack={onClickButtonHandler} />
        </div>
    );
}

type MessageType = {
    message: string
}


export default App;
