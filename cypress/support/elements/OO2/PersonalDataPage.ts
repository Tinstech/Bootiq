import { generateRandomUsername } from '../../commands';
import routes from '../../testRoutes';

interface PersonalDataPageProps {
  fillInAndSubmitPersonalDataForm: () => void;
}

const PersonalDataPage = (): PersonalDataPageProps => {
  const dayOfBirthInput = () => {
    return cy.get('#personalData_dateOfBirth_day');
  };
  const monthOfBirthInput = () => {
    return cy.get('#personalData_dateOfBirth_month');
  };
  const yearOfBirthInput = () => {
    return cy.get('#personalData_dateOfBirth_year');
  };
  const firstNameInput = () => {
    return cy.get('#personalData_firstName');
  };
  const lastNameInput = () => {
    return cy.get('#personalData_lastName');
  };
  const academicInstitutionInput = () => {
    return cy.get('#personalData_issuerName');
  };
  const academicInstitutionOption = () => {
    return cy.get('span[role="status"]');
  };
  const emailInput = () => {
    return cy.get('#personalData_email');
  };
  const phoneNumberInput = () => {
    return cy.get('#personalData_phoneNumber');
  };
  const genderMaleButton = () => {
    return cy.get('button[value="M"]');
  };
  const personalDataSubmitButton = () => {
    return cy.get('#personalData_submit');
  };

  const fillInDateOfBirth = (day: string, month: string, year: string) => {
    dayOfBirthInput().select(day);
    monthOfBirthInput().select(month);
    yearOfBirthInput().select(year);
  };

  const fillInAndSubmitPersonalDataForm = () => {
    const USERNAME = generateRandomUsername();
    firstNameInput().type(USERNAME);
    lastNameInput().type('Test');
    academicInstitutionInput().type('Archip');
    fillInDateOfBirth('9', '04', '1998');
    academicInstitutionOption().click({ force: true });
    emailInput().type(`${USERNAME}@gmail.com`);
    phoneNumberInput().type('123456789');
    genderMaleButton().click();
    personalDataSubmitButton().click();
    cy.pathEq(Cypress.env('OO2_BASE_URL'), routes.additionalProductsPage);
  };

  return { fillInAndSubmitPersonalDataForm };
};

export { PersonalDataPage };
