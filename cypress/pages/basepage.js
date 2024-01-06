class BasePage {

    constructor() {
        this.elements = this._elements
    }

    _elements = {
        //Header items
        lists: () => cy.get("#navtodolists"),
        adminLogin: () => cy.get("#navadminlogin"),
        logout: () => cy.get("#navadminlogout"),
    }

    clickOnSignin() {
        this.elements.adminLogin().click()
    }
}

module.exports = BasePage;