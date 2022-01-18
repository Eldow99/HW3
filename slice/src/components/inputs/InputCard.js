import React from 'react'
import InputText from './InputText'
function InputCard(props) {
	function SaveDataHandler(data) {
		const saveData = {
			id: Math.random().toString(),
			...data,
		}
		props.onDataHandler(saveData)
		// console.log(saveData)
	}
	return (
		<div>
			<InputText onSaveDataHandler={SaveDataHandler} />
		</div>
	)
}

export default InputCard
