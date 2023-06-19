import { Filter } from './Filter';

export default {
  title: 'Filter',
  component: Filter,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    label: 'Filter',
    options: ['all', 'status', 'category', 'date'],
    value: 'all',
  },
};