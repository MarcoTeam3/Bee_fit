import React, { Component } from "react";

export default class PasswordResetDone extends Component {
    render() {
        return (
            <h3 className="mx-5">Un mail vous a été envoyé afin de réinitialiser votre mot de passe. Merci de suivre le lien présent sur l'email pour procéder à la réinitialisation. Si vous n'êtes pas à l'origine de cette demande, merci d'ignorer cet email.</h3>
        )
    }
}