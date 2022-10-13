import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Navbar';

// Local component config.
export default {
  title: 'Components/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

export const Primary = Template.bind({});
