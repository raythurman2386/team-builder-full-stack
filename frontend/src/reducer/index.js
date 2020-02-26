export default (state, action) => {
  switch (action.type) {
    case "JOB_ERROR":
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
