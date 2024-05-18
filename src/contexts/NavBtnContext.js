import React, {createContext, useState} from 'react';

const NavBtnContext = createContext ();

const NavBtnProvider = ({children}) => {
  const [statusBtnNav, setStatusBtnNav] = useState (false);

  return (
    <NavBtnContext.Provider value={{statusBtnNav, setStatusBtnNav}}>
      {children}
    </NavBtnContext.Provider>
  );
};

export {NavBtnContext, NavBtnProvider};
