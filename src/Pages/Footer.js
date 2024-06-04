import React from 'react'

export default function Footer({isDark, setIsDark}) {
    const toggleTheme=()=>{
        setIsDark(!isDark);
    }
  return (
    <footer className='footer'
        style={{backgroundColor: isDark ? 'black':'lightgray'}}>
      <button className='button' onClick={toggleTheme}>DarkMode</button>
    </footer>
  )
}
