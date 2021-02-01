import React from 'react'
import './Toolbar.css'

function Toolbar(props) {
    if(props.Listlength !== 0) {
        return (
            <div className='ToolbarComp'>
                <div id='pageTitle'>{props.title}</div>
                <div id='editBtn'>Edit</div>
                <div id='delBtn'>Delete</div>
            </div>
        )
    }
    else {
        return (
            <div className='ToolbarComp'>
                <div id='pageTitle'>Create a new page.</div>
            </div>
        )
    }
    
}

export default Toolbar
