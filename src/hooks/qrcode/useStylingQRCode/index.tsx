import QRCodeStyling, {
  type CornerDotType,
  type CornerSquareType,
  type DotType,
  type DrawType,
  type ErrorCorrectionLevel,
  type Mode,
  type Options,
  type TypeNumber,
} from 'qr-code-styling'
import * as React from 'react'
import { useEffect } from 'react'

type QRCodeStylingOptions = {
  width?: number
  height?: number
  data?: string
  backgroundColor?: string
  target: React.Ref<HTMLDivElement>
  onDownloadClick?: (extension: string) => void
}

export function useStylingQRCode({ width, height, data, backgroundColor, target }: QRCodeStylingOptions) {
  const options: Options = {
    width,
    height,
    data,
    type: 'svg' as DrawType,
    image: '/favicon.ico',
    margin: 10,
    qrOptions: {
      typeNumber: 0 as TypeNumber,
      mode: 'Byte' as Mode,
      errorCorrectionLevel: 'Q' as ErrorCorrectionLevel,
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 20,
      crossOrigin: 'anonymous',
    },
    dotsOptions: {
      color: '#222222',
      type: 'rounded' as DotType,
    },
    backgroundOptions: {
      color: backgroundColor || '#ffffff',
    },
    cornersSquareOptions: {
      color: '#222222',
      type: 'extra-rounded' as CornerSquareType,
    },
    cornersDotOptions: {
      color: '#222222',
      type: 'dot' as CornerDotType,
    },
  }

  const qrCode = new QRCodeStyling(options)

  useEffect(() => {
    if (target.current) {
      qrCode.append(target.current)
    }
  })

  return qrCode
}
