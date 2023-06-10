import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginPage from './LoginPage';

export default {
  title: 'LoginPage',
  component: LoginPage,
};

const Template = (args) => (
  <GoogleOAuthProvider clientId="your-client-id"> {/* Replace "your-client-id" with your actual client ID */}
    <LoginPage {...args} />
  </GoogleOAuthProvider>
);

export const Default = Template.bind({});
