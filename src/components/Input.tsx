import { ChangeEvent } from "react"

export type InputPropsType = {
    setInputText: (s: string)=>void
    inputText: string
}

export const Input = ({setInputText,  inputText}: InputPropsType) => {

    const changedInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
    }

    return (
        <div>
            <input value={inputText} onChange={changedInputHandler} />
        </div>
    )
}