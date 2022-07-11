

import { LoginPage } from "../..//support/elements/MyTest/loginPage";


    // 1 : visit PAGE and succesful Log IN  
    // 2. create new order
    // 3. go to order details and fill information 
    // 4. pages orders : choose card + fill order name
    // 5.  page order choose new plastic card
    // 6. choose ISIC CARD CLICK
    // 7. CHOOSE CARD VALIDITY
    // 8: CHOOSE EXISTING CARD HOLDER
    // 9. button new cardholder
    // 10. fill personal data
    // 11. save button
    //12. go to orders a send order 



const loginPage = new LoginPage()


it('login test', () => {
  loginPage.navigate();
  loginPage.enterUsername();
  loginPage.enterPassword();
  loginPage.clickLogin();





  
  // stare testy nemaju best prakticisies podla dokumentacie (pouzivanie zbytocnyce vytvorenych velkych metod ktore sa cykla do seba a tym padom vznikaju spagety)
  // dev kod ma byt ako recept (co ako vytvarat) ale automation code ma byt popisovatelny co krok po kroku co ideme robit 
  // toto nie je junior code toto je prehladny code 
  

  // uprava
  // 1. do zlozky new test vytvor este jednu podzlozku s nazvom NCDBnew (aby som vedela ze toto je test na novu kartu)
  // 2. do zlozky NCDBnew budem pisat testy, kazdy step bude v novom teste s tym ze jeden test bude jeden IT a donho to buem pisat 
  // cim viac testov tym sa viac plati za cypress // piseme drahe testy  






});
    





