import QRCodeStyling, { type Options } from 'qr-code-styling'
import { useCallback, useEffect, useState } from 'react'

export type QRCodeStylingOptions = {
  width?: number
  height?: number
  data?: string
  backgroundColor?: string
}

function buildOptions({ width, height, data, backgroundColor }: QRCodeStylingOptions): Options {
  return {
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
  }
}

export function useStylingQRCode({ width, height, data, backgroundColor }: QRCodeStylingOptions) {
  const [qrCode] = useState(() => new QRCodeStyling(
    buildOptions({ width, height, data, backgroundColor }),
  ))

  useEffect(() => {
    qrCode.update(buildOptions({ width, height, data, backgroundColor }))
  }, [qrCode, width, height, data, backgroundColor])

  const ref = useCallback((node: HTMLDivElement | null) => {
    if (!node) {
      return
    }
    qrCode.append(node)
    return () => {
      node.replaceChildren()
    }
  }, [qrCode])

  return { qrCode, ref }
}
