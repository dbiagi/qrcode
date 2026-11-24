import { SimpleGrid, Stack } from '@mantine/core'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { QRCodeForm, type QRCodeInputType, type QRCodeInputValues } from '@/components/qrcode/QRCodeForm.tsx'
import { QRCodeImage } from '@/components/qrcode/QRCodeImage.tsx'
import { QRCodeTypeSelector } from '@/components/qrcode/QRCodeTypeSelector.tsx'
import { useStylingQRCode } from '@/hooks/qrcode/useStylingQRCode'

import classes from './QRCodeGenerator.module.css'

// Intrinsic resolution of the QR code (and of downloaded images). Display size is controlled by CSS.
const QR_SIZE = 1024

export function QRCodeGenerator() {
  const { t } = useTranslation()
  const [selectedType, setSelectedType] = useState<QRCodeInputType>('text')
  const [data, setData] = useState('')
  const isDataEmpty = data === '' || data === undefined || data === null

  const onTypeChange = (value: QRCodeInputType) => {
    setSelectedType(value)
  }

  const { ref: qrcodeContainer } = useStylingQRCode({
    width: QR_SIZE,
    height: QR_SIZE,
    data,
  })

  const onSubmitHandler = (values: QRCodeInputValues) => {
    setData(values.text || '')
  }

  return (
    <SimpleGrid minColWidth="min(100%, 18rem)" autoFlow="auto-fit" spacing="xl">
      <Stack gap="md">
        <QRCodeTypeSelector onChange={onTypeChange} />
        <QRCodeForm type={selectedType as QRCodeInputType} onSubmit={onSubmitHandler} />
      </Stack>
      <div className={classes.preview}>
        <div ref={qrcodeContainer} hidden={isDataEmpty} />
        <QRCodeImage alt={t('qrcode_placeholder_img_alt')} height={QR_SIZE} width={QR_SIZE} hidden={!isDataEmpty} />
      </div>
    </SimpleGrid>
  )
}
