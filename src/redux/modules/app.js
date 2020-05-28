// DUCK: app.js 
import resources from "../../mock/resources";
import {v4 as generateKey} from "uuid";
const SUBMIT_RESOURCE_FORM = "brainhive/app/submit_resource";
const FIND_RESOURCE = "brainhive/app/find_resources";
const UPDATE_RESOURCE = "brainhive/app/update_resource";
const GET_RESOURCE_HASH = "brainhive/app/get_resource_hash";
const GET_ALL_RESOURCE_HASHES = "brainhive/app/get_all_resource_hashes";

const init_state = {
  resources,
};

export default (state = init_state, action = {}) => {
  switch (action.type) {
    
    // case UPDATE_RESOURCE:
    
    //   break;

    case SUBMIT_RESOURCE_FORM:
    return {...state, resources: {...state.resources, [generateKey()]: {...action.payload} }}

    // case GET_RESOURCE_HASH:
    //   return Object.keys(action.payload)[0];

    // case GET_ALL_RESOURCE_HASHES:
    //   return Object.keys(state.resources);

    default:
      return { ...state };
  }
};

export const getResourceHash = (payload) => ({
  type: GET_RESOURCE_HASH,
  payload,
});

export const getAllResourceHashes = () => ({ type: GET_ALL_RESOURCE_HASHES });

export const submitResourceForm = (payload) => ({type: SUBMIT_RESOURCE_FORM, payload});

export const findResource = (payload) => ({type: FIND_RESOURCE, payload});

export const updateResource = (payload) => ({type: UPDATE_RESOURCE, payload});


// submitResourceForm = (resourceForm) => {
//   const newResource = { [v4()]: { ...resourceForm } };
//   console.log(12, newResource);
//   this.setState({
//     ...this.state.resources,
//     resources: { ...this.state.resources, ...newResource },
//   });
// };

// findResource = (hashKey) =>
//   this.state.resources[hashKey] ? this.state.resources[hashKey] : false;

// updateResource = (hashKey, updatedResource) => {
//   const { resources } = this.state;
//   const allResourceHashes = this.getAllResourceHashes();
//   if (allResourceHashes.indexOf(hashKey)) {
//     const updatedResources = allResourceHashes.filter((hashKeys) =>
//       hashKeys === hashKey
//         ? { [hashKey]: updatedResource }
//         : { [hashKeys]: resources[hashKeys] }
//     );
//     this.setState({ ...this.state, resources: { ...updatedResources } });
//   } else {
//     return false;
//   }
//   return;
// };
