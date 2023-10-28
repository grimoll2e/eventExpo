import React from 'react'

export default function TextInput({ name }) {
    return (
        <div className="d-flex flex-column">
            <label htmlFor={name}>{name}</label>
            <input type="text" id="{name}" name="" />
        </div>
    )
}
