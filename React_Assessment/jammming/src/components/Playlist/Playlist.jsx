import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

export default function Playlist({playlistTracks, playlistName}) {
    return (
        <div className="Playlist">
            <input 
            defaultValue={playlistName}
            />
            <TrackList trackList={playlistTracks}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}