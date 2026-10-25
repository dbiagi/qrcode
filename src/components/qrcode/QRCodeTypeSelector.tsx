import { SegmentedControl } from '@mantine/core'
import { ImageIcon, LinkIcon, TextboxIcon, WifiHighIcon } from '@phosphor-icons/react'

export function QRCodeTypeSelector() {
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
      />
    </>
  )
}
