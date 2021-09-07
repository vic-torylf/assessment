import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

export default function Playlist({playlistTracks, playlistName, onRemove, onNameChange}) {

    const handleNameChange = (event) => {
        onNameChange(event.target.value);
    }

    return (
        <div className="Playlist">
            <input 
            defaultValue={"New Playlist"}
            onChange={handleNameChange}
            />
            <TrackList 
            trackList={playlistTracks}
            onRemove={onRemove}
            isRemoval={true}
            />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}