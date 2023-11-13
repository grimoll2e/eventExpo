import React from 'react'

export default function Button({ text, type, onClick }) {
    return (
        <button className="btn btn-link text-decoration-none bg-body-secondary" type={type || 'button'} onClick={onClick}>{text}</button>
    )
}
