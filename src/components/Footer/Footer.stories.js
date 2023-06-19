import React from 'react';
import Footer from './Footer'; // Import without curly braces

export default {
  title: 'Footer',
  tags: ['autodocs'],
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
