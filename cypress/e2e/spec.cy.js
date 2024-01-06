import Listspage from '../pages/listspage'
import Listpage from '../pages/listpage'

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

describe('todolist list CRUD', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
  })
  
  it('can create and view an empty list', () => {
    cy.visit('/todolists.html')

    const listspage = new Listspage()
    
    listspage.createList("another list")
    listspage.openList("another list")

    const listpage = new Listpage()

    listpage.elements.itemArea().should('not.be.visible')
  })

  it('can add a task to a list', () => {
    cy.visit('/todolists.html')

    const listspage = new Listspage()
    
    listspage.createList("another list")
    listspage.openList("another list")

    const listpage = new Listpage()

    listpage.createItem("my new task")
    listpage.elements.listOfItems().should('contain.text', "my new task")
    listpage.getItem("my new task").should('be.visible')
  })

  it('can delete a task from a list', () => {
    cy.visit('/todolists.html')

    const listspage = new Listspage()
    
    listspage.createList("another list")
    listspage.openList("another list")

    const listpage = new Listpage()

    listpage.createItem("my new task")
    listpage.deleteItem("my new task")
    listpage.elements.listOfItems().should('not.contain.text', "my new task")
  })

  it('can mark a task as complete', () => {
    cy.visit('/todolists.html')

    const listspage = new Listspage()
    
    listspage.createList("another list")
    listspage.openList("another list")

    const listpage = new Listpage()

    listpage.createItem("my new task")
    listpage.toggleItem("my new task")
    listpage.getItem("my new task").should('contain.class', "completed")
  })

  it('can mark a task as incomplete', () => {
    cy.visit('/todolists.html')

    const listspage = new Listspage()
    
    listspage.createList("another list")
    listspage.openList("another list")

    const listpage = new Listpage()

    listpage.createItem("my new task")
    listpage.toggleItem("my new task")
    listpage.toggleItem("my new task")
    listpage.getItem("my new task").should('not.contain.class', "completed")
  })

  it('can edit a task', () => {
    cy.visit('/todolists.html')

    const listspage = new Listspage()
    
    listspage.createList("another list")
    listspage.openList("another list")

    const listpage = new Listpage()

    listpage.createItem("my new task")
    listpage.editItem("my new task", "my edited task")
    listpage.elements.listOfItems().should('not.contain.text', "my new task")
    listpage.getItem("my edited task").should('be.visible')
  })

  it('can add multiple tasks', () => {
    cy.visit('/todolists.html')

    const listspage = new Listspage()
    
    listspage.createList("another list")
    listspage.openList("another list")

    const listpage = new Listpage()

    listpage.createItem("my first task")
    listpage.createItem("my second task")
    listpage.createItem("my third task")
    listpage.createItem("my fourth task")
    listpage.createItem("my fifth task")

    listpage.getItem("my first task").should('be.visible')
    listpage.getItem("my second task").should('be.visible')
    listpage.getItem("my third task").should('be.visible')
    listpage.getItem("my fourth task").should('be.visible')
    listpage.getItem("my fifth task").should('be.visible')
  })
})