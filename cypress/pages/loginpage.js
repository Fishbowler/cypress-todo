import Basepage from './basepage'

class Loginpage extends Basepage {

    constructor() {
        super()
        this.elements = {...this.elements, ...this._elements}
    }

    _elements = {
        usernameInput: () => cy.get("[name='username']"),
        passwordInput: () => cy.get("[name='password']"),
        loginButton: () => cy.get("#login"),
        rememberMeCheckbox: () => cy.get("[name='remember']"),
        loginMessage: () => cy.get(".loginmessage"),
    }

    loginAs(username, password) {
        this.elements.usernameInput().type(username)
        this.elements.passwordInput().type(password)
        this.elements.loginButton().click()
    }
}

module.exports = Loginpage;