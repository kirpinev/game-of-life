export default (state = 0, action) => {
  switch (action.type) {
    case "UPDATE_GENERATION":
      return action.payload;
    default:
      return state;
  }
};
