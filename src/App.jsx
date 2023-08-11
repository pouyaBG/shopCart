import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { useQuery } from 'react-query';
import CardContextProvider from './context/CardContextProvider';

function App() {
  const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  };
  const { data } = useQuery('myData', fetchData);

  return (
    <div>
      <DataProvider data={data}>
        <CardContextProvider>
          <Navbar />
          <Outlet />
        </CardContextProvider>
      </DataProvider>
    </div>
  );
}

export default App;
