import { Button, Grid, Group, Stack, Textarea } from '@mantine/core'
import { useTranslation } from 'react-i18next'

import { QRCodeImage } from '@/components/qrcode/QRCodeImage.tsx'
import { QRCodeTypeSelector } from '@/components/qrcode/QRCodeTypeSelector.tsx'

export function QRCodeGenerator() {
  const { t } = useTranslation()

  return (
    <Grid justify="space-between" grow>
      <Grid.Col span={{ base: 10, lg: 6, sm: 10 }} className="debug">
        <Stack gap="md" align="center" justify="center">
          <Group>
            <QRCodeTypeSelector />
          </Group>
          <div>
            <Textarea description={t('qrcode_textarea_placeholder')} />
          </div>
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 10, lg: 4, sm: 10 }} className="debug">
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
