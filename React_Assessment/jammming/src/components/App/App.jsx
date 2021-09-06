import React, {useState} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

export default function App() {
    const [selectedResults, setSelectedResults] = useState([
        {
            trackName: 'hihi',
            artist: 'me',
            album: 'album3'
        }
    ])
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

    return (
        <div>
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar setTracks={setTracks}/>
                    <div className="App-playlist">
                        <SearchResults results={tracks}/>
                        <Playlist selectedResults={selectedResults}/>
                    </div>
                </div>
            </div>
        </div>
    )
}