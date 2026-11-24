import QRCodeStyling, { type Options } from 'qr-code-styling'
import { useCallback, useEffect, useState } from 'react'

export type QRCodeStylingOptions = {
  width?: number
  height?: number
  data?: string
  backgroundColor?: string
}

const DEFAULT_SIZE = 300
const MARGIN_RATIO = 0.03
const IMAGE_MARGIN_RATIO = 0.06

function buildOptions({ width, height, data, backgroundColor }: QRCodeStylingOptions): Options {
  const size = width ?? DEFAULT_SIZE

  return {
    width,
    height,
    data,
    type: 'svg',
    // image: '',
    margin: Math.round(size * MARGIN_RATIO),
    qrOptions: {
      typeNumber: 0,
      mode: 'Byte',
      errorCorrectionLevel: 'Q',
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: Math.round(size * IMAGE_MARGIN_RATIO),
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
