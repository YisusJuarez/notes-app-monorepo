describe('note app', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it('front page can be opened',()=>{
        cy.contains('Notes')
    })
    it('User can Login',()=>{
        const user = {
            mail:'AndyCons',
            pass:'laandypassword'
        }
        cy.contains('Mostrar Login').click()
        cy.get('[placeholder="Username"]').type(user.mail)
        cy.get('[placeholder="Password"]').type(user.pass)
        cy.get('#input-login-button').click()
        cy.contains("Create")
    })
})

