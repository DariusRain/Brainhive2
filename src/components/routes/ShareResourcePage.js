import React from "react";
import Form from "../Form";
import { resourceInputs } from "../../mock/inputs";

function ShareResourcePage({submitResourceForm}) {

return (
    <div className="ShareResourcePage">
 

      {/* Next features of the Form component is the buttons array [{onClick:method, buttonText}] */}
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

export default ShareResourcePage;
