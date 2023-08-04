const convertToCurrency = (val: number) => {
  return val.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};
export default convertToCurrency;
