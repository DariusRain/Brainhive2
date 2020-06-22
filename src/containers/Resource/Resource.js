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
