import { Button, Grid, Group, Stack, Textarea } from '@mantine/core'
import { useTranslation } from 'react-i18next'

export function QRCodeGenerator() {
  const { t } = useTranslation()

  return (
    <div className="debug">
      <Grid justify="space-between">
        <Grid.Col span={{ base: 10, lg: 6, sm: 10 }} className="debug">
          <Stack gap="md" align="center" justify="center">
            <Group>

            </Group>
            <div>
              <Textarea description={t('qrcode_textarea_placeholder')} />
            </div>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 10, lg: 4, sm: 10 }} className="debug">
          <Stack gap="md" align="center" justify="center">
            <div></div>
            <div>
              <Button>{t('qrcode_generate_qrcode')}</Button>
            </div>
          </Stack>
        </Grid.Col>
      </Grid>
    </div>
  )
}
