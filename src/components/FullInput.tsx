import { ChangeEvent, MouseEventHandler, useState } from "react"

export type FullInputPropsType = {
    onClick: (s: string)=>void
}

export const FullInput = ({onClick}: FullInputPropsType) => {

    let [inputText, setInputText] = useState<string>("")
    const changedInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        onClick(inputText)
        setInputText("")
    }

    return (
        <div>
            <input value={inputText} onChange={changedInputHandler} />
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}