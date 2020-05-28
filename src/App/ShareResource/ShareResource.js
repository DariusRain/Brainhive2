import React from "react";
import Form from "../../components/Form";
import { resourceInputs } from "../../mock/inputs";
import {connect} from "react-redux";
import {submitResourceForm} from "../../redux/modules/app"

function ShareResourcePage({submitResourceForm}) {



return (
    <div className="ShareResourcePage">
      <span style={{ color: "dodgerBlue", fonstSize: "3rem"}}>Resource Form</span>
      <Form
        styleRef={"Form"}
        inputs={resourceInputs}
        afterSubmit={submitResourceForm}
        submitText={"Submit Resource"}
      />
      <br />
    </div>
  );

}



export default connect(null, {submitResourceForm})(ShareResourcePage);
