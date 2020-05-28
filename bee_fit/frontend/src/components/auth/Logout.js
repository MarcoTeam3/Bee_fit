import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Logout extends Component {

    static propTypes = {
        logoutUser: PropTypes.func.isRequired
    };

    componentWillMount() {
        this.props.logoutUser();
    }

    render() {
        return (
            <div class="container-fluid">
            <div class="row p-top-perso">
                <div class="col-md-12">
                    <div class="text-center">
                        <h2>
                            A très vite sur Bee-Fit!
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default connect(null, { logoutUser })(Logout);