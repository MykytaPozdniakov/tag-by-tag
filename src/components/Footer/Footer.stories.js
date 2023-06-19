import React from 'react';
import CustomFooter from './Footer'; // Import without curly braces

export default {
  title: 'Footer',
  tags: ['autodocs'],
  component: CustomFooter,
};

const Template = (args) => <CustomFooter {...args} />;

export const Default = Template.bind({});
