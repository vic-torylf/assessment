import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

export default function TrackList({trackList, onAdd, isRemoval}) {
    return (
        <div className="TrackList">
            {trackList && trackList.map((track) => {
                return <Track 
                        trackName={track.trackName}
                        artist={track.artist}
                        album={track.album}
                        isRemoval={isRemoval}
                        onAdd={onAdd}
                        track={track}
                        />
            })}
        </div>
    )
}