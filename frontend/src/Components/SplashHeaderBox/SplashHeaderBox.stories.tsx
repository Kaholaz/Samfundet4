import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AuthContextProvider } from '~/AuthContext';
import { GlobalContextProvider } from '~/GlobalContextProvider';
import { SplashHeaderBox } from './SplashHeaderBox';

// Local component config.
export default {
  title: 'Components/SplashHeaderBox',
  component: SplashHeaderBox,
} as ComponentMeta<typeof SplashHeaderBox>;

const Template: ComponentStory<typeof SplashHeaderBox> = function (args) {
  return (
    <>
      <AuthContextProvider>
        <GlobalContextProvider>
          <SplashHeaderBox {...args} />
        </GlobalContextProvider>
      </AuthContextProvider>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
