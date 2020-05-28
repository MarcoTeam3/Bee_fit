import { updateUserProfile } from "../../actions/authActions";
import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/animated'

const allergiesOptions = [
  {
    value: 'Lactose',
    label: '🥛 Lactose'
  },
  {
    value: 'Gluten',
    label: '🌽 Gluten'
  },
  {
    value: 'Végétarien',
    label: '🥗 Végétarien'
  },
  {
    value: 'Arachides',
    label: '🌰 Arachides'
  },
  {
    value: 'Fruits de mer',
    label: '🦐 Fruits de mer et crustacés'
  },
]

const sexOptions = [
  {
    value: 'Femme',
    label: '👩 Femme'
  },
  {
    value: 'Homme',
    label: '👨 Homme'
  },
  {
    value: 'Non binaire',
    label: '🧑 Non binaire'
  },
]

const diabetiqueOptions = [
  {
    value: 'Oui',
    label: '✅ Oui'
  },
  {
    value: 'Non',
    label: '⭕ Non'
  },
]
export class Login extends Component {

  state = {
    age: '',
    sexe: '',
    taille: '',
    poids: '',
    objectif_poids: '',
    allergies: [],
    diabetique: ''
  };

  static propTypes = {
    updateUserProfile: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleChangeSex = e => {
    this.setState({ sexe: e.value });
  }

  handleChangeDiabetique = e => {
    this.setState({ diabetique: e.value });
  }

  handleChange = (e) => {
    this.setState({ allergies: Array.isArray(e) ? e.map(x => x.value) : [] });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { age, sexe, taille, poids, objectif_poids, allergies, diabetique } = this.state;
    const info = { age, sexe, taille, poids, objectif_poids, allergies, diabetique };
    this.props.updateUserProfile(info);
    this.setState({
      age: '',
      sexe: '',
      taille: '',
      poids: '',
      objectif_poids: '',
      allergies: [],
      diabetique: '',
    });
    this.props.history.push('/profile');
  };

  render() {
    const { age, sexe, taille, poids, objectif_poids, allergies, diabetique } = this.state;
    return (
      <div class="card" style={{ marginTop: '4rem' }}>
        <h5 class="card-header info-color white-text text-center py-4">
          <strong>Mettre à jour mes informations</strong>
        </h5>
        <div class="card-body px-lg-5">
          <form onSubmit={this.onSubmit} class="text-center" style={{ marginTop: '2rem' }}>
            <p>Entrez ici vos informations pour un suivi personnalisé</p>
            <div class="md-form mt-5">
              <input
                className="form-control"
                type="text"
                name="age"
                onChange={this.onChange}
                value={age}
                placeholder="Age"
                style={{ border: 0, borderBottom: '1px solid rgba(0, 0, 0, 0.5)' }}
              />
            </div>
            <div className="md-form mt-5">
              <label>Genre</label>
              <Select value={sexOptions.filter(obj => obj.value === sexe)}
                options={sexOptions}
                onChange={this.handleChangeSex}
              />
            </div>
            <div className="md-form mt-5">
              <input
                className="form-control"
                type="text"
                name="taille"
                onChange={this.onChange}
                value={taille}
                placeholder="Taille (cm)"
                style={{ border: 0, borderBottom: '1px solid rgba(0, 0, 0, 0.5)' }}
              />
            </div>
            <div className="md-form mt-5">
              <input
                className="form-control"
                type="text"
                name="poids"
                onChange={this.onChange}
                value={poids}
                placeholder="Poids (Kg)"
                style={{ border: 0, borderBottom: '1px solid rgba(0, 0, 0, 0.5)' }}
              />
            </div>
            <div className="md-form mt-5">
              <input
                className="form-control"
                type="text"
                name="objectif_poids"
                onChange={this.onChange}
                value={objectif_poids}
                placeholder="Mon poids idéal (Kg)"
                style={{ border: 0, borderBottom: '1px solid rgba(0, 0, 0, 0.5)' }}
              />
            </div>
            <div className="md-form mt-5">
              <label>Mes allergies et régimes alimentaires</label>
              <Select options={allergiesOptions}
                value={allergiesOptions.filter(obj => allergies.includes(obj.value))}
                name="allergies"
                onChange={this.handleChange}
                isMulti
                isSearchable
                components={makeAnimated()}
                placeholder=""
              />
            </div>
            <div className="md-form mt-5">
              <label>Je suis diabétique</label>
              <Select value={diabetiqueOptions.filter(obj => obj.value === diabetique)}
                options={diabetiqueOptions}
                onChange={this.handleChangeDiabetique}
              />
            </div>
            <div className="md-form mt-5">
              <button onClick={this.onSubmit} style={{
                background: '#000000',
                color: '#FFFFFF', width: '60%', font: "metropolis-bold", fontSize: '1.2rem',
                letterSpacing: '.3rem',
                height: '3rem',
                lineHeight: '3rem',
                padding: '0 3rem',
                margin: '0 .3rem 1.2rem 0'
              }}>
                Ajouter
            </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    initialValues: state.auth.user
  }
}

export default connect(mapStateToProps, { updateUserProfile })(Login);