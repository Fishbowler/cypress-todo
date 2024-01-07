import Listspage from '../pages/listspage'

describe('todolist homepage', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
  })
  
  it('displays the homepage correctly', () => {
    cy.visit('/todolists.html')

    const listspage = new Listspage()
    
    listspage.elements.adminLogin().should('be.visible')
    listspage.elements.newListInput().should('be.visible')
    listspage.getList("eviltester").should('be.visible')
    
    cy.viewport(1000,550)
    cy.matchImageSnapshot('listspage')
  })

  it('can create a list', () => {
    cy.visit('/todolists.html')

    const listspage = new Listspage()
    
    listspage.createList("my new list")
    listspage.getList("my new list").should('be.visible')
  })

  it('can delete a list', () => {
    cy.visit('/todolists.html')

    const listspage = new Listspage()
    
    listspage.createList("another list")
    listspage.deleteList("another list")
    listspage.getList("another list").should('not.exist')
  })
})