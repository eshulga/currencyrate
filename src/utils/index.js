export const round = (value, decimals) => {
  return parseFloat(
    Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
  ).toFixed(decimals)
}
