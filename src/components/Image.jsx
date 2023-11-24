import React from 'react'

export default function Image({ src, addclass, size, onClick }) {
    return (
        <span className="">
            <img
                src={src || "https://images.unsplash.com/photo-1557683316-973673baf926?"}
                className={`rounded cursor-pointer ${addclass ? addclass : ''}`}
                width={size || 200}
                height={size || 200}
                alt=""
                onClick={onClick}
                style={{ objectFit: 'cover' }}
            />
        </span>
    )
}
