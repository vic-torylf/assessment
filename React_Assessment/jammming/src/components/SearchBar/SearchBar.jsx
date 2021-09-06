import React from 'react';
import './SearchBar.css';

export default function SearchBar({setTracks}) {
    return (
        <div className="SearchBar">
            <input 
            placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton" onClick={() => setTracks([{
                trackName: 'hi3',
                artist: 'me',
                album: 'album3'
            }])}>SEARCH</button>
        </div>
    )
}