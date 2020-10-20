import React from 'react';
import io from 'socket.io-client';


export const AppStateContext = React.createContext();


const socket = io('http://172.16.21.211:5000');


const AppRectContextProvider = props => {

  const contextValue={socket}

  return (
    <AppStateContext.Provider value={contextValue}>
      {props.children}
    </AppStateContext.Provider>
  );
};

export default AppRectContextProvider;
