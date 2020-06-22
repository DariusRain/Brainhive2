import React from "react";
function Youtube({ link, title }) {
   const videoIdIndex = link.indexOf("?v=");

   const video = (<div>
        <iframe
            src={`https://www.youtube.com/embed/${link.substring(videoIdIndex + 3)}`}
            title={title}
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>);

// Debug Youtube
//                 console.log(
//                   "rendered a video",
//                   `https://www.youtube.com/embed/${videoId}`
//                 );

    return videoIdIndex > -1 ? video : null;
}

export default Youtube;
// What im changing.
// (() => {
//               if (link.includes("youtube")) {
//                 const videoId = link.substring(videoIdIndex + 3);

//                 return (

//                 );
//               }
//             })()