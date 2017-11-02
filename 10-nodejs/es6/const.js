const favColor = 'mistyrose'

console.log(favColor)

// favColor = 'pink'

const account = {
  balance: 1000
}

Object.freeze(account)

account.balance = 0

console.log(account.balance)