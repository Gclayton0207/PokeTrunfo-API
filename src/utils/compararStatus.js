export const comparar = (object1, object2, resultado1, resultado2) => {
  return object1 > object2
    ? { Pokemon: resultado1.name, playerOneCard: `BST:${object1}` }
    : { Pokemon: resultado2.name, playerTwoCard: `BST:${object2}` };
};
