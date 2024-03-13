/// <reference types="cypress" />

import {LoginPage} from "../../../support/pages/LoginPage";
import {OnlineShopPage} from "../../../support/Pages/OnlineShopPage";

const directorioName = __dirname.replaceAll('\\', '/');
const module = directorioName.split(/[/]/)[2]
const scenarioName = directorioName.slice(directorioName.lastIndexOf('/') + 1).split('-').slice(0, -1).join('-');
const testCaseId = directorioName.split(/[-]/).pop();



describe(` ${module} - ${scenarioName}`, () => {
    let data;
    const loginPage = new LoginPage ();
    const onLineShopPage = new OnlineShopPage ();


    beforeEach('',()=>{
        loginPage.Login(Cypress.env().user, Cypress.env().pass);
    })

    it(`User creates a Product and then deletes it - TestCaseId:${testCaseId}`, () => {

        cy.fixture(`${module}/${scenarioName}-${testCaseId}/data`).then(data => {
            data = data
      
        onLineShopPage.GetInOnLineShop();
        onLineShopPage.AddProduct(data.Id,data.Product);
        onLineShopPage.SearchProduct(data.Id,data.Product);
        onLineShopPage.DeleteProduct(data.Id,data.Product);
        onLineShopPage.VerifyThatProductWasDeleted(data.Id,data.Product);
       
            });
        });
    

    });
