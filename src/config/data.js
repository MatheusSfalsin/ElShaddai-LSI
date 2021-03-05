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
