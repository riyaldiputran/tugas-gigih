import React, { useState } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button'

export default function Track({ imageUrl, title, artist, select, toggleSelect }) {
  const [isSelected, setIsSelected] = useState(select);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  }

  return (
    <div className="card">
      <div className="card__image">
        <img src={imageUrl} alt={title} data-testid="track-img" />
      </div>

      <div className="card__data">
        <div className="card__content">
          <h3 className="card__title" data-testid="track-title" >{title}</h3>
          <p className="card__artist" data-testid="track-artist">{artist}</p>
        </div>
        
        <div className="card__action">
          <Button
            variant="contained" size="large" color='error' style={{ borderRadius: 50 }}
            onClick={handleToggleSelect}
            data-testid="track-btn-select"
          >
            {isSelected ? 'Deselect' : 'Select'}
          </Button>
        </div>
      </div>
    </div>
  );
}

Track.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  select: PropTypes.bool.isRequired,
};
