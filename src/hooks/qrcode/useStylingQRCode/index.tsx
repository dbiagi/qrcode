import QRCodeStyling, { type Options } from 'qr-code-styling'
import * as React from 'react'
import { useEffect, useMemo, useState } from 'react'

export type QRCodeStylingOptions = {
  target: React.RefObject<HTMLDivElement>
  width?: number
  height?: number
  data?: string
  backgroundColor?: string
  onDownloadClick?: (extension: string) => void
}

export function useStylingQRCode({ width, height, data, backgroundColor, target }: QRCodeStylingOptions) {
  const options = useMemo<Options>(() => ({
    width,
    height,
    data,
    type: 'svg',
    // image: '',
    margin: 10,
    qrOptions: {
      typeNumber: 0,
      mode: 'Byte',
      errorCorrectionLevel: 'Q',
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 20,
      crossOrigin: 'anonymous',
    },
    dotsOptions: {
      color: '#222222',
      type: 'square',
    },
    backgroundOptions: {
      color: backgroundColor || '#ffffff',
    },
    cornersSquareOptions: {
      color: '#222222',
      type: 'square',
    },
    cornersDotOptions: {
      color: '#222222',
      type: 'square',
    },
  }), [backgroundColor, data, height, width])

  const [qrCode] = useState(() => new QRCodeStyling(options))

  useEffect(() => {
    const container = target.current
    if (!container) {
      return
    }
    qrCode.append(container)
    return () => {
      container.replaceChildren()
    }
  }, [qrCode, target])

  useEffect(() => {
    qrCode.update(options)
  }, [qrCode, options])

  return qrCode
}
