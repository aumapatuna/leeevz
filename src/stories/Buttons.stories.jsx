import React from 'react';
import { Buttons } from './Buttons';

export default {
  title: 'Leeevz/Buttons',
  component: Buttons,
  argTypes: {
    handleClick: {action: 'handleClick'}
  },
};

const Template = (args) => <Buttons {...args} />;

export const SmallPrimaryPlane = Template.bind({});
SmallPrimaryPlane.args = {
  size: 'small',
  varient: 'primary',
  buttonIcon: 'plane',
  label: 'Button',
};

export const SmallSecondaryPlane = Template.bind({});
SmallSecondaryPlane.args = {
  size: 'small',
  varient: 'secondary',
  buttonIcon: 'plane',
  label: 'Button',
};

export const SmallSecondaryGrayPlane = Template.bind({});
SmallSecondaryGrayPlane.args = {
  size: 'small',
  varient: 'secondary-gray',
  buttonIcon: 'plane',
  label: 'Button',
};

export const SmallSecondaryWhitePlane = Template.bind({});
SmallSecondaryWhitePlane.args = {
  size: 'small',
  varient: 'secondary-white',
  buttonIcon: 'plane',
  label: 'Button',
};

export const SmallSecondaryRedPlane = Template.bind({});
SmallSecondaryRedPlane.args = {
  size: 'small',
  varient: 'secondary-red',
  buttonIcon: 'plane',
  label: 'Button',
};

export const SmallSecondaryNeutralPlane = Template.bind({});
SmallSecondaryNeutralPlane.args = {
  size: 'small',
  varient: 'secondary-neutral',
  buttonIcon: 'plane',
  label: 'Button',
};

export const MediumPrimaryPlane = Template.bind({});
MediumPrimaryPlane.args = {
  size: 'medium',
  varient: 'primary',
  buttonIcon: 'plane',
  label: 'Button',
};

export const MediumSecondaryPlane = Template.bind({});
MediumSecondaryPlane.args = {
  size: 'medium',
  varient: 'secondary',
  buttonIcon: 'plane',
  label: 'Button',
};

export const MediumSecondaryGrayPlane = Template.bind({});
MediumSecondaryGrayPlane.args = {
  size: 'medium',
  varient: 'secondary-gray',
  buttonIcon: 'plane',
  label: 'Button',
};

export const MediumSecondaryWhitePlane = Template.bind({});
MediumSecondaryWhitePlane.args = {
  size: 'medium',
  varient: 'secondary-white',
  buttonIcon: 'plane',
  label: 'Button',
};

export const MediumSecondaryRedPlane = Template.bind({});
MediumSecondaryRedPlane.args = {
  size: 'medium',
  varient: 'secondary-red',
  buttonIcon: 'plane',
  label: 'Button',
};

export const MediumSecondaryNeutralPlane = Template.bind({});
MediumSecondaryNeutralPlane.args = {
  size: 'medium',
  varient: 'secondary-neutral',
  buttonIcon: 'plane',
  label: 'Button',
};

export const LargePrimaryPlane = Template.bind({});
LargePrimaryPlane.args = {
  size: 'large',
  varient: 'primary',
  buttonIcon: 'plane',
  label: 'Button',
};

export const LargeSecondaryPlane = Template.bind({});
LargeSecondaryPlane.args = {
  size: 'large',
  varient: 'secondary',
  buttonIcon: 'plane',
  label: 'Button',
};

export const LargeSecondaryGrayPlane = Template.bind({});
LargeSecondaryGrayPlane.args = {
  size: 'large',
  varient: 'secondary-gray',
  buttonIcon: 'plane',
  label: 'Button',
};

export const LargeSecondaryWhitePlane = Template.bind({});
LargeSecondaryWhitePlane.args = {
  size: 'large',
  varient: 'secondary-white',
  buttonIcon: 'plane',
  label: 'Button',
};

export const LargeSecondaryRedPlane = Template.bind({});
LargeSecondaryRedPlane.args = {
  size: 'large',
  varient: 'secondary-red',
  buttonIcon: 'plane',
  label: 'Button',
};

export const LargeSecondaryNeutralPlane = Template.bind({});
LargeSecondaryNeutralPlane.args = {
  size: 'large',
  varient: 'secondary-neutral',
  buttonIcon: 'plane',
  label: 'Button',
};

export const SmallPrimaryLeftImage = Template.bind({});
SmallPrimaryLeftImage.args = {
  size: 'small',
  varient: 'primary',
  buttonIcon: 'left-image',
  label: 'Button',
};

export const SmallSecondaryLeftImage = Template.bind({});
SmallSecondaryLeftImage.args = {
  size: 'small',
  varient: 'secondary',
  buttonIcon: 'left-image',
  label: 'Button',
};

export const SmallSecondaryGrayLeftImage = Template.bind({});
SmallSecondaryGrayLeftImage.args = {
  size: 'small',
  varient: 'secondary-gray',
  buttonIcon: 'left-image',
  label: 'Button',
};

export const SmallSecondaryWhiteLeftImage = Template.bind({});
SmallSecondaryWhiteLeftImage.args = {
  size: 'small',
  varient: 'secondary-white',
  buttonIcon: 'left-image',
  label: 'Button',
};

export const SmallSecondaryRedLeftImage = Template.bind({});
SmallSecondaryRedLeftImage.args = {
  size: 'small',
  varient: 'secondary-red',
  buttonIcon: 'left-image',
  label: 'Button',
};

export const SmallSecondaryNeutralLeftImage = Template.bind({});
SmallSecondaryNeutralLeftImage.args = {
  size: 'small',
  varient: 'secondary-neutral',
  buttonIcon: 'left-image',
  label: 'Button',
};

export const MediumPrimaryLeftImage = Template.bind({});
MediumPrimaryLeftImage.args = {
  size: 'medium',
  varient: 'primary',
  buttonIcon: 'left-image',
  label: 'Button',
};

export const MediumSecondaryLeftImage = Template.bind({});
MediumSecondaryLeftImage.args = {
  size: 'medium',
  varient: 'secondary',
  buttonIcon: 'left-image',
  label: 'Button',
};

export const MediumSecondaryGrayLeftImage = Template.bind({});
MediumSecondaryGrayLeftImage.args = {
  size: 'medium',
  varient: 'secondary-gray',
  buttonIcon: 'left-image',
  label: 'Button',
};

export const MediumSecondaryWhiteLeftImage = Template.bind({});
MediumSecondaryWhiteLeftImage.args = {
  size: 'medium',
  varient: 'secondary-white',
  buttonIcon: 'left-image',
  label: 'Button',
};

export const MediumSecondaryRedLeftImage = Template.bind({});
MediumSecondaryRedLeftImage.args = {
  size: 'medium',
  varient: 'secondary-red',
  buttonIcon: 'left-image',
  label: 'Button',
};

export const MediumSecondaryNeutralLeftImage = Template.bind({});
MediumSecondaryNeutralLeftImage.args = {
  size: 'medium',
  varient: 'secondary-neutral',
  buttonIcon: 'left-image',
  label: 'Button',
};

export const LargePrimaryLeftImage = Template.bind({});
LargePrimaryLeftImage.args = {
  size: 'large',
  varient: 'primary',
  buttonIcon: 'left-image',
  label: 'Button',
};

export const LargeSecondaryLeftImage = Template.bind({});
LargeSecondaryLeftImage.args = {
  size: 'large',
  varient: 'secondary',
  buttonIcon: 'left-image',
  label: 'Button',
};

export const LargeSecondaryGrayLeftImage = Template.bind({});
LargeSecondaryGrayLeftImage.args = {
  size: 'large',
  varient: 'secondary-gray',
  buttonIcon: 'left-image',
  label: 'Button',
};

export const LargeSecondaryWhiteLeftImage = Template.bind({});
LargeSecondaryWhiteLeftImage.args = {
  size: 'large',
  varient: 'secondary-white',
  buttonIcon: 'left-image',
  label: 'Button',
};

export const LargeSecondaryRedLeftImage = Template.bind({});
LargeSecondaryRedLeftImage.args = {
  size: 'large',
  varient: 'secondary-red',
  buttonIcon: 'left-image',
  label: 'Button',
};

export const LargeSecondaryNeutralLeftImage = Template.bind({});
LargeSecondaryNeutralLeftImage.args = {
  size: 'large',
  varient: 'secondary-neutral',
  buttonIcon: 'left-image',
  label: 'Button',
};

export const SmallPrimaryRightImage = Template.bind({});
SmallPrimaryRightImage.args = {
  size: 'small',
  varient: 'primary',
  buttonIcon: 'right-image',
  label: 'Button',
};

export const SmallSecondaryRightImage = Template.bind({});
SmallSecondaryRightImage.args = {
  size: 'small',
  varient: 'secondary',
  buttonIcon: 'right-image',
  label: 'Button',
};

export const SmallSecondaryGrayRightImage = Template.bind({});
SmallSecondaryGrayRightImage.args = {
  size: 'small',
  varient: 'secondary-gray',
  buttonIcon: 'right-image',
  label: 'Button',
};

export const SmallSecondaryWhiteRightImage = Template.bind({});
SmallSecondaryWhiteRightImage.args = {
  size: 'small',
  varient: 'secondary-white',
  buttonIcon: 'right-image',
  label: 'Button',
};

export const SmallSecondaryRedRightImage = Template.bind({});
SmallSecondaryRedRightImage.args = {
  size: 'small',
  varient: 'secondary-red',
  buttonIcon: 'right-image',
  label: 'Button',
};

export const SmallSecondaryNeutralRightImage = Template.bind({});
SmallSecondaryNeutralRightImage.args = {
  size: 'small',
  varient: 'secondary-neutral',
  buttonIcon: 'right-image',
  label: 'Button',
};

export const MediumPrimaryRightImage = Template.bind({});
MediumPrimaryRightImage.args = {
  size: 'medium',
  varient: 'primary',
  buttonIcon: 'right-image',
  label: 'Button',
};

export const MediumSecondaryRightImage = Template.bind({});
MediumSecondaryRightImage.args = {
  size: 'medium',
  varient: 'secondary',
  buttonIcon: 'right-image',
  label: 'Button',
};

export const MediumSecondaryGrayRightImage = Template.bind({});
MediumSecondaryGrayRightImage.args = {
  size: 'medium',
  varient: 'secondary-gray',
  buttonIcon: 'right-image',
  label: 'Button',
};

export const MediumSecondaryWhiteRightImage = Template.bind({});
MediumSecondaryWhiteRightImage.args = {
  size: 'medium',
  varient: 'secondary-white',
  buttonIcon: 'right-image',
  label: 'Button',
};

export const MediumSecondaryRedRightImage = Template.bind({});
MediumSecondaryRedRightImage.args = {
  size: 'medium',
  varient: 'secondary-red',
  buttonIcon: 'right-image',
  label: 'Button',
};

export const MediumSecondaryNeutralRightImage = Template.bind({});
MediumSecondaryNeutralRightImage.args = {
  size: 'medium',
  varient: 'secondary-neutral',
  buttonIcon: 'right-image',
  label: 'Button',
};

export const LargePrimaryRightImage = Template.bind({});
LargePrimaryRightImage.args = {
  size: 'large',
  varient: 'primary',
  buttonIcon: 'right-image',
  label: 'Button',
};

export const LargeSecondaryRightImage = Template.bind({});
LargeSecondaryRightImage.args = {
  size: 'large',
  varient: 'secondary',
  buttonIcon: 'right-image',
  label: 'Button',
};

export const LargeSecondaryGrayRightImage = Template.bind({});
LargeSecondaryGrayRightImage.args = {
  size: 'large',
  varient: 'secondary-gray',
  buttonIcon: 'right-image',
  label: 'Button',
};

export const LargeSecondaryWhiteRightImage = Template.bind({});
LargeSecondaryWhiteRightImage.args = {
  size: 'large',
  varient: 'secondary-white',
  buttonIcon: 'right-image',
  label: 'Button',
};

export const LargeSecondaryRedRightImage = Template.bind({});
LargeSecondaryRedRightImage.args = {
  size: 'large',
  varient: 'secondary-red',
  buttonIcon: 'right-image',
  label: 'Button',
};

export const LargeSecondaryNeutralRightImage = Template.bind({});
LargeSecondaryNeutralRightImage.args = {
  size: 'large',
  varient: 'secondary-neutral',
  buttonIcon: 'right-image',
  label: 'Button',
};