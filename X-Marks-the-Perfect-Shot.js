const finalPosition = (moves) => {
  const coordinates = [0, 0];
  
  moves.forEach((move) => {
    switch(move) {
      case 'north':
        coordinates[1] += 1;
        break;
      case 'south':
        coordinates[1] -= 1;
        break;
      case 'east':
        coordinates[0] += 1;
        break;
      case 'west':
        coordinates[0] -= 1;
        break;
      default:
        break;
    }
  });
  return coordinates;
}
