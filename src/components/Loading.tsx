import { Center } from '@mantine/core'

import loadingImage from '@/assets/images/loading.gif'

export function Loading() {
  return (
    <Center pos="fixed" inset={0}>
      <img src={loadingImage} alt="Loading" width={64} height={64} />
    </Center>
  )
}
