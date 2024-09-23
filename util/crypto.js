import CryptoJS from 'crypto-js'

const secretKey = '1234567890123456'
const key = CryptoJS.enc.Utf8.parse(secretKey)
const iv = CryptoJS.enc.Utf8.parse(secretKey)

export function encrypt(word) {
  const srcs = CryptoJS.enc.Utf8.parse(word)
  const encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  return encrypted.ciphertext.toString().toUpperCase()
}

export function decrypt(word) {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(word)
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  const decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}

export function hashMd5(word) {
  return CryptoJS.MD5(word).toString()
}
