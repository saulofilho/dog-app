import React, { useState, useEffect } from 'react';
import api from './services/api';
// import logo from './logo.svg';
import Search from './components/Search';
import Response from './components/Response';
import './App.css';

const App = () => {
  const [food, setFood] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  async function search(searchValue) {
    try {
      const response = await api.get(`food?food=${searchValue}`);

      setFood(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    search();
  }, []);

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = e => {
    e.preventDefault();
    search(searchValue);
    setSearchValue('');
  };

  return (
    <div className="App">
      <Search
        search={search}
        searchValue={searchValue}
        handleSearchInputChanges={handleSearchInputChanges}
        callSearchFunction={callSearchFunction}
      />
      <Response food={food} />
    </div>
  );
};

export default App;
