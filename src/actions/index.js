export const updateSpeed = (speed) => {
  return {
    type: "UPDATE_SPEED",
    payload: speed,
  };
};

export const updateGeneration = (generation) => {
  return {
    type: "UPDATE_GENERATION",
    payload: generation,
  };
};
