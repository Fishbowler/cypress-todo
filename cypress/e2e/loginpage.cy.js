import Loginpage from '../pages/loginpage'

describe('todolist login', () => {
    beforeEach(() => {
        cy.clearLocalStorage()
        cy.clearAllCookies()
    })

    it('should fail with incorrect credentials', () => {
        cy.visit('/adminlogin.html')

        const loginpage = new Loginpage()

        loginpage.loginAs("Admin", "password")

        loginpage.elements.loginMessage().should('contain', 'Login Details Incorrect')
    })

    it('should succeed with correct credentials', () => {
        cy.visit('/adminlogin.html')

        const loginpage = new Loginpage()

        loginpage.loginAs("Admin", "AdminPass")

        cy.url().should('include', '/adminview.html')
        cy.getAllCookies().should('have.length', 1)
            .and((cookies) => { expect(cookies[0]).to.have.property('name', 'loggedin') })
    })
})