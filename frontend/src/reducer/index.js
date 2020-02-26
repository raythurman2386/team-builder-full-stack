export default (state, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return {
        ...state,
        jobs: action.payload
      }
    case "DELETE_JOB":
      return {
        ...state,
        jobs: state.jobs.filter(job => job.id !== action.payload)
      }
    case "ADD_JOB":
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
    case "JOB_ERROR":
      return {
        ...state,
        error: action.payload
      }
    case "GET_TECHS":
      return {
        ...state,
        techs: action.payload
      }
    case "DELETE_TECH":
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload)
      }
    case "ADD_TECH":
      return {
        ...state,
        techs: [...state.techs, action.payload]
      }
    case "TECH_ERROR":
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
