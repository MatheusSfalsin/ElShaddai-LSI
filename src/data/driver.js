import AsyncStorage from "@react-native-community/async-storage"

export async function getDrivers () {
  let driverJson
  await AsyncStorage.getItem('driver')
    .then((drivers) => {
      if (drivers) {
        driverJson = JSON.parse(drivers)
      } else {
        driverJson = []
      }
    }).catch(() => {
      driverJson = []
    })

  return driverJson
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
