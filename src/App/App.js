// Packages
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { v4 } from "uuid"; 
//  DR: CSS
import "./App.css";


// DR: General Components
import NavBar from "../components/NavBar";

//  DR: Route Components for other pages
import ShareResourcePage from "./ShareResource/ShareResource";
import ResourcePage from "./Resource/Resource";
import HomePage from "./Home/Home";

//  DR: The Entire App
function App({ resources }) {
  console.log(12, resources)
    return (
      <BrowserRouter>
        <div className="App">
          <div className="header">
            <NavBar />
          </div>
          <div>
            <Route exact path="/">
              <HomePage resources={resources} />
            </Route>
            <Route path="/share-resource">
              <ShareResourcePage />
            </Route>
            <Route path="/resource/:hash_key">
              <ResourcePage resources={resources} />
            </Route>
          </div>
        </div>
      </BrowserRouter>
    );



  }


  
  const getResourceHash = (object) => Object.keys(object)[0];
  

  const mapStateToProps = (state) => {
      return {
        resources: {...state.appReducer.resources}
      }    
  }
  

export default connect(mapStateToProps)(App);
















































































// // submitResourceForm = resourceForm => this.setState({ ...this.state.resources, resources: { ...this.state.resources, [v4()]: {...resourceForm}  } })

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