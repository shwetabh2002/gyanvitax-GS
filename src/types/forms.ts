export interface CallbackFormData {
  name: string
  mobile: string
  city: string
  service: string
  message: string
  day: string
  month: string
  year: string
  hour: string
  minute: string
  ampm: 'AM' | 'PM'
}

export const emptyCallbackForm = (): CallbackFormData => ({
  name: '',
  mobile: '',
  city: '',
  service: '',
  message: '',
  day: '',
  month: '',
  year: '',
  hour: '10',
  minute: '00',
  ampm: 'AM',
})
