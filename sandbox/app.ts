interface UserType {
  id: number
  name: string
  age: number
}
const users = [
  {id: 1, name: "jon", age: 21},
  {id: 2, name: "frank", age: 34},
  {id: 3, name: "aleks", age: 42},
  {id: 4, name: "bob", age: 53},
  {id: 5, name: "linda", age: 18},
]

const over40 = users.reduce((users: Array<UserType>, u) => {
  if (u.age > 40) {
    users.push(u)
  }
  return users
}, [])

const over40WithLoop = (users: Array<UserType>) => {
  const xs = []
  for (const user of users) {
    if (user.age > 40) {
      xs.push(user)
    }
  }
  return xs
}

// console.log(over40WithLoop(users))

const fn = (users: Array<UserType>) => {
  const map: Record<string, UserType> = {}
  for (const user of users) {
    if (user.age > 40) {
      map[user.name] = user
    }
  }
  return map
}

console.log(fn(users))
