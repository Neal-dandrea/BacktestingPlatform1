import React from 'react';

function Card({ title, content }) {
    return (
        <div className="p-4 shadow-lg rounded-lg bg-white">
            <h3 className="text-lg font-bold">{title}</h3>
            <p>{content}</p>
        </div>
    );
}

export default Card;
