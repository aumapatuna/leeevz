import Typo from "./Typo"

export default {
  title: "Leeevz/Text",
  component: Typo,
}

const Template = args => <Typo {...args} />

export const XLTextRegular = Template.bind({})
XLTextRegular.args = {
  weight: 'light',
  size: 'xl',
  label: 'XL Light Text',
}

export const XLTextNormal = Template.bind({})
XLTextNormal.args = {
  weight: 'normal',
  size: 'xl',
  label: 'XL Normal Text',
}

export const XLTextSemiBold = Template.bind({})
XLTextSemiBold.args = {
  weight: 'semibold',
  size: 'xl',
  label: 'XL Semibold Text',
}

export const XLTextBold = Template.bind({})
XLTextBold.args = {
  weight: 'bold',
  size: 'xl',
  label: 'XL Bold Text',
}

export const LGTextLight = Template.bind({})
LGTextLight.args = {
  weight: 'light',
  size: 'lg',
  label: 'LG Light Text',
}

export const LGTextNormal = Template.bind({})
LGTextNormal.args = {
  weight: 'normal',
  size: 'lg',
  label: 'LG Normal Text',
}

export const LGTextSemibold = Template.bind({})
LGTextSemibold.args = {
  weight: 'semibold',
  size: 'lg',
  label: 'LG Semibold Text',
}

export const LGTextBold = Template.bind({})
LGTextBold.args = {
  weight: 'bold',
  size: 'lg',
  label: 'LG Bold Text',
}

export const MDTextLight = Template.bind({})
MDTextLight.args = {
  weight: 'light',
  size: 'md',
  label: 'MD Light Text',
}

export const MDTextNormal = Template.bind({})
MDTextNormal.args = {
  weight: 'normal',
  size: 'md',
  label: 'MD Normal Text',
}

export const MDTextSemibold = Template.bind({})
MDTextSemibold.args = {
  weight: 'semibold',
  size: 'md',
  label: 'MD Semibold Text',
}

export const MDTextBold = Template.bind({})
MDTextBold.args = {
  weight: 'bold',
  size: 'md',
  label: 'MD Bold Text',
}

export const SMTextLight = Template.bind({})
SMTextLight.args = {
  weight: 'light',
  size: 'sm',
  label: 'SM Light Text',
}

export const SMTextNormal = Template.bind({})
SMTextNormal.args = {
  weight: 'normal',
  size: 'ms',
  label: 'SM Normal Text',
}

export const SMTextSemibold = Template.bind({})
SMTextSemibold.args = {
  weight: 'semibold',
  size: 'sm',
  label: 'SM Semibold Text',
}

export const SMTextBold = Template.bind({})
SMTextBold.args = {
  weight: 'bold',
  size: 'sm',
  label: 'SM Bold Text',
}

export const XSTextLight = Template.bind({})
XSTextLight.args = {
  weight: 'light',
  size: 'xs',
  label: 'XS Light Text',
}

export const XSTextNormal = Template.bind({})
XSTextNormal.args = {
  weight: 'normal',
  size: 'xs',
  label: 'XS Normal Text',
}

export const XSTextSemibold = Template.bind({})
XSTextSemibold.args = {
  weight: 'semibold',
  size: 'xs',
  label: 'XS Semibold Text',
}

export const XSTextBold = Template.bind({})
XSTextBold.args = {
  weight: 'bold',
  size: 'xs',
  label: 'XS Bold Text',
}