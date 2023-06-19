import React from 'react';
import Header from './Header';

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    // Add other links here
  ],
};
