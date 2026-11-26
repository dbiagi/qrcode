import { SegmentedControl } from '@mantine/core'
import { ImageIcon, LinkIcon, TextboxIcon, WifiHighIcon } from '@phosphor-icons/react'

import type { QRCodeInputType } from '@/components/qrcode/index.ts'

type QRCodeTypeSelectorProps = {
  onChange?: (value: QRCodeInputType) => void
}

export function QRCodeTypeSelector({ onChange }: QRCodeTypeSelectorProps) {
  return (
    <>
      <SegmentedControl
        defaultValue="text"
        data={[
          { value: 'text', label: <TextboxIcon /> },
          { value: 'image', label: <ImageIcon /> },
          { value: 'wifi', label: <WifiHighIcon /> },
          { value: 'link', label: <LinkIcon /> },
        ]}
        onChange={onChange}
      />
    </>
  )
}
