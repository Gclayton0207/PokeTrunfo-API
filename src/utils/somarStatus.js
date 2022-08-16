export const somar = (objeto1, objeto2) => {
  return {
    poke1: Object.values(objeto1).reduce((a, b) => a + b, 0),
    poke2: Object.values(objeto2).reduce((a, b) => a + b, 0),
  };
};
