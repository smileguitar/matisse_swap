import React, { useState, useContext, createContext } from "react";

type ContextProps = {
  connected: boolean;
  balance: string;
  address: string;
  connect: () => void;
  detail: false;
  setDetail: (v: boolean) => void;
};

const DataContext = createContext<Partial<ContextProps>>({});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }: any) => {
  const [connected, setConnected] = useState(false);
  const [balance, setBalance] = useState('');
  const [address, setAddress] = useState('');
  const [detail, setDetail] = useState(false);

  const connect = () => {
    setConnected(true);
    setBalance('Balance 1 ETH');
    setAddress('0x3452a123d27')
  };

  return (
    <DataContext.Provider
      value={{
        connected,
        balance,
        address,
        connect,
        detail,
        setDetail
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
