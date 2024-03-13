export class LoginPage {


    Login(){
        cy.request(
            'POST',
            'https://pushing-it.onrender.com/api/login',
            {
            username: Cypress.env().user,
            password: Cypress.env().pass
            }).then((response) => {
                expect(response.status).to.equal(201)
                window.localStorage.setItem('token',response.body.token)
                window.localStorage.setItem('user',response.body.user.username)});
                cy.visit('');

    };
};


