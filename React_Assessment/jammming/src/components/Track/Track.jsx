import React from 'react';
import './Track.css';

export default function Track({trackName, artist, album, isRemoval, onAdd, track}) {
    const addTrack = () => {
        onAdd(track);
    }

    const renderAction = () => {
        if (isRemoval === true) {
            return <button className="Track-action">-</button>
        } else {
            return <button className="Track-action" onClick={addTrack}>+</button>
        }
    }


    return (
        <div className="Track">
        <div className="Track-information">
            <h3>{trackName}</h3>
            <p>{artist} | {album}</p>
        </div>
        {renderAction()}
        </div>
    )
}