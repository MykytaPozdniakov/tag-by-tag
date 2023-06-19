import React from 'react';
import { AuthProvider } from '../../AuthContext';
import CustomHeader from './Header';
export default {
  title: 'CustomHeader',
  component: CustomHeader,
};

const Template = (args) => (
  <AuthProvider value={{ isAuthenticated: () => true, user: { name: 'User' } }}>
    <CustomHeader {...args} />
  </AuthProvider>
);

export const Default = Template.bind({});
Default.args = {
  links: [
    { url: '/link1', name: 'Link 1' },
    { url: '/link2', name: 'Link 2' },
    // add more links as needed
  ],
};
