export const getRandomPokemonId = () => {
  return Math.floor(Math.random() * 898) + 1;
};

export const calculateCatchProbability = (group, pokeBallType) => {
  if (pokeBallType === "Pokeball") {
    if (group === "A") {
      return 0.5;
    } else if (group === "B") {
      return 0.15;
    } else if (group === "C") {
      return 0.025;
    }
  } else if (pokeBallType === "Great Ball") {
    if (group === "A") {
      return 0.75;
    } else if (group === "B") {
      return 0.3;
    } else if (group === "C") {
      return 0.15;
    }
  } else if (pokeBallType === "Master Ball") {
    return 1.0;
  }
  return 0.0;
};

export const getGroupFromId = (id) => {
  if (id >= 1 && id <= 399) {
    return "A";
  } else if (id >= 400 && id <= 799) {
    return "B";
  } else if (id >= 800 && id <= 898) {
    return "C";
  }
  return "Unknown";
};
