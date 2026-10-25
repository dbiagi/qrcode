import placeholderQrCodeImage from '@/assets/images/placeholder-qrcode.svg'

export type QRCodeImageProps = {
  src?: string
  alt?: string
  overridePlaceholderSrc?: string
}

export function QRCodeImage({ src, alt, overridePlaceholderSrc = placeholderQrCodeImage }: QRCodeImageProps) {
  const placeholderSrcToUse = overridePlaceholderSrc || placeholderQrCodeImage

  return (
    <>
      <img src={src || placeholderSrcToUse} alt={alt} />
    </>
  )
}
