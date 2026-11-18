import * as React from 'react'

import placeholderQrCodeImage from '@/assets/images/placeholder-qrcode.svg'

export type QRCodeImageProps = {
  src?: string
  alt?: string
  overridePlaceholderSrc?: string
} & React.HTMLProps<HTMLImageElement>

export function QRCodeImage({ src, alt, overridePlaceholderSrc = placeholderQrCodeImage, ...props }: QRCodeImageProps) {
  const placeholderSrcToUse = overridePlaceholderSrc || placeholderQrCodeImage

  return (
    <>
      <img src={src || placeholderSrcToUse} alt={alt} {...props} />
    </>
  )
}
