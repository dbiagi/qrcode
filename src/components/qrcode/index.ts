export type QRCodeInputType = 'text' | 'image' | 'wifi' | 'link'

export type EncryptionType = 'WPA' | 'WEP' | 'nopass'

export type QRCodeInputValues = {
  text?: string
  image?: string
  ssid?: string
  password?: string
  encryption?: EncryptionType
  hidden?: boolean
  link?: string
}

export function getDataForType(type: QRCodeInputType, values: QRCodeInputValues): string {
  switch (type) {
    case 'text':
      return values.text || ''
    case 'image':
      return values.image || ''
    case 'wifi':
      return buildWifiData(values.ssid || '', values.password || '', values.encryption || 'WPA', values.hidden || false)
    case 'link':
      return values.link || ''
    default:
      return ''
  }
}

function buildWifiData(ssid: string, password: string, encryption: string, hidden: boolean): string {
  const hiddenStr = hidden ? 'H:true;' : ''
  return `WIFI:T:${encryption};S:${ssid};P:${password};${hiddenStr};`
}
