import AsyncStorage from "@react-native-community/async-storage"

export async function getDrivers () {
  let userJson
  await AsyncStorage.getItem('driver')
    .then((drivers) => {
      if (drivers) {
        userJson = JSON.parse(drivers)
      } else {
        userJson = []
      }
    }).catch(() => {
      userJson = []
    })

  return userJson
}

export async function saveNewDriver (driver) {
  try {
    const drivers = await getDrivers()
    await AsyncStorage.setItem(
      'driver',
      JSON.stringify([...drivers, driver])
    )
  } catch (err) {
    throw err
  }
}