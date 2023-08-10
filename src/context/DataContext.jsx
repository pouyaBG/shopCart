import { createContext, useContext } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children, data }) => (
  <DataContext.Provider value={data}>{children}</DataContext.Provider>
);
