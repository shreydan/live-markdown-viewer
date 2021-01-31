import React from 'react'
import './ListItem.css'

function ListItem(props) {
    return (
        <div id="item"
             style={{'backgroundColor': props.active ? '#222222' : '#303030'}}>
            <div>{props.title}</div>
        </div>
    )
}

export default ListItem
