import React, { useState } from 'react';

function SearchBar({ onSearch, placeholder = "Search..." }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        style={{
          padding: '8px 12px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          width: '250px',
          outline: 'none'
        }}
      />
      <button
        type="submit"
        style={{
          padding: '8px 16px',
          marginLeft: '8px',
          borderRadius: '4px',
          border: 'none',
          backgroundColor: '#4f46e5',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;