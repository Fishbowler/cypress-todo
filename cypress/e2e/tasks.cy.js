import Listspage from '../pages/listspage'
import Listpage from '../pages/listpage'

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

describe('todolist filtering', () => {
  it('can filter by active tasks', () => {
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

    listpage.toggleItem("my second task")
    listpage.toggleItem("my fourth task")

    listpage.elements.activeFilter().click()

    listpage.getItem("my first task").should('be.visible')
    listpage.getItem("my third task").should('be.visible')
    listpage.getItem("my fifth task").should('be.visible')
    listpage.elements.listOfItems().should('not.contain.text', "my second task")
    listpage.elements.listOfItems().should('not.contain.text', "my fourth task")
  })

  it('can filter by completed tasks', () => {
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

    listpage.toggleItem("my second task")
    listpage.toggleItem("my fourth task")

    listpage.elements.completedFilter().click()

    listpage.getItem("my second task").should('be.visible')
    listpage.getItem("my fourth task").should('be.visible')
    listpage.elements.listOfItems().should('not.contain.text', "my first task")
    listpage.elements.listOfItems().should('not.contain.text', "my third task")
    listpage.elements.listOfItems().should('not.contain.text', "my fifth task")
  })
})