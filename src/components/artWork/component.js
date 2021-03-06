import React from 'react'
import PropTypes from 'prop-types'
import './artWork.css'

const ArtWork = albumArtwork => {
  return albumArtwork.albumImage ? (
    <div className="artwork-box">
      <img
        className="artwork"
        src={
          albumArtwork.albumImage
            ? albumArtwork.albumImage
            : 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg'
        }
        alt="Album Artwork"
      />
    </div>
  ) : (
    <span> </span>
  )
}

ArtWork.propTypes = {
  albumArtwork: PropTypes.string,
}

export default ArtWork
