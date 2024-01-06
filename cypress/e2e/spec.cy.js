import Listspage from '../pages/listspage'

it('works', () => {
    cy.visit('/todolists.html')

    const listspage = new Listspage()
    
    listspage.elements.adminLogin().should('be.visible')
    listspage.elements.newListInput().should('be.visible')
    listspage.getList("eviltester").should('be.visible')
    
  })