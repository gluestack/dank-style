import type { ComponentMeta } from '@storybook/react-native';
import { BaseStyleSX } from './BaseStyleSX';
const MyBaseStyleSXMeta: ComponentMeta<typeof BaseStyleSX> = {
  title: 'recipes/BaseStyleSX',
  component: BaseStyleSX,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {},
};

export { BaseStyleSX } from './BaseStyleSX';
export default MyBaseStyleSXMeta;