import AsyncStorage from '@react-native-community/async-storage';

export async function getUser () {
  let userJson
  await AsyncStorage.getItem('user')
    .then((profile) => {
      if (profile) {
        userJson = JSON.parse(profile)
      } else {
        userJson = {}
      }
    }).catch((err) => {
      userJson = { err }
    })

  return userJson
}

export async function setUserProperty (property) {
  try {
    const user = await getUser()
    await AsyncStorage.setItem(
      'user',
      JSON.stringify({ ...user, ...property })
    )
  } catch (err) {
    throw err
  }
}

export async function logOutUser () {
  try {
    await AsyncStorage.setItem(
      'user',
      JSON.stringify({})
    )
  } catch (err) {
    throw err
  }
}

export async function getAccounts () {
  let userJson
  await AsyncStorage.getItem('Accounts')
    .then((accounts) => {
      if (accounts) {
        userJson = JSON.parse(accounts)
      } else {
        userJson = []
      }
    }).catch(() => {
      userJson = []
    })

  return userJson
}

export async function saveNewAccount (account) {
  try {
    const accounts = await getAccounts()
    await AsyncStorage.setItem(
      'Accounts',
      JSON.stringify([...accounts, ...account])
    )
  } catch (err) {
    throw err
  }
}
export async function alterateAccount (accounts) {
  try {
    await AsyncStorage.setItem(
      'Accounts',
      JSON.stringify([...accounts])
    )
  } catch (err) {
    throw err
  }
}