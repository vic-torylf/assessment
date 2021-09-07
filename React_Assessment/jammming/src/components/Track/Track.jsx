import React from 'react';
import './Track.css';

export default function Track({trackName, artist, album, isRemoval, onAdd, track, onRemove}) {
    const addTrack = () => {
        onAdd(track);
    }

    const removeTrack = () => {
        onRemove(track);
    }

    const renderAction = () => {
        if (isRemoval === true) {
            return <button className="Track-action" onClick={removeTrack}>-</button>
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