import { useTranslation } from 'react-i18next'
import { Container } from '@mantine/core'
import { QRCodeGenerator } from './components/qrcode/QRCodeGenerator.tsx'

function App() {
  const { t } = useTranslation()

  return (
    <>
      <title>{t('title')}</title>

      <h1>{t('title')}</h1>

      <div id="center">
        <Container>
          <QRCodeGenerator />
        </Container>
      </div>
    </>
  )
}

export default App
