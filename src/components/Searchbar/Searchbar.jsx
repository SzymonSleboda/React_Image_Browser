import React, { useState } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [img, setImg] = useState('');

  const handleChange = e => {
    const value = e.target.value.toLowerCase();
    setImg(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (img.trim() === '') {
      toast.warning('Tap some word for searching!');
      return;
    }

    onSubmit(img);
    clearForm();
  };

  const clearForm = () => {
    setImg('');
  };

  return (
    <header className={s.SearchBar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          value={img}
          onChange={handleChange}
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
