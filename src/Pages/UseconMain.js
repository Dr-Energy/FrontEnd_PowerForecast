import React from 'react'
import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';

export default function UseconMain() {
    const [isDark, setIsDark]=useState(false);
  return (
    <div>
      <Page isDark={isDark} setIsDark={setIsDark}/>
    </div>
  )
}
