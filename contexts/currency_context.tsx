"use client";
import axios from "axios";
import React, {
    ReactNode,
    createContext,
    useEffect,
    useState,
} from "react";

interface CurrencyProviderProps {
    children: ReactNode;
}

interface CurrencyContextProps {
    exchangeRateUAH: number; 
    apiData: any; 
}

export const CurrencyContext = createContext<CurrencyContextProps>({
    exchangeRateUAH: 0,
    apiData: null,
});

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
    const [exchangeRateUAH, setExchangeRateUAH] = useState<number>(0);
    const [apiData, setApiData] = useState<any | null>(null);

    useEffect(() => {
      axios.get('https://api.currencyapi.com/v3/latest?apikey=cur_live_gWde5DVb6PpBl5jMYXl5jvkXStJwgcmWerBUBO78')
        .then((response) => {
            const data = response.data;
            setApiData(data);

            const uahRate = data.data.UAH.value;
            setExchangeRateUAH(uahRate);
            console.log(uahRate, "here")
        })
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  return (
    <CurrencyContext.Provider
        value={{
            exchangeRateUAH,
            apiData,
        }}
    >
        {children}
    </CurrencyContext.Provider>
  );
};
