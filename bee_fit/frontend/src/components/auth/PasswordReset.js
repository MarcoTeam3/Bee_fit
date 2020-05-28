import React, { Component } from "react";
import { reduxForm, Field, propTypes } from "redux-form";
import { required } from "redux-form-validators"
import { renderField, renderError } from "../../utils/renderUtils";
import { resetPassword } from "../../actions/authActions";

class PasswordReset extends Component {

    static propTypes = {
        ...propTypes
    };

    render() {
        const { handleSubmit, error } = this.props;

        return (
            <div className="row justify-content-center">

                <form
                    className="col col-sm-4 card mt-5 p-2"
                    onSubmit={handleSubmit}
                >
                    <h4 className="text-md-center">Mot de passe oublié</h4>
                    <hr />

                    <fieldset className="form-group">
                        <Field name="email" label="Merci d'entrer votre email" component={renderField}
                            type="text" validate={[required({ message: "Ce champ est requis." })]}
                        />
                    </fieldset>

                    <fieldset className="form-group">
                        {renderError(error)}
                        <button action="submit" className="btn btn-primary">Envoyer</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: "password_reset",
    onSubmit: resetPassword
})(PasswordReset);
