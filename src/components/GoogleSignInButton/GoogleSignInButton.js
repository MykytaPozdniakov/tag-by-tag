import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useAuth } from '../../AuthContext';
import initGoogleAuth  from './initGoogleAuth';
import { GoogleLogin } from '@react-oauth/google';
const GoogleSignInButton = () => {
  const auth = useAuth();

  useEffect(() => {
    (async () => {
      await initGoogleAuth();
      // Здесь ваш код для работы с Google Sign-In после инициализации
    })();
  }, []);

  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    auth.login(userObject);
  }

  return <GoogleLogin
  onSuccess={handleCallbackResponse}
  onError={() => {
    console.log('Login Failed');
  }}  
/>;
};

export default GoogleSignInButton;