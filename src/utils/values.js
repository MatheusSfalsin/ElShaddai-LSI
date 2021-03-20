import { Colors } from "./colors"

const getStatusTravel = (status) => {
  switch (status) {
    case 'ACTIVE':
      return 'Em andamento'
    case 'FINISHED':
      return 'Concluída'
    case 'CANCELED':
      return 'Cancelada'
    default:
      return 'Agendada'
  }
}

const getStatusColor = (status) => {
  switch (status) {
    case 'ACTIVE':
      return Colors.condensed
    case 'FINISHED':
      return Colors.primary
    case 'CANCELED':
      return Colors.negation
    default:
      return Colors.condensed
  }

}


export {
  getStatusTravel,
  getStatusColor
}
