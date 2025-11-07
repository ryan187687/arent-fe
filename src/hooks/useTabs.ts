'use client';
import { useState } from 'react';

const useTabs = (defaultSelected: string = '') => {
  const [selectedTab, setSelectedTab] = useState<string>(defaultSelected);

  const handleChangeTab = (value: string) => {
    setSelectedTab(value);
  };

  return { selectedTab, handleChangeTab };
};

export default useTabs;
