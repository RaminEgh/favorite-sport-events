export const keyGenerator = (length = 5): string => {
   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
   const charIndex = Math.floor(Math.random() * 27)
   const char = chars.charAt(charIndex)
   let number = 0
   if (length > 1) number = Math.floor(Math.random() * Math.pow(10, length))
   return char + number
}

export const timestampToTime = (timestamp: number) => {
   return new Date(timestamp).toISOString().slice(-13, -8)
}

export const getDate = (day = null) => {
   const date = new Date()
   if (day && day !== 0) {
      date.setDate(date.getDate() + day)
   }
   return date.toISOString().split('T')[0]
}

export const isEmpty = (value) => {
   if (value !== null && value !== undefined) {
      return Object.keys(value).length === 0 && value.constructor === Object
   }
   return true
}

export const capitalize = (str) => {
   return str.charAt(0).toUpperCase() + str.slice(1)
}



