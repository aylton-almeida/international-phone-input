import { MASK_CHAR } from './constants'

export const applyPhoneMask = (phone: string, mask: string) => {
  let onlyNumbers = phone.replace(/\D/g, '') // Removing all non-numeric characters

  let formatted: string = ''
  // For each character in the mask we will check if the character is a mask character or a normal character
  // If it is a mask character, we will replace it with the first number in the onlyNumbers string
  // If it is a normal character, we will just add it to the formatted string
  // We will do this until we reach the end of the mask or the end of the onlyNumbers string
  if (onlyNumbers.length > 0) {
    for (let i = 0; i < mask.length; i++) {
      const char = mask[i]

      if (char === MASK_CHAR) {
        formatted += onlyNumbers[0]
        onlyNumbers = onlyNumbers.slice(1)
      } else {
        formatted += char
      }

      if (onlyNumbers.length === 0) {
        break
      }
    }
  }

  return formatted
}
