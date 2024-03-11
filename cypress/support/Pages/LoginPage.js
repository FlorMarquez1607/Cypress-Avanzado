export class LoginPage {


    Login(){
        cy.request(
            'POST',
            'https://pushing-it.onrender.com/api/login',
            {
            username: 'pushingit',
            password:'123456!'
            }).then((response) => {
                expect(response.status).to.equal(201)
                window.localStorage.setItem('token',response.body.token)
                window.localStorage.setItem('user',response.body.user.username)});
                cy.visit('');

    };
};


 /*cy.visit('');
       cy.get('[data-cy="registertoggle"]').dblclick();
       cy.get('[data-cy="user"]').type('pushingit');
       cy.get('[data-cy="pass"]').type('123456!');
       cy.get('[data-cy="submitForm"]').click();*/