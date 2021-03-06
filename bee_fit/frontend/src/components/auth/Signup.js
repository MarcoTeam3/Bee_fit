import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field, propTypes } from "redux-form";
import { required } from "redux-form-validators"
import { renderField, renderError } from "../../utils/renderUtils";
import { signupUser } from "../../actions/authActions";

class Signup extends Component {

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
                    <h4 className="text-md-center">Sign Up</h4>
                    <hr />

                    <fieldset className="form-group">
                        <Field name="email" label="Email" component={renderField}
                            type="text" />
                    </fieldset>

                    <fieldset className="form-group">
                        <Field name="username" label="Username" component={renderField}
                            type="text" validate={[required({ message: "Ce champ est requis." })]}
                        />
                    </fieldset>

                    <fieldset className="form-group">
                        <Field name="password1" label="Mot de passe" component={renderField}
                            type="password" validate={[required({ message: "Ce champ est requis." })]}
                        />
                    </fieldset>

                    <fieldset className="form-group">
                        <Field name="password2" label="Confirmer le mot de passe" component={renderField}
                            type="password" validate={[required({ message: "Ce champ est requis." })]}
                        />
                    </fieldset>

                    {renderError(error)}

                    <fieldset className="form-group">
                        <button action="submit" className="btn btn-primary">Sign Up</button>
                    </fieldset>
                    <p style={{ textAlign: 'center' }}>Déjà membre ? <Link to="/login">Login</Link></p>
                </form>
            </div>
        );
    }
}

const validateForm = values => {
    const errors = {};
    const { password1, password2 } = values;
    if (password1 !== password2) {
        errors.password2 = "Password does not match."
    }
    return errors;
};

export default reduxForm({
    form: "signup",
    validate: validateForm,
    onSubmit: signupUser
})(Signup);
