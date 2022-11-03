import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DropDown } from './DropDown';

// Local component config.
export default {
  title: 'Components/DropDown',
  component: DropDown,
  args: {
    name: 'name',
    label: 'Choose option',
  },
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = function (args) {
  return <DropDown {...args}></DropDown>;
};

export const Basic = Template.bind({});
Basic.args = {
  option: ['alternativ 1', 'alternativ 2'],
};
export const Many = Template.bind({});
Many.args = {
  option: [
    'alternativ 1',
    'alternativ 2',
    'alternativ 3',
    'alternativ 4',
    'alternativ 5',
    'alternativ 6',
    'alternativ 7',
    'alternativ 8',
    'alternativ 9',
    'alternativ 10',
    'alternativ 11',
    'alternativ 12',
    'alternativ 13',
    'alternativ 14',
    'alternativ 15',
    'alternativ 16',
    'alternativ 17',
    'alternativ 18',
    'alternativ 19',
    'alternativ 20',
    'alternativ 21',
    'alternativ 22',
  ],
};
