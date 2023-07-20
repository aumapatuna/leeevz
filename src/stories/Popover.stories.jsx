import { Popover } from "./Popover"

export default {
  title: "Leeevz/Popover",
  component: Popover,
}

const Template = args => <Popover {...args} />

export const PopoverDark = Template.bind({})
PopoverDark.args = {
  backgroundColor: '#101828',
  color: '#ffffff',
  label: 'Popover dark varient'
}