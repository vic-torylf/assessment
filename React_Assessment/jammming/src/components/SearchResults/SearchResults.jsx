import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

export default function SearchResults({results, onAdd}) {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList 
            trackList={results}
            onAdd={onAdd}
            isRemoval={false}/>
        </div>
    )
}