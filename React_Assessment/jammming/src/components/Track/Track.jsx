import React from 'react';
import './Track.css';

export default function Track({trackName, artist, album}) {
    
    return (
        <div className="Track">
        <div className="Track-information">
            <h3>{trackName}</h3>
            <p>{artist} | {album}</p>
        </div>
        <button className="Track-action">+</button>
        </div>
    )
}