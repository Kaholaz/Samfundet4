import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioButton } from './RadioButton';

// Local component config.
export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  args: {
    name: 'name',
  },
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = function (args) {
  return <RadioButton {...args}>Option</RadioButton>;
};

export const Basic = Template.bind({});
Basic.args = {};

export const Samf = Template.bind({});
Samf.args = { theme: 'samf' };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const Checked = Template.bind({});
Checked.args = { checked: true };
