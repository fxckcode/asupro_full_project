import { useState } from 'react';

const useMobileNav = () => {
  const [isClosed, setIsClosed] = useState(true);

  const toggleNav = () => {
    setIsClosed(!isClosed);
  };

  return [isClosed, toggleNav];
};

export default useMobileNav;