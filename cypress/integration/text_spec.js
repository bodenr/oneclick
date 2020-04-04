describe('Button Test', function() {
    it('clicks the button and verifies text updated', function() {
      cy.visit('http://localhost:8080')
  
      cy.get('#messageText').contains('Initial Text')
      cy.get('#messageButton').click()
      cy.get('#messageText').contains('Updated Text')
    })
  })
