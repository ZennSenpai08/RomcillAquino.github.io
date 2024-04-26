const value = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const len = 12

let password = " "
for (let i = 0; i = len; i++) {
  const randomNumber = Math.floor(Math.random() * value.length)
  password += value.charAt(randomNumber)
}

