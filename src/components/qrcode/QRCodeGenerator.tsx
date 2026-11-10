import { Grid, Stack } from '@mantine/core'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { QRCodeForm, type QRCodeInputType, type QRCodeInputValues } from '@/components/qrcode/QRCodeForm.tsx'
import { QRCodeImage } from '@/components/qrcode/QRCodeImage.tsx'
import { QRCodeTypeSelector } from '@/components/qrcode/QRCodeTypeSelector.tsx'

export function QRCodeGenerator() {
  const { t } = useTranslation()
  const [selectedType, setSelectedType] = useState<QRCodeInputType>('text')

  const onTypeChange = (value: QRCodeInputType) => {
    setSelectedType(value)
  }

  const onSubmitHandler = (values: QRCodeInputValues) => {
    console.log('Form submitted with values:', values)
  }

  return (
    <Grid align="center" grow>
      <Grid.Col span={{ base: 10, lg: 4, sm: 10 }}>
        <Stack gap="md" align="center" justify="center">
          <QRCodeTypeSelector onChange={onTypeChange} />
          <QRCodeForm type={selectedType as QRCodeInputType} onSubmit={onSubmitHandler} />
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 10, lg: 2, sm: 10 }}>
        <Stack gap="md" align="center" justify="center">
          <QRCodeImage alt={t('qrcode_placeholder_img_alt')} />
        </Stack>
      </Grid.Col>
    </Grid>
  )
}
