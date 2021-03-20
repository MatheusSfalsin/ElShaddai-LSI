import AsyncStorage from "@react-native-community/async-storage"

export async function getTravels () {
  let travelJson
  await AsyncStorage.getItem('travel')
    .then((travels) => {
      if (travels) {
        travelJson = JSON.parse(travels)
      } else {
        travelJson = []
      }
    }).catch(() => {
      travelJson = []
    })

  return travelJson
}

export async function updateStatus (travel, status) {
  try {
    const travels = await getTravels()
    const travelsUpdate = travels.map(travelSaved => {
      if (travelSaved.id === travel.id) {
        return { ...travelSaved, status }
      }
      return travelSaved
    })

    await AsyncStorage.setItem(
      'travel',
      JSON.stringify(travelsUpdate)
    )
  } catch (err) {
    throw err
  }
}

export async function updateSeatsMarked (travel, marked) {
  try {
    const { markedSeats } = travel
    const markedSeatsUpdated = [...markedSeats, ...marked]
    const travels = await getTravels()
    const travelsUpdate = travels.map(travelSaved => {
      if (travelSaved.id === travel.id) {
        return { ...travelSaved, markedSeats: markedSeatsUpdated }
      }
      return travelSaved
    })

    await AsyncStorage.setItem(
      'travel',
      JSON.stringify(travelsUpdate)
    )
  } catch (err) {
    throw err
  }
}


export async function saveNewTravel (travel) {
  try {
    const travels = await getTravels()
    await AsyncStorage.setItem(
      'travel',
      JSON.stringify([...travels, travel])
    )
  } catch (err) {
    throw err
  }
}
