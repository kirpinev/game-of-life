export default (state = 100, action) => {
  switch (action.type) {
    case "UPDATE_SPEED":
      return action.payload;
    default:
      return state;
  }
};
