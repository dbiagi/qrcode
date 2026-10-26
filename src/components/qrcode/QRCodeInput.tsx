import { Textarea, TextInput } from '@mantine/core'
import * as React from 'react'

type QRCodeInputType = 'text' | 'image' | 'wifi' | 'link'
type OnChangeValueEvent = (type: QRCodeInputType, value: string) => void

export interface QRCodeInputProps {
  value?: string
  type?: QRCodeInputType
  onChange?: OnChangeValueEvent
}

function WifiInputs() {
  return (
    <>
    </>
  )
}

export function QRCodeInput({ value, type, onChange }: QRCodeInputProps) {
  const currentType = type || 'text'

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(currentType, event.target.value)
    }
  }

  return (
    <>
      <div hidden={currentType !== 'text'}>
        <Textarea description="Enter the QRCode text" onChange={onValueChange} value={value} />
      </div>
      <div hidden={currentType !== 'image'}>
        <TextInput description="Enter the QRCode image URL" onChange={onValueChange} value={value} />
      </div>
      <div hidden={currentType !== 'wifi'}>
        <WifiInputs />
      </div>
      <div hidden={currentType !== 'link'}>
        <TextInput description="Enter the QRCode link URL" onChange={onValueChange} value={value} />
      </div>
    </>
  )
}
