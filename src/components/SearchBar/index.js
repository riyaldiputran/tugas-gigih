import React, { useState } from 'react';
import Button from '@mui/material/Button'
import './index.css';
import PropTypes from 'prop-types';
import Input from '../Input';
import { searchTrack } from '../../lib/fetchApi';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../slice/authSlice';

export default function SearchBar({ onSuccess, onClearSearch }) {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const [text, setText] = useState('');
  const [isClear, setIsClear] = useState(true);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await searchTrack(text, accessToken);

      const tracks = response.tracks.items;
      onSuccess(tracks, text);
      setIsClear(false);
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(logout());
      } else {
        toast.error(error.message);
      }
    }
  }

  const handleClear = () => {
    onClearSearch();
    setText('');
    setIsClear(true);
  }

  return (
    <div>
      <form className="form-search" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search track..."
          className="form-search__input"
          required
          value={text}
          onChange={handleInput}
        />
        <Button variant="contained" size="large" color='error' style={{ borderRadius: 50 }} type="submit">Search</Button>
      </form>

      {!isClear && (
        <Button variant="contained" size="large" color='error' style={{ borderRadius: 50 }} onClick={handleClear} className="mt-1">Clear search</Button>
      )}
    </div>
  )
}

SearchBar.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired,
};
