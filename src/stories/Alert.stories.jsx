import { Alert } from "./Alert"

export default {
  title: "Leeevz/Alert",
  component: Alert,
}

const Template = args => <Alert {...args} />

export const AlertSuccess = Template.bind({})
AlertSuccess.args = {
  color: '#027A48',
  varient: 'success',
  label: 'The employee has been added successfully.'
}

export const AlertFailed = Template.bind({})
AlertFailed.args = {
  color: '#D92D20',
  varient: 'fail',
  label: 'The employee has not been added.'
}