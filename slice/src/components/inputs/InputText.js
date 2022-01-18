import React from 'react'
import { useState } from 'react'
import './InputText.css'
function InputText(props) {
	const [name, setName] = useState('')
	const [age, setAge] = useState('')
	const [carName, setCarName] = useState('')

	const nameChangeHandler = (e) => {
		setName(e.target.value)
	}

	const ageChangeHandler = (e) => {
		setAge(e.target.value)
	}
	const carNameChangeHandler = (e) => {
		setCarName(e.target.value)
	}
	const submitHandler = (event) => {
		event.preventDefault()
		const textData = {
			name: name,
			age: age,
			carName: carName,
		}
		props.onSaveDataHandler(textData)
	}
	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Name</label>
					<input
						name='name'
						onChange={nameChangeHandler}
						type='text'
					/>
				</div>
				<div className='new-expense__control'>
					<label>Age</label>
					<input
						name='age'
						onChange={ageChangeHandler}
						type='number'
						min='0'
						step='1'
					/>
				</div>
				<div className='new-expense__control'>
					<label>Car name</label>
					<input
						name='carName'
						onChange={carNameChangeHandler}
						type='text'
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add </button>
			</div>
		</form>
	)
}

export default InputText
