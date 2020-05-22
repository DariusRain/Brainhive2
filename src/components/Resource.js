import React, { Component } from "react";
import Form from "./Form";

import { commentInputs } from "../mock/inputs";

class Resource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resource: { ...props.resource },
    };
  }
  // DR: This is a function that will dynamically make either an iframe for the video
  //   or a image, & also a link incase the iframe dosent work

  render() {
    const {
      commentButtonText,
      videoButtonText,
      postCommentButtonText,
      showComments,
      showVideo,
      showCommentInput,
      toggleComments,
      toggleVideo,
      toggleCommentForm,
      submitComment,
    } = this.props;

    const {
      link,
      title,
      datePublished,
      videoLength,
      categories,
      summary,
      resourceAuthor,
      comments,
    } = this.state.resource;

    const datePublishedNormal = datePublished.slice(0, datePublished.indexOf(".")).split("-")

    // console.log(33, datePublishedNormal)
    // Returned element
    return (
      // The entire resource element
      <div style={style.main}>
        <br />

        {/* Title of resource that links to source */}
        {title ? (
          <a style={style.titleLink} href={link}>
            {" "}
            <br />
            {title}
          </a>
        ) : null}

        {/* Author */}
        {resourceAuthor ? (
          <p style={style.authorText}>
            {" "}
            Author: <br /> {resourceAuthor}{" "}
          </p>
        ) : null}
        <hr />

        {/* Date */}
        {datePublished ? (
          <span>
            {" "}
            <br /> Date published:
            <br /> 
            {`${datePublishedNormal[1]}/${datePublishedNormal[2]}/${datePublishedNormal[0]}`}
            {" "}
          </span>
        ) : null}

        {/* Video length*/}
        {videoLength ? <p>Length: {videoLength} minutes</p> : null}

        {/* Categories */}
        {typeof categories === "object" ? (
          <p>
            Categories: <br />{" "}
            {categories.map((category, index) => {
              let temp =
                index === categories.length - 1
                  ? `${category}.`
                  : `${category}, `;
              return temp;
            })}
          </p>
        ) : categories || null}

        {/* Summary */}
        {summary ? <p>{summary}</p> : null}

        <div className="flex-row flex-wrap ">
          {/* Toggles Comments */}
          {comments.length > 0 ? (
            <button
              className={"form-button margin-20"}
              onClick={toggleComments}
            >
              {commentButtonText}
            </button>
          ) : (
            <p>No comments</p>
          )}

          {/* Toggles Video */}
          {link.includes("youtube") ? (
            <button className={"form-button margin-20"} onClick={toggleVideo}>
              {videoButtonText}
            </button>
          ) : null}

          {
            <button
              className={"form-button margin-10"}
              onClick={toggleCommentForm}
            >
              {postCommentButtonText}
            </button>
          }
        </div>

        {/* Embed youtube video - iframe */}
        <div style={style.changingArea}>
          {showVideo
            ? ( () => {
                if (link.includes("youtube")) {
                  const videoIdIndex = link.indexOf("?v=");
                  const videoId = link.substring(videoIdIndex + 3);
                  console.log(
                    "rendered a video",
                    `https://www.youtube.com/embed/${videoId}`
                  );
                  return (
                    <div>
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={title}
                        mozallowfullscreen="mozallowfullscreen"
                        msallowfullscreen="msallowfullscreen"
                        oallowfullscreen="oallowfullscreen"
                        webkitallowfullscreen="webkitallowfullscreen"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  );
                }
              })()
            : null}
          {/* Comments */}
          {showComments && comments
            ? comments.map((comment, index) => (
                <div className={"Comment"} key={`comment-${index}`}>
                  {comment.user}: {comment.text}
                </div>
              ))
            : null}
          {/* Post Comment */}
          {showCommentInput ? (
            <Form
              inputs={commentInputs}
              styleRef={"Form"}
              // @afterSubmit - this function will pass the state of the Form as the updated resource
              // and it is on you to make another function that will handle the logic of where that
              // updated resource will go.
              afterSubmit={submitComment}
              submitText={"Comment"}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
// Style object for resource element
const style = {
  main: {
    paddingTop: "7rem",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    width: "90%",
  },
  titleLink: {
    color: "dodgerblue",
    fontSize: "1.5rem",
    textDecoration: "none",
  },
  authorText: {
    fontSize: "1rem",
  },
  changingArea: {
    overflowY: "auto",
    height: "70vh",
    marginTop: "1rem",
  },
};

export default Resource;
