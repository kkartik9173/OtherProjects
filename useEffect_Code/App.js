import React, {useState} from 'react';
import FunctionalContextComponent from './FunctionalContextComponent';
import { ThemeProvider } from './ThemeContext';

export default function App() {
    
  return (
      <ThemeProvider>
          <FunctionalContextComponent />
      </ThemeProvider>

  )
}
