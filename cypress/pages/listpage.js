import Basepage from './basepage'

class Listpage extends Basepage {

    constructor() {
        super()
        this.elements = {...this.elements, ...this._elements}
    }

    _elements = {
        newItemInput: () => cy.get(".new-todo"),
        itemArea: () => cy.get(".main"),
        listOfItems: () => cy.get(".todo-list"),
        allFilter: () => cy.get(".filters").contains("All"),
        activeFilter: () => cy.get(".filters").contains("Active"),
        completedFilter: () => cy.get(".filters").contains("Completed"),
    }

    getItem(item) {
        return this.elements.listOfItems() // get the list of items
            .contains(item) // find the text in the list
            .parents("li") // get the list item that contains the text
    }

    toggleItem(item) {
        return this.getItem(item)
            .find(".toggle") // get the checkbox
            .click()
    }

    editItem(item, newItem) {
        this.getItem(item)
            .find("label") // get the label
            .dblclick('left') // double click the item to edit it
        this.getItem(item)
            .find(".edit") // get the edit field
            .clear() // clear the field
            .type(newItem + "{enter}") // type the new item and press enter
    }

    deleteItem(item) {
        return this.getItem(item)
            .find(".destroy") // get the delete button
            .click()
    }

    createItem(item) {
        this.elements.newItemInput().type(item + "{enter}")
    }

}

module.exports = Listpage;