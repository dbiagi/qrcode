import '@mantine/core/styles.css'
import './index.css'
import './i18n/i18n.ts'

import { createTheme, MantineProvider } from '@mantine/core'
import { StrictMode, Suspense } from 'react'

import { Loading } from '@/components/Loading.tsx'
import { Home } from '@/pages/Home.tsx'

const theme = createTheme({
  fontFamily: 'Segoe UI, Roboto, sans-serif',
  headings: {
    sizes: {
      h1: { fontSize: 'clamp(1.75rem, 5vw + 1rem, 3rem)' },
      h2: { fontSize: 'clamp(1.5rem, 5vw + 1rem, 2rem)' },
      h3: { fontSize: 'clamp(1.5rem, 5vw + 1rem, 2rem)' },
    },
  },
})

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
