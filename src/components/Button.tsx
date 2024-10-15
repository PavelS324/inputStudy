
export type ButtonPropsType = {
    name: string
    callBack: ()=>void
}

export const Button = ({name, callBack}: ButtonPropsType) => {

    const onClickButtonHandler = () => {
        callBack()
    }

    return (
        <div>
            <button onClick={onClickButtonHandler}>{name}</button>
        </div>
    )
}