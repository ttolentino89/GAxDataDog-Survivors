import React from 'react'

const Alert = ({ active, error, onClick, msg }) => {
    const toggleAlert = active ? 'hide' : 'show'
    const toggleColor = error ? 'danger' : 'success'
    return (
        <div className={`alert ${toggleAlert} ${toggleColor}`}>
            <h3 onClick={onClick}>X</h3>
            <p>{msg || 'Error'}</p>
        </div>
    )
}

export default Alert