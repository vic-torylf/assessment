import React from 'react';
import './Track.css';

export default function Track() {
    return (
        <div className="Track">
        <div className="Track-information">
            <h3><Track className="name" /></h3>
            <p><Track className="artist" /> | <Track className="album" /></p>
        </div>
        <button className="Track-action"></button>
        </div>
    )
}