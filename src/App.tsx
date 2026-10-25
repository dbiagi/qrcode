import { Container } from '@mantine/core'
import { useTranslation } from 'react-i18next'

import { QRCodeGenerator } from './components/qrcode/QRCodeGenerator.tsx'

function App() {
  const { t } = useTranslation()

  return (
    <>
      <title>{t('title')}</title>

      <h1>{t('title')}</h1>

      <main id="center">
        <Container>
          <QRCodeGenerator />
        </Container>
      </main>
    </>
  )
}

export default App
