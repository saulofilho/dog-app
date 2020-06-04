import React from 'react';
// import logo from './logo.svg';
// import './App.css';

const Search = ({
  handleSearchInputChanges,
  searchValue,
  callSearchFunction,
}) => {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="">
      <form action="">
        <h1
          onClick={() => {
            refreshPage();
          }}
          onKeyPress={refreshPage}
          role="presentation"
        >
          Can my dog eat this?
        </h1>
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <button className="button" onClick={callSearchFunction} type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Search;
