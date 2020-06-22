import React from 'react'

function Comments({ comments }) {
    return comments.map((comment, index) => (
        <div className={"Comment"} key={`comment-${index}`}>
          {comment.user}: {comment.text}
        </div>
      ))
}

export default Comments
