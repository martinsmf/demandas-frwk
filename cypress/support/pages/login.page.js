/// <reference types="Cypress" />

import LoginElements from '../elements/login.elements'

class LoginPage{

    loginWith(user, password){
         LoginElements.inputLogin.type(user)
         LoginElements.inputPassword.type(password)
         LoginElements.buttonLogar.click()
    }


}

export default new LoginPage();