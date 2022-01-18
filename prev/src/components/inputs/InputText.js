import React from 'react'
import { useState } from 'react'
import './InputText.css'
function InputText(props) {
	const [userInput, setUserInput] = useState({
		name: '',
		age: '',
		carName: '',
	})

	const nameChangeHandler = (e) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				name: e.target.value,
			}
		})
	}

	const ageChangeHandler = (e) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				age: e.target.value,
			}
		})
	}
	const carNameChangeHandler = (e) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				carName: e.target.value,
			}
		})
	}
	const submitHandler = (event) => {
		event.preventDefault()

		props.onSaveDataHandler(userInput)
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
