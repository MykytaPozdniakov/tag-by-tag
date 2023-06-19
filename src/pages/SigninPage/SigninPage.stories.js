import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';


const Template = (args) => (
  <GoogleOAuthProvider clientId="your-client-id"> {/* Replace "your-client-id" with your actual client ID */}

  </GoogleOAuthProvider>
);

export const Default = Template.bind({});
