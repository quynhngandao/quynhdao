const initialState = {
  scrollToAbout: false,
  scrollToExperience: false,
  scrollToProjects: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SCROLL_TO_ABOUT":
      return { ...state, scrollToAbout: true };
    case "SET_SCROLL_TO_EXPERIENCE":
      return { ...state, scrollToExperience: true };
    case "SET_SCROLL_TO_PROJECTS":
      return { ...state, scrollToProjects: true };
    default:
      return state;
  }
};

export default rootReducer;
