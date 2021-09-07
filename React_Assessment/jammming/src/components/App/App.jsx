import React, {useState} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

export default function App() {
    const [tracks, setTracks] = useState([
        {
            trackName: 'hi',
            artist: 'me',
            album: 'first album'
        },
        {
            trackName: 'hi2',
            artist: 'me',
            album: 'second album'
        }
    ]);

    const [playlistName, setPlaylistName] = useState('My Playlist');

    const [playlistTracks, setPlaylistTracks] = useState([
        {
            trackName: 'hihi',
            artist: 'me',
            album: 'second album'
        }
    ]);
    
    const addTrack = (track) => {
        setPlaylistTracks(prev => [track, ...prev])
    }

    const removeTrack = (track) => {
        setPlaylistTracks(prev => prev.filter(playlistTracks => track !== playlistTracks))
    }

    return (
        <div>
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar setTracks={setTracks}/>
                    <div className="App-playlist">
                        <SearchResults 
                        results={tracks}
                        onAdd={addTrack}/>
                        <Playlist 
                        playlistTracks={playlistTracks}
                        playlistName={playlistName}
                        onRemove={removeTrack}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}