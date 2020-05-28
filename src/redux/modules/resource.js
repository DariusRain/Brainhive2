
// 1: Create the action types
const TOGGLE_COMMENTS = "brainhive/resourcePage/toggle_comments";
const TOGGLE_VIDEO = "brainhive/resourcePage/toggle_video";
const TOGGLE_COMMENT_FORM = "brainhive/resourcePage/toggle_comment_form";
const LOAD_RESOURCE = "brainhive/resourcePage/load_resource";

//  NOTE:
//          The value of each action type is not an actual path to a file
//      but a nothing more than a string pattern of ("UPPERCASE-APPLICATION-NAME/NAME-OF-THIS-FILE/LOWERCASE-ACTION-NAME")
//      for example TOGGLE_COMMENTS does not equal "TOGGLE_COMMENTS", this

// 2:  Assign a variable an object as initial state .
const init_state = {
  //  commentButtonText: "Show Comments",
  //   videoButtonText: "Show video",
  //   postCommentButtonText: "Post comment",
  showComments: false,
  showVideo: false,
  showCommentForm: false,
  resource: null,
  hash_key: null,
  loading: true
};

// Reducer
export default (state = init_state, action = {}) => {
  // The the action type will come from the returned object from the action creators below this function.
  switch (action.type) {
    // Could make a general toggling action that toggles any property of state. (NEXT GEN)
  
    // All toggle comments change the value of its property to the opposing boolean value.
    case TOGGLE_COMMENTS:
      return { ...state, showComments: !state.showComments };

    case TOGGLE_VIDEO:
      return { ...state, showVideo: !state.showVideo };

    case TOGGLE_COMMENT_FORM:
      return { ...state, showCommentForm: !state.showCommentForm };


    case LOAD_RESOURCE: 
      return { ...state, resource: {...action.payload}, loading: false };

      // This default case that returns state is in every reducer in case an action type was not provided. (If not included, could cause errors!)
    default:
      return { ...state };
  }
};

// Action creators
export const toggleComments = () => ({ type: TOGGLE_COMMENTS });
export const toggleVideo = () => ({ type: TOGGLE_VIDEO });
export const toggleCommentForm = () => ({ type: TOGGLE_COMMENT_FORM });

// These action creators or functions will be called and return an action type to the reducer when a DOM event occurs where this
// imorted action is used in
// for example:
//  meta
//      <HTML-TAG-NAME-OR-REACT-COMPONENT EVENT-TYPE={IMPORTED-ACTION-CREATOR} />
//  regular
//                          Imported
//        tag   event    Action Creator
//      <button onClick={toggleComments}> Show comments </button>




// Darius Rain (Cohort 8E)
// The ducks approach for Redux
// Link: https://github.com/erikras/ducks-modular-redux
// Example of use: https://github.com/goopscoop/ga-react-tutorial/tree/6-reduxActionsAndReducers/src/redux



// The 4 rules of ducks approach:

//  1) MUST export default a function called reducer()
//  2) MUST export its action creators as functions
//  3) MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
//  4) (optional) MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library

// Summary of what I'm doing:
//  1: Create the action types
//      Create the action types on the top of the page in this order:
//          Meta:
//              const ACTION-NAME = "UPPERCASE-APPLICATION-NAME/NAME-OF-THIS-FILE/LOWERCASE-ACTION-NAME"
//          Regular:
//              const INCREMENT = "brainhive/resource/increment";
//              const LONG_ACTION_NAME = "brainhive/resource/long_action_name";

//  2: Assign a variable an object as initial state (If not needed then set the init value as '{}' ).
