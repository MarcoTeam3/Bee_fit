import React, { Component } from "react";
import { reduxForm, Field, propTypes } from "redux-form";
import { required } from "redux-form-validators"
import { changePassword } from "../../actions/authActions";
import { renderField, renderError } from "../../utils/renderUtils";

class PasswordChange extends Component {

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
                    <h4 className="text-md-center">Modifier mon mot de passe</h4>
                    <hr />

                    <fieldset className="form-group">
                        <Field name="old_password" label="Ancien mot de passe" component={renderField}
                            type="password" validate={[required({ message: "Ce champ est requis." })]}
                        />
                    </fieldset>

                    <fieldset className="form-group">
                        <Field name="new_password1" label="Nouveau mot de passe" component={renderField}
                            type="password" validate={[required({ message: "Ce champ est requis." })]}
                        />
                    </fieldset>

                    <fieldset className="form-group">
                        <Field name="new_password2" label="Confirmer le mot de passe" component={renderField}
                            type="password" validate={[required({ message: "Ce champ est requis." })]}
                        />
                    </fieldset>

                    <fieldset className="form-group">
                        {renderError(error)}
                        <button action="submit" className="btn btn-primary">Modifier</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

const validateForm = values => {
    const errors = {};
    const { new_password1, new_password2 } = values;
    if (new_password1 !== new_password2) {
        errors.new_password2 = "Password does not match."
    }
    return errors;
};

export default reduxForm({
    form: "change_password",
    onSubmit: changePassword,
    validate: validateForm
})(PasswordChange);
