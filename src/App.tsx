import './index.css'
import './i18n/i18n.ts'
import '@mantine/core/styles.css'

import { createTheme, MantineProvider } from '@mantine/core'
import { StrictMode, Suspense } from 'react'

import { Loading } from '@/components/Loading.tsx'
import { Home } from '@/pages/Home.tsx'

const theme = createTheme({})

function App() {
  return (
    <StrictMode>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      </MantineProvider>
    </StrictMode>
  )
}

export default App
