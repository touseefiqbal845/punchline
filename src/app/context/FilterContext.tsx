'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type FilterContextType = {
  isFilterSettings: boolean;
  setFilterSetting: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [isFilterSettings, setFilterSetting] = useState<boolean>(true);

  return (
    <FilterContext.Provider value={{
      isFilterSettings,
      setFilterSetting
    }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
