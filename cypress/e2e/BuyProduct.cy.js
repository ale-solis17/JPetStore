/// <reference types="cypress" />

describe('Buy_Product', () =>{
    beforeEach(() => {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');// Visita la página 
        cy.contains('Sign In').click(); // Hace clic en el enlace "Sign In"
        cy.get('input[name="username"]').type('Juan Pablo');// Rellena el campo de usuario
        cy.get('input[name="password"]').clear(); // Limpia el campo de contraseña
        cy.get('input[name="password"]').type('1234');// Rellena el campo de contraseña     
      })
      it('JPD-11: FE | Login | Proceso de pago', () => {    
        cy.get('input[name="signon"]').click();// Hace clic en el botón "signon" 
        cy.get('input[name=keyword]').type('Fish') //Escribir en el buscador "Fish"
        cy.get('input[name=searchProducts]').click() // Hace clic en el boton "Search"
        cy.contains('FI-SW-01').click() // Hace clic al producto "FI-SW-01"
        cy.contains('Add to Cart').click() // Hace clic al botón "Add to Cart"
        cy.contains('Proceed to Checkout').click() // Hace clic en el boton "Procced to Checkout"
        cy.contains('Continue').click() // Hace clic al botón clic "Continue"
        cy.contains('Confirm').click() // Hace clic al botón "Confirm"
        cy.contains('Thank you, your order has been submitted.').should('be.visible') // Verifica que aparezca el mensaje "Thank you, your order has been submitted" 
        cy.screenshot()
      })    
})