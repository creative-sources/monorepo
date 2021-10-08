import { Story, Meta } from '@storybook/react';
import { App } from './app';

interface Application {
  title: string;
}

export default {
  component: App,
  title: 'App',
} as Meta;

const Template: Story<Application & JSX.Element> = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'creators',
};
