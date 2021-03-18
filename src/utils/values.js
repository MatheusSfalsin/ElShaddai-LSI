const getStatusTravel = (status) => {
  switch (status) {
    case 'ACTIVE':
      return 'Em andamento'
    case 'FINISHE':
      return 'Concluída'
    case 'CANCELED':
      return 'Cancelada'
    default:
      return 'Agendada'
  }

}

export {
  getStatusTravel
}
