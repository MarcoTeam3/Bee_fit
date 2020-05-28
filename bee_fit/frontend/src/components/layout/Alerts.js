import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.message.age) alert.error(`Age: ${error.message.age.join()}`);
      if (error.message.sexe) alert.error(`Genre: ${error.message.sexe.join()}`);
      if (error.message.taille) alert.error(`Taille: ${error.message.taille.join()}`);
      if (error.message.poids) alert.error(`Poids: ${error.message.poids.join()}`);
      if (error.message.objectif_poids) alert.error(`Mon poids idéal: ${error.message.objectif_poids.join()}`);
      if (error.message.allergies) alert.error(`Mes allergies: ${error.message.allergies.join()}`);
      if (error.message.diabetique) alert.error(`Je suis diabétique: ${error.message.diabetique.join()}`);
      if (error.message.username) alert.error(`Username: ${error.message.username.join()}`);
      if (error.message.email) alert.error(`Email: ${error.message.email.join()}`);
      if (error.message.non_field_errors) alert.error(error.message.non_field_errors.join());
    }

    if (message !== prevProps.message) {
      if (message.deleteUsersInfos) alert.success(message.deleteUsersInfos);
      if (message.addUsersInfos) alert.success(message.addUsersInfos);
      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));