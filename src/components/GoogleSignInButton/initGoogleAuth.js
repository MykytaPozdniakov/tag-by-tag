const initGoogleAuth = async () => {
    const gapi = window.gapi;
    if (!gapi) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(initGoogleAuth()), 100);
      });
    }
  
    return new Promise((resolve) => {
      gapi.load('auth2', async () => {
        await gapi.auth2.init({
          client_id: '248966481904-huntun2q8cadqqr2d5gbut901nktmglu.apps.googleusercontent.com',
          // Другие параметры инициализации, если нужно
        });
        resolve();
      });
    });
  };

  export default initGoogleAuth;