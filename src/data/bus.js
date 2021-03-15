import AsyncStorage from "@react-native-community/async-storage"

export async function getBuses () {
  let busJson
  await AsyncStorage.getItem('bus')
    .then((buses) => {
      if (buses) {
        busJson = JSON.parse(buses)
      } else {
        busJson = []
      }
    }).catch(() => {
      busJson = []
    })

  return busJson
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
