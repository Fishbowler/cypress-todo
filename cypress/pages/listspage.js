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

    _prepareListName(listName) {
        return listName.toLowerCase().replaceAll(" ", "-")
    }

    getList(listName) {
        listName = this._prepareListName(listName)
        return this.elements.listOfLists() // get the list of lists
            .find('[data-id="'+listName+'"]') // get the list with the name
    }

    openList(listName) {
        this.getList(listName).contains("[use]").click()
    }

    deleteList(listName) {
        return this.getList(listName)
            .find(".destroy") // get the delete button
            .click()
    }

    createList(listName) {
        this.elements.newListInput().type(listName + "{enter}")
    }

}

module.exports = Listspage;