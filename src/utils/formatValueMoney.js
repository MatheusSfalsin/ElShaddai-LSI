const formatValue = (value = 0) => {
  return `R$ ${value.toFixed(2).replace(".", ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "R$1,")}`
}

export default formatValue;
