// import React, { Component } from "react";
// import Resource from "../Resource";

// class ResourcePage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       commentButtonText: "Show Comments",
//       videoButtonText: "Show video",
//       postCommentButtonText: "Post comment",
//       showComments: false,
//       showVideo: false,
//       showCommentInput: false,
//       resource: null,
//       hash_key: null
//     };
//   }

//   componentDidMount() {
//     const { hash_key } = this.props.match.params;
//     const { findResource } = this.props;
//     const resource = findResource(hash_key);
//     this.setState({ ...this.state, resource: { ...resource }, hash_key });
//   }

//   render() {
//     const { hash_key } = this.props.match.params;
//     const methods = {
//       toggleComments: this.toggleComments,
//       toggleVideo: this.toggleVideo,
//       toggleCommentForm: this.toggleCommentForm,
//       submitComment: this.submitComment
//     };
//     return this.state.resource ? (
//       <div className="background-logo">
//         <Resource {...this.state} {...methods} hash_key={hash_key} />
//       </div>
//     ) : (
//       <Error404 />
//     );
//   }

//   toggleComments = () => {
//     const { showComments } = this.state;
//     this.setState({
//       ...this.state,
//       showComments: !showComments,
//       commentButtonText: !showComments ? "Hide comments" : "Show comments",
//     });
//   };

//   toggleVideo = () => {
//     const { showVideo } = this.state;
//     this.setState({
//       ...this.state,
//       showVideo: !showVideo,
//       videoButtonText: !showVideo ? "Hide video" : "Show video",
//     });
//     // document.querySelector("iframe").style.display = showVideo ? "block" : "none";
//   };

//   toggleCommentForm = (e) => {
//     const { showCommentInput } = this.state;
//     this.setState({
//       ...this.state,
//       showCommentInput: !showCommentInput,
//       postCommentButtonText: !showCommentInput ? "Cancel" : "Post comment",
//     });
//   };

//   submitComment = (comment) => {
//    const {hash_key, resource} = this.state;
//     this.setState({...resource, comments: [...resource.comments, comment]})
//     this.props.updateResource(hash_key, this.state.resource);
//     this.setState({})
//   };
// }

// export default withRouter(ResourcePage);

import React from "react";
import { connect } from "react-redux";
import Error404 from "../../components/Error404";
import { withRouter } from "react-router-dom";
import Resource from "../../components/Resource";
import { useParams } from "react-router-dom";
import { toggleComments, toggleVideo, toggleCommentForm } from "../../redux/modules/resource"

function ResourcePage({
  resources,
  toggleVideo,
  toggleCommentForm,
  toggleComments,
  logic
}) {
  const { hash_key } = useParams("hash_key");

  const actionCreators = {
    toggleVideo,
    toggleCommentForm,
    toggleComments,
  };

  console.log(12, resources);
  return resources[hash_key] ? (
    <Resource
      {...resources[hash_key]}
      {...actionCreators}
      {...logic}
      hash_key={hash_key}
    />
  ) : (
    <Error404 />
  );
}

const mapStateToProps = (state) => {
  return {
    resources: { ...state.appReducer.resources },
    logic: {...state.resourceReducer}
  };
};



export default withRouter(connect(mapStateToProps, {toggleCommentForm, toggleComments, toggleVideo})(ResourcePage));
