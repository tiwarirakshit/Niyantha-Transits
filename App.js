import { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import Auth from './Auth';
import { ShopContext } from './contexts/ShopContext';
import { UserContext } from './contexts/UserContext';

export default function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']); // This is here to ignore this warning as it won't break anything in production and is safe to use, because sometimes Flatlist need to be in ScrollView
  }, []);

 return (
    <UserContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      <ShopContext.Provider value={{ shops, setShops }}>
        <Auth />
      </ShopContext.Provider>
    </UserContext.Provider>);
}

