///<reference types="cypress" /> 

import{Login}from "../../pageObject/login"

const login =new Login()

describe('Login Test page object model', () => {


    it('TC001 ', () => {

       
       login.navigate()
       login.title()


    })
    it('TC002 ', () => {

       /*
        login.loginBtn()
        login.username()
        login.password()
        login.submit()
        login.assert()
 */
        login.loginBtn()
        .username()
        .password()
        .submit()
        .assert()
 
     })
 





})