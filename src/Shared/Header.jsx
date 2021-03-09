import React, { useEffect } from 'react';

const Header = ({ title = "React Project" }) => {
  useEffect(() => document.title = title);

  return (
    <header className="header">
      <h1 className="text-magenta">{ title }</h1>
    </header>
  );
}
 
export default Header;