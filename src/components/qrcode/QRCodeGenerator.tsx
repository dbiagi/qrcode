import { SimpleGrid, Stack } from '@mantine/core'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { getDataForType, type QRCodeInputType, type QRCodeInputValues } from '@/components/qrcode/index.ts'
import { QRCodeForm } from '@/components/qrcode/QRCodeForm.tsx'
import { QRCodeImage } from '@/components/qrcode/QRCodeImage.tsx'
import { QRCodeTypeSelector } from '@/components/qrcode/QRCodeTypeSelector.tsx'
import { useStylingQRCode } from '@/hooks/qrcode/useStylingQRCode'

import classes from './QRCodeGenerator.module.css'

// Intrinsic resolution of the QR code (and of downloaded images). Display size is controlled by CSS.
const QR_SIZE = 1024

type QRCodeGeneratorProps = {
  initialType?: QRCodeInputType
  initialData?: QRCodeInputValues
}

export function QRCodeGenerator({ initialType = 'text', initialData = {} as QRCodeInputValues }: QRCodeGeneratorProps) {
  const { t } = useTranslation()
  const [selectedType, setSelectedType] = useState<QRCodeInputType>(initialType)
  const [data, setData] = useState(initialData)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onTypeChange = (value: QRCodeInputType) => {
    setSelectedType(value)
  }

  const { ref: qrcodeContainer } = useStylingQRCode({
    width: QR_SIZE,
    height: QR_SIZE,
    data: getDataForType(selectedType, data),
  })

  const onSubmitHandler = (values: QRCodeInputValues) => {
    setIsSubmitted(true)
    setData(values)
  }

  return (
    <SimpleGrid minColWidth="min(100%, 18rem)" autoFlow="auto-fit" spacing="xl">
      <Stack gap="md">
        <QRCodeTypeSelector onChange={onTypeChange} />
        <QRCodeForm type={selectedType as QRCodeInputType} onSubmit={onSubmitHandler} />
      </Stack>
      <div className={classes.preview}>
        {isSubmitted && (<div ref={qrcodeContainer} />)}
        {!isSubmitted && <QRCodeImage alt={t('qrcode_placeholder_img_alt')} height={QR_SIZE} width={QR_SIZE} />}
      </div>
    </SimpleGrid>
  )
}
