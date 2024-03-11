export class OnlineShopPage {


    GetInOnLineShop(){
        cy.get('[data-cy="onlineshoplink"]').click();

};

    AddProduct(){
        cy.request(
            'POST',
            'https://pushing-it.onrender.com/api/create-product',
            {
            "id":"3170",
            "img":"https://www.mrporter.com/variants/images/1647597324163545/in/w1200_q60.jpg",
            "name":"Remera Rosa",
            "price":"4500"
            }).then((response) => {
                expect(response.status).to.equal(201)
        });          

    };

    SearchProduct(Id,Product){
       cy.get('[data-cy="search-type"]').select('ID');
       cy.get('[data-cy="search-bar"]').type(`${Id} {enter}`)
    }

    VerifyThatProductExists(Id,Product){
       cy.get('[data-cy="name"]').should('contain.text',Product)
     }
    
    DeleteProduct (Id,Product){
       cy.get(`[data-cy="delete-${Id}`).click();
       cy.xpath('//p [@class="chakra-text css-1kr14st"]').should('contain.text',Product);
       cy.get('#saveEdit').click();
       cy.xpath('//p [@class="chakra-text css-0"]').should('have.text',`${Product} has been deleted`);
       cy.get('[data-cy="closeModal"]').click();
    }

    VerifyThatProductWasDeleted(Id,Product){
       cy.get('[data-cy="search-type"]').select('ID');
       cy.get('[data-cy="search-bar"]').clear().type(`${Id} {enter}`)
       cy.get('[data-cy="name"]').should('not.contain.text',Product)
     }

};

