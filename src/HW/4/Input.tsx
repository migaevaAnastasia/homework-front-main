import {ChangeEvent} from "react";

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (t: string) => void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
  const {currentText, setCurrentText} = props
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setCurrentText(event.target.value)
    console.log(event.target.value)
	};

	 return (
	   <input id={'hw04-input'} type="text" value={currentText} onChange={onChangeHandler} />
	 );
};
