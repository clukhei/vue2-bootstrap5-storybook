import MyButton from './Button.vue';
import SgdsButton from '../components/SgdsButton.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: SgdsButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    variant: {control: {type: 'text'}}
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SgdsButton },
  template: '<SgdsButton v-bind="$props">Hello World</SgdsButton>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  variant: 'sgds-btn-primary'

};

// export const Secondary = Template.bind({});
// Secondary.args = {

// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',

// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',

// };
