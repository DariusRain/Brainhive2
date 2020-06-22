import React from "react";
import Jumbotron from "../../components/Jumbotron";
import ResourcePreview from "../../components/ResourcePreview";

function HomePage({ resources }) {
  const resourcePreviews = renderResourcePreviews(resources);
  return (
    <div style={style.main}>
      <Jumbotron />
      <div style={style.resourceList}>{resourcePreviews}</div>
    </div>
  );

}

const getAllResourceHashes = (object = {}) => Object.keys(object);

const renderResourcePreviews = resources => {
  const allResourceHashes = getAllResourceHashes(resources);
  return allResourceHashes.map((hashKey) =>
    resources[hashKey] ? (
      <ResourcePreview
        {...resources[hashKey]}
        hashKey={hashKey}
        key={hashKey}
      />
    ) : null
  );
};

const style = {
  main: {
    display: "flex",
    flexDirection: "column",
  },
  resourceList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "5rem",
    height: "100vh",
  },
};

export default HomePage;
