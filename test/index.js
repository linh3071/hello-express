import {encrypt, decrypt} from "../util/crypto.js";

const password = 'admin123'

const encrypted = encrypt(password)
console.log(encrypted)

const decrypted = decrypt(encrypted)
console.log(decrypted)
