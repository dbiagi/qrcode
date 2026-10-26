import { Button, Grid, Stack } from '@mantine/core'
import { useTranslation } from 'react-i18next'

import { QRCodeImage } from '@/components/qrcode/QRCodeImage.tsx'
import { QRCodeInput } from '@/components/qrcode/QRCodeInput.tsx'
import { QRCodeTypeSelector } from '@/components/qrcode/QRCodeTypeSelector.tsx'

export function QRCodeGenerator() {
  const { t } = useTranslation()

  return (
    <Grid align="center" grow>
      <Grid.Col span={{ base: 10, lg: 4, sm: 10 }}>
        <Stack gap="md" align="center" justify="center">
          <QRCodeTypeSelector />
          <QRCodeInput />
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 10, lg: 2, sm: 10 }}>
        <Stack gap="md" align="center" justify="center">
          <QRCodeImage alt={t('qrcode_placeholder_img_alt')} />
          <div>
            <Button>{t('qrcode_generate_qrcode')}</Button>
          </div>
        </Stack>
      </Grid.Col>
    </Grid>
  )
}
