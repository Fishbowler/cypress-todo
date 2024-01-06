import Basepage from './basepage'

class Listspage extends Basepage {

    constructor() {
        super()
        this.elements = {...this.elements, ...this._elements}
    }

    _elements = {
        newListInput: () => cy.get(".new-todo-list"),
        listOfLists: () => cy.get(".todo-list-list"),
    }

    getList(listName) {
        return this.elements.listOfLists() // get the list of lists
            .get('[data-id="'+listName+'"]') // get the list with the name
    }

    deleteList(listName) {
        return getList(listName)
            .get(".destroy") // get the delete button
            .click()
    }

    createList(listName) {
        this.elements.newListInput().type(listName + "{enter}")
    }

}

module.exports = Listspage;