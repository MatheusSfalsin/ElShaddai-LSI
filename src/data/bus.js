import AsyncStorage from "@react-native-community/async-storage"

export async function getBuses () {
  let userJson
  await AsyncStorage.getItem('bus')
    .then((buses) => {
      if (buses) {
        userJson = JSON.parse(buses)
      } else {
        userJson = []
      }
    }).catch(() => {
      userJson = []
    })

  return userJson
}

export async function saveNewBus (bus) {
  try {
    const buses = await getBuses()
    await AsyncStorage.setItem(
      'bus',
      JSON.stringify([...buses, bus])
    )
  } catch (err) {
    throw err
  }
}
