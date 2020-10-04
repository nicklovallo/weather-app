import React from 'react';

function Search({ search, setSearch, getWeather }) {

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (e.target.firstElementChild.value === '') {
      alert('Please enter a city.')
    } else {
      setSearch(e.target.firstElementChild.value);
      getWeather(e.target.firstElementChild.value);
      e.target.firstElementChild.value = '';
    };
  };

  return (
    <div>

      <form onSubmit={submitHandler} className="form">

        <input 
          className="search" 
          type="text" 
          id="search" 
          placeholder="enter city"
          />

        <input 
          className="submit" 
          type="submit" 
          value="Search" 
          id="submit"
          />

      </form>

    </div>
  );

};

export default Search;
