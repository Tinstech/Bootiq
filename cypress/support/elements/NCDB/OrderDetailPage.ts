interface OrderDetailPageProps {
  sendOrder: () => void;
  markPhotosAsAdjusted: () => void;
  prepareOrderForProcessing: () => void;
  checkOrderHistoryTabHasNoOrderedStatus: () => void;
  checkOrderHistoryTabHasOrderedStatus: () => void;
  processOrder: () => void;
  checkOrderHistoryTabHasNoCompletedStatus: () => void;
  checkOrderHistoryTabHasCompletedStatus: () => void;
}

const OrderDetailPage = (): OrderDetailPageProps => {
  const cardOrderHistoryTab = () => {
    return cy.get('.table-striped');
  };

  const sendOrderButton = () => {
    return cy.get('#j_id_2d\\:sendOrderButton\\:sendOrderButton');
  };

  const modalSendOrderSubmitButton = () => {
    return cy.get('#orderSendForm\\:submitButton');
  };

  const processOrderButton = () => {
    return cy.get('#j_id_4h\\:j_id_4i\\:j_id_4i');
  };

  const openProcessOrderModalButton = () => {
    return cy
      .get('#entriesForm\\:orderEntryList\\:0\\:j_id_f1')
      .find('.icon-process-small');
  };

  const submitProcessingModalButton = () => {
    return cy.get('#j_id_qk');
  };

  const prepareForProcessingButton = () => {
    return cy.get('#j_id_l3\\:j_id_l7\\:link');
  };

  const markPhotosAsAdjustedButton = () => {
    return cy.get('#j_id_l3\\:j_id_mg\\:link');
  };

  const checkOrderHistoryTabHasNoOrderedStatus = () => {
    cardOrderHistoryTab().should('contain', 'Draft');
    cardOrderHistoryTab().should('not.contain', 'Ordered');
  };

  const checkOrderHistoryTabHasOrderedStatus = () => {
    cardOrderHistoryTab().should('contain', 'Ordered');
  };

  const checkOrderHistoryTabHasNoCompletedStatus = () => {
    cardOrderHistoryTab()
      .should('not.contain', 'Invoiced')
      .and('not.contain', 'On the way')
      .and('not.contain', 'Delivered');
  };

  const checkOrderHistoryTabHasCompletedStatus = () => {
    cardOrderHistoryTab()
      .should('contain', 'Invoiced')
      .and('contain', 'On the way')
      .and('contain', 'Delivered');
  };

  const sendOrder = () => {
    sendOrderButton().click();
    modalSendOrderSubmitButton().click();
  };

  const markPhotosAsAdjusted = () => {
    processOrderButton().click();
    markPhotosAsAdjustedButton().click();
    cy.get('#globalMessages')
      .should('contain', '1')
      .and('contain', 'updated');
  };

  const prepareOrderForProcessing = () => {
    processOrderButton().click();
    prepareForProcessingButton().click();
    cardOrderHistoryTab().should('contain', 'In Production');
  };

  const processOrder = () => {
    checkOrderHistoryTabHasNoCompletedStatus();
    openProcessOrderModalButton().click();
    submitProcessingModalButton().click({ force: true });
    checkOrderHistoryTabHasCompletedStatus();
  };

  return {
    checkOrderHistoryTabHasNoOrderedStatus,
    sendOrder,
    markPhotosAsAdjusted,
    prepareOrderForProcessing,
    checkOrderHistoryTabHasOrderedStatus,
    checkOrderHistoryTabHasNoCompletedStatus,
    processOrder,
    checkOrderHistoryTabHasCompletedStatus,
  };
};

export { OrderDetailPage };
