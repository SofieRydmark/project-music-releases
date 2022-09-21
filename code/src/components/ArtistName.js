import React from 'react'

const ArtistName = ({ hrefArtist, artist }) => {

    return (
        <a href={hrefArtist} target="_blank" rel="noopener noreferrer">
            <h3 className="artist-name">{artist}</h3>
        </a>
    )
}

export default ArtistName;