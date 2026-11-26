import { Container, Paper } from '@mantine/core'
import { useTranslation } from 'react-i18next'

import { QRCodeGenerator } from '@/components/qrcode/QRCodeGenerator.tsx'

export function Home() {
  const { t } = useTranslation()

  return (
    <>
      <title>{t('title')}</title>

      <h1 className="center">{t('title')}</h1>

      <main id="center">
        <Container id="app-container" size="md" px={{ base: 'sm', md: 'xl' }}>
          <Paper shadow="md" radius="lg" withBorder p={{ base: 'md', sm: 'xl' }} mt="lg">
            <QRCodeGenerator />
          </Paper>
        </Container>
      </main>
    </>
  )
}
