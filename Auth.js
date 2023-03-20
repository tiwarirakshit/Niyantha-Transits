import * as Font from 'expo-font';
import React, { useContext, useEffect, useState } from 'react';
import { LoginStack } from './navigation/Navigation';
import TabNavigation from './navigation/TabNavigation';
import { UserContext } from './contexts/UserContext';

const Auth = () => {

  // To allow for the font to load before the app loads
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Poppins: require('./assets/fonts/Poppins.ttf'),
      PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
      PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
      Fredoka: require('./assets/fonts/Fredoka.ttf'),
      FredokaSemiBold: require('./assets/fonts/Fredoka-SemiBold.ttf')
    })
      .then(() => {
        setIsFontLoaded(true)
      });

  }, []);

  const { isUserLoggedIn } = useContext(UserContext);

  if (isFontLoaded && isUserLoggedIn) return (<TabNavigation />)

  if (isFontLoaded) return (<LoginStack />)
}

export default Auth