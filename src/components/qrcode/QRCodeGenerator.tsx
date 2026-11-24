import { Grid, Stack } from '@mantine/core'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { QRCodeForm, type QRCodeInputType, type QRCodeInputValues } from '@/components/qrcode/QRCodeForm.tsx'
import { QRCodeImage } from '@/components/qrcode/QRCodeImage.tsx'
import { QRCodeTypeSelector } from '@/components/qrcode/QRCodeTypeSelector.tsx'
import { useStylingQRCode } from '@/hooks/qrcode/useStylingQRCode'

const WIDTH = 300
const HEIGHT = 300

export function QRCodeGenerator() {
  const { t } = useTranslation()
  const [selectedType, setSelectedType] = useState<QRCodeInputType>('text')
  const [data, setData] = useState('')
  const isDataEmpty = data === '' || data === undefined || data === null

  const onTypeChange = (value: QRCodeInputType) => {
    setSelectedType(value)
  }

  const { ref: qrcodeContainer } = useStylingQRCode({
    width: WIDTH,
    height: HEIGHT,
    data,
  })

  const onSubmitHandler = (values: QRCodeInputValues) => {
    setData(values.text || '')
  }

  return (
    <Grid align="center" grow>
      <Grid.Col span={{ base: 12, md: 7 }}>
        <Stack gap="md" align="center" justify="center">
          <QRCodeTypeSelector onChange={onTypeChange} />
          <QRCodeForm type={selectedType as QRCodeInputType} onSubmit={onSubmitHandler} />
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 5 }}>
        <div ref={qrcodeContainer} hidden={isDataEmpty} />
        <QRCodeImage alt={t('qrcode_placeholder_img_alt')} height={HEIGHT} width={WIDTH} hidden={!isDataEmpty} />
      </Grid.Col>
    </Grid>
  )
}
