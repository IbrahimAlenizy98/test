/// <reference types= "cypress" />



const expectedcurrency="SAR"
const expectedattrbut="lang"
const expectedlanguge="en"



describe('aspier test case', () => {
  it('check the currency is SAR', () => {
    cy.visit('https://global.almosafer.com/EN?')
    cy.get('.cta__saudi').click()
    cy.get('[data-testid="Header__CurrencySelector"]').invoke('text').should('include',expectedcurrency)
  })
  it('check the languge', () => {
    cy.visit('https://global.almosafer.com/EN?')
    cy.get('.cta__saudi').click()
    cy.get('html').should('have.attr',expectedattrbut,expectedlanguge)
    
  });
})