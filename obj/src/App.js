import './App.css'
import InputCard from './components/inputs/InputCard'
import List from './components/List'
import { useState } from 'react'
const INIT_STATE = [
	{ id: 'e1', name: 'ELdiyar', age: 22, carName: 'Lexus' },
	{ id: 'e2', name: 'Abay', age: 22, carName: 'BMW' },
]
function App() {
	const [dataS, setDatas] = useState(INIT_STATE)
	const dataHandler = (d) => {
		const data = {
			...d,
		}
		setDatas((PrevData) => {
			return [data, ...PrevData]
		})
		console.log(data)
	}
	return (
		<div className='App'>
			<InputCard onDataHandler={dataHandler} />
			<List data={dataS} />
		</div>
	)
}

export default App
