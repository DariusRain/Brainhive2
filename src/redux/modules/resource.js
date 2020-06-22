
// Darius Rain (Cohort 8E)
// The ducks approach for Redux
// Link: https://github.com/erikras/ducks-modular-redux
// Example of use: https://github.com/goopscoop/ga-react-tutorial/tree/6-reduxActionsAndReducers/src/redux

// The 4 rules of the ducks approach:

//  1) MUST export default a function called reducer()
//  2) MUST export its action creators as functions
//  3) MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
//  4) (optional) MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library

// Action types
const TOGGLE_COMMENTS = "brainhive/resourcePage/toggle_comments";
const TOGGLE_VIDEO = "brainhive/resourcePage/toggle_video";
const TOGGLE_COMMENT_FORM = "brainhive/resourcePage/toggle_comment_form";
const LOAD_RESOURCE = "brainhive/resourcePage/load_resource";

// Inital state
const init_state = {
  showComments: false,
  showVideo: false,
  showCommentForm: false,
  resource: null,
  hash_key: null,
  loading: true
};

// Reducer 
export default (state = init_state, action = {}) => {
  switch (action.type) {
    case TOGGLE_COMMENTS:
      return { ...state, showComments: !state.showComments };
    
    case TOGGLE_VIDEO:
      return { ...state, showVideo: !state.showVideo };
    
    case TOGGLE_COMMENT_FORM:
      return { ...state, showCommentForm: !state.showCommentForm };
    
    case LOAD_RESOURCE: 
      return { ...state, resource: {...action.payload}, loading: false };
    
    default:
      return { ...state };
  }
};

export const toggleComments = () => ({ type: TOGGLE_COMMENTS });
export const toggleVideo = () => ({ type: TOGGLE_VIDEO });
export const toggleCommentForm = () => ({ type: TOGGLE_COMMENT_FORM });

