import { Button, Checkbox, PasswordInput, Select, Stack, Textarea, TextInput } from '@mantine/core'
import { useForm, type UseFormReturnType } from '@mantine/form'
import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

export type QRCodeInputType = 'text' | 'image' | 'wifi' | 'link'
export type QRCodeInputValues = {
  text?: string
  image?: string
  ssid?: string
  password?: string
  encryption?: 'WPA' | 'WEP' | 'nopass'
  hidden?: boolean
  link?: string
}

export interface QRCodeInputProps {
  value?: string
  type?: QRCodeInputType
  onSubmit: (values: QRCodeInputValues) => void
}

function WifiInputs({ form }: { form: UseFormReturnType<Record<string, unknown>> }) {
  const { t } = useTranslation()

  return (
    <Stack gap="md">
      <TextInput key={form.key('ssid')} {...form.getInputProps('ssid')} description={t('qrcode_form_wifi_ssid_description')} />
      <PasswordInput key={form.key('password')} {...form.getInputProps('password')} description={t('qrcode_form_wifi_password_description')} />
      <Select
        key={form.key('encryption')}
        {...form.getInputProps('encryption')}
        description={t('qrcode_form_wifi_encryption_description')}
        data={[
          { value: 'WPA', label: 'WPA/WPA2/WPA3' },
          { value: 'WEP', label: 'WEP' },
          { value: 'nopass', label: t('qrcode_form_wifi_encryption_none') },
        ]}
      />
      <Checkbox key={form.key('hidden')} {...form.getInputProps('hidden', { type: 'checkbox' })} label={t('qrcode_form_wifi_hidden_label')} />
    </Stack>
  )
}

export function QRCodeForm({ value, type, onSubmit }: QRCodeInputProps) {
  const currentType = type || 'text'
  const { t } = useTranslation()
  const form = useForm({
    initialValues: {
      text: '',
      image: '',
      ssid: '',
      password: '',
      encryption: 'WPA',
      hidden: false,
      link: '',
    },
  })
  const onSubmitHandler = form.onSubmit(values => onSubmit(values as QRCodeInputValues))
  const getFields = (): ReactNode => {
    switch (currentType) {
      case 'text':
        return <Textarea key={form.key('text')} {...form.getInputProps('text')} description={t('qrcode_form_textarea_description')} value={value} />
      case 'image':
        return <TextInput key={form.key('image')} {...form.getInputProps('image')} description={t('qrcode_form_image_input_description')} value={value} />
      case 'wifi':
        return <WifiInputs form={form} />
      case 'link':
        return <TextInput key={form.key('link')} {...form.getInputProps('link')} description={t('qrcode_form_link_input_description')} value={value} />
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <Stack>
        {getFields()}
        <Button type="submit">{t('qrcode_generate_qrcode')}</Button>
      </Stack>

    </form>
  )
}
