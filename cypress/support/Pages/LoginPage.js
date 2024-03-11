export class LoginPage {


    Login(User,Pass){
        cy.request(
            'POST',
            'https://pushing-it.onrender.com/api/login',
            {
            username: "pushingit",
            password: "123456!"
            }).then((response) => {
                expect(response.status).to.equal(201)
                window.localStorage.setItem('token',response.body.token)
                window.localStorage.setItem('user',response.body.user.username)});
                cy.visit('');

    };
};


