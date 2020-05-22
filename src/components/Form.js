import React, { Component } from "react";
// import { v4 } from "uuid";
// const id = v4;

class Form extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
    // The state will contain only the name attributes as keys and the values will be set to an emptyString
    // {INPUT-NAME-ATTRIBUTE: ''}
    //  Ex: {firstName: ''}
  }

  componentDidMount() {
    let container = {};

    this.props.inputs.map((inputObject) => {
      const htmlNameAttribute = inputObject.name;

      if (!container[htmlNameAttribute]) {
        container[htmlNameAttribute] = "";
      }
      return 0;
    });

    this.setState({
      ...this.state,
      ...container,
    });
  }

  render() {
    const { styleRef, inputs, submitText } = this.props;
    const hasStyle = typeof styleRef === Object ? styleRef : false;
    if (hasStyle) {
      return (
        <form style={styleRef} onSubmit={this.submitForm}>
          {this.renderInputs(inputs)}
          {/* {this.renderButtons(inputs.buttons)} */}
        </form>
      );
    } else {
      return (
        <form className={styleRef} onSubmit={this.submitForm}>
          {this.renderInputs(inputs)}
          <br />
          <div className="buttons-section">
            <button className="form-button">{submitText}</button>
          </div>
        </form>
      );
    }
  }

  //Uses the afterSubmit given method to pass the state
  submitForm = (e) => {
    e.preventDefault();
    this.props.afterSubmit(this.state);
  };

  handleInput = (e) => {
    if (e.target.value.length > 0) {
      e.target.style.borderBottomColor = "seagreen";
    } else {
      e.target.style.borderBottomColor = "dodgerblue";
    }
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  renderInputs = (inputs) => {
    if (inputs[0]) {
      const inputElements = inputs.map((object, index) =>
        this.filterInputs(object, index)
      );
      return inputElements;
    } else {
      console.log("Form Component Malfunction.");
      return null;
    }
  };

  filterInputs = (object, index) => {
    const {
      placeholder,
      type,
      name,
      label,
      limit,
      min,
      className,
      values,
    } = object;

    switch (type) {

      case "radio":
        return (
      <div className={className || "RadioButtons"} key={index}>
            <div>
              <br />
              &nbsp;
              <label htmlFor={name}>{label || " No Label Set"}</label>
              <br />
            </div>
            <br />
            {values.map((value, index2) => {
              return (
                <span className="RadioButton" key={index2}>
                  <input
                    type={type}
                    name={
                      name ||
                      `${
                        placeholder.replace(" ", "-") || `on-default-${index}`
                      }`
                    }
                    onChange={
                      this.handleInput ||
                      (() =>
                        console.log("No change method set, running on default"))
                    }
                    value={value}
                  />
                  {value}
                </span>
              );
            })}
            <br />
          </div>
        );

      case "select":
        return <select></select>;

      case "title":
        return (
          <div className="TitleLabel">
            {label ? (
              <div>
                <h1 className="LabelTitle" htmlFor={name}>
                  {label || " No Label Set"}:
                </h1>
              </div>
            ) : null}
          </div>
        );

      case "number":
        return (
          <div className="InputDiv" key={index}>
            <input
              className={className || "InputElement"}
              value={this.state[name]}
              type={"number"}
              name={name}
              min={min || "0"}
              max={limit || null}
              onChange={this.handleInput}
              placeholder={placeholder || null}
              key={index}
            />
          </div>
        );

      case "textarea":
        return (
          <div className="InputDiv" key={index}>
            <textarea
              className={className || "InputElement"}
              value={this.state[name]}
              onChange={this.handleInput}
              name={name}
              placeholder={placeholder || null}
            />
          </div>
        );

      default:
        return (
          <div className="InputDiv" key={index}>
            {placeholder ? (
              <input
                className={className || "InputElement"}
                placeholder={placeholder}
                type={type || "text"}
                name={name || `${placeholder || `on-default-${index}`}`}
                onChange={
                  this.handleInput ||
                  (() =>
                    console.log("No change method set, running on default"))
                }
                value={this.state[name]}
              />
            ) : null}
          </div>
        );
    }
  };
}

export default Form;

// Now <Form styling={CLASSNAME} inputs={[{PLACEHOLDER, NAME, TYPE <--OPTIONAL,   }, {...}, ...]} afterSubmit={METHOD-OF-CHANGE} />

//  NEXT-> V2 (Add a values property that contains an array with the value for each select or radio buttons in the form)
// <Form
// styling={ClassName-Or-CSS-JS-Object}
// inputs={
//  Radio Buttons
//  { styling: ClassName-Or-JS-CSS, type:"radio", label: "What mode do you want to play?", name:"selectLevel", values:["Easy", "Regular", "Hard", "Expert"] }},
//  Select Buttons
//  { ... type:"select" ... name:"selectLevel" ... values:["Easy", "Regular", "Hard", "Expert"] }},
// afterSubmit={this.submitFormForGame}
// />

// Example:
// By defualt if no type is provided it will give a type of text
// <Form
//  styling={"Form-Normal"}
//  inputs={
//      [
//          {placeholder:"First Name", name: "firstName"},
//          {placeHolder:"Last Name", type:"text", name: "lastName"},
//          {placeholder:"Age", type:"number", name:"age"}
//      ]
//  }
//  afterSubmit={(param) => {
//      this.setState({
//        ...this.state.Property-To-Change,
//        Property-To-Change: ...param
//  })
//  }}

// type - the type used normally - may not all work but for text, r
// placeholder - the placeholder used normally
// name - By default the name will be set to default-INDEX-NUMBER
// values - an array only used in inputs that require selected values
// label - Only text for titing an input
