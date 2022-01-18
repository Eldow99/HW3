import React from 'react'
import './ListItem.css'
function ListItem(props) {
	return (
		<div className='block'>
			<li>{props.name}</li>
			<li>{props.age}</li>
			<li>{props.car}</li>
		</div>
	)
}

export default ListItem
