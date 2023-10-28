import React from 'react'

export default function ImageInput({ addclass, size }) {
    return (
        <span className="">
            <img
                src="https://images.unsplash.com/photo-1557683316-973673baf926?"
                className={`rounded cursor-pointer ${addclass}`}
                width={size || 200}
                height={size || 200}
                alt="" />
        </span>
    )
}
