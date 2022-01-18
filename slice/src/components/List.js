import React from 'react'
import ListItem from './ListItem'
function List(props) {
	return (
		<ul>
			{props.data.map((el) => {
				return (
					<ListItem
						key={el.id}
						name={el.name}
						age={el.age}
						car={el.carName}
					/>
				)
			})}
		</ul>
	)
}

export default List
