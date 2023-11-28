/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/

const previousPasswords = ["Jamaican*98", "Paç*ca10", "Cavalinh@64", "S2!Peter.Genius!S2"]

function isLongEnough(password) {
  return password.length >= 5
}

function isThereUppercase(password) {
  return /\p{Lu}/u.test(password)
}

function isThereLowercase(password) {
  return /\p{Ll}/u.test(password)
}

function isThereNumber(password) {
  return /\p{Nd}/u.test(password)
}

function isThereSymbol(password) {
  return /[\p{S}*@]/u.test(password)
}

function isPreviousPassword(password) {
  return previousPasswords.includes(password)
}

function isValidPassword(password) {
  const isLongEnoughValue = isLongEnough(password);
  const isThereUppercaseValue = isThereUppercase(password);
  const isThereLowercaseValue = isThereLowercase(password);
  const isThereNumberValue = isThereNumber(password);
  const isThereSymbolValue = isThereSymbol(password);
  const isPreviousPasswordValue = isPreviousPassword(password);

  if (isLongEnoughValue && isThereUppercaseValue && isThereLowercaseValue && isThereNumberValue && isThereSymbolValue && !isPreviousPasswordValue) {
    return true
  } return false
}

test('check the password length', () => {
  expect(isLongEnough('2Tac')).toBe(false)
  expect(isLongEnough('2Tac*s')).toBe(true)
})


test('check if there is at least one uppercase character', () => {
  expect(isThereUppercase('2tac*s')).toBe(false)
  expect(isThereUppercase('2Tac*s')).toBe(true)
})

test('check if there is at least one lowercase character', () => {
  expect(isThereLowercase('2TAC*S')).toBe(false)
  expect(isThereLowercase('2Tac*s')).toBe(true)
})

test('check if there is at least one number', () => {
  expect(isThereNumber('Tac*s')).toBe(false)
  expect(isThereNumber('2Tac*s')).toBe(true)
})

test('check if there is at least one symbol', () => {
  expect(isThereSymbol('2Tacos')).toBe(false)
  expect(isThereSymbol('2Tac*s')).toBe(true)
})

test('check if the password has not been used before', () => {
  expect(isPreviousPassword('2Tac*s')).toBe(false)
  expect(isPreviousPassword('Jamaican*98')).toBe(true)
  expect(isPreviousPassword('Paç*ca10')).toBe(true)
})

test('returns false for invalid passwords', () => {
  expect(isValidPassword('2Tac')).toBe(false)
  expect(isValidPassword('2tac*s')).toBe(false)
  expect(isValidPassword('2TAC*S')).toBe(false)
  expect(isValidPassword('Tac*s')).toBe(false)
  expect(isValidPassword('2Tacos')).toBe(false)
  expect(isValidPassword('Cavalinh@64')).toBe(false)
})

test('works for valid passwords', () => { 
  expect(isValidPassword('2Tac*s')).toBe(true)
  expect(isValidPassword('Tr*mba7!')).toBe(true)
  expect(isValidPassword('Paç*ca15')).toBe(true)
 })