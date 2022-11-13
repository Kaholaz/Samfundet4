import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SamfundetLogo } from '~/Components/SamfundetLogo';

// Local component config.
export default {
  title: 'Components/SamfundetLogo',
  component: SamfundetLogo,
} as ComponentMeta<typeof SamfundetLogo>;

const Template: ComponentStory<typeof SamfundetLogo> = function () {
  return <SamfundetLogo />;
};

export const Basic = Template.bind({});
Basic.args = {};
