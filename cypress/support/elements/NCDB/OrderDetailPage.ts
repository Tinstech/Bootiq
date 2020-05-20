interface OrderDetailPageProps {
  sendOrder: () => void;
  markPhotosAsAdjusted: () => void;
  prepareOrderForProcessing: () => void;
  checkOrderHistoryTabHasNoOrderedStatus: () => void;
  checkOrderHistoryTabHasOrderedStatus: () => void;
  processOrder: () => void;
  checkOrderHistoryTabHasNoCompletedStatus: () => void;
  checkOrderHistoryTabHasCompletedStatus: () => void;
  finishOrderProcessing: () => void;
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
    return cy.get('#entriesForm\\:orderEntryList\\:0\\:j_id_f1');
  };

  const submitProcessingModalButton = () => {
    return cy.get('.buttons-bar .ui-button-text');
  };

  const prepareForProcessingButton = () => {
    return cy.get('#j_id_l3\\:j_id_l7\\:link');
  };

  const markPhotosAsAdjustedButton = () => {
    return cy.get('#j_id_l3\\:j_id_mg\\:link');
  };

  const confirmDeliveryButton = () => {
    return cy.get(
      'div.content-box:nth-child(8) div.content-box-content div.ui-datatable.ui-widget:nth-child(1) div.ui-datatable-tablewrapper tbody.ui-datatable-data.ui-widget-content:nth-child(2) tr.ui-widget-content.ui-datatable-even:nth-child(1) td.action-column-4:nth-child(7) a:nth-child(3) > span:nth-child(1)',
    );
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
    cy.get('#globalMessages').should('contain', '1').and('contain', 'updated');
  };

  const prepareOrderForProcessing = () => {
    processOrderButton().click();
    prepareForProcessingButton().click();
    cardOrderHistoryTab().should('contain', 'In Production');
  };

  const processOrder = () => {
    checkOrderHistoryTabHasNoCompletedStatus();
    openProcessOrderModalButton().click();
    //cy.server();
    //cy.route('/pages/orders/**').as('xhr');
    cy.wait(5000);
    submitProcessingModalButton().click({ force: true });
    cy.wait(10000);
    //checkOrderHistoryTabHasCompletedStatus();
  };

  const finishOrderProcessing = () => {
    cy.reload();
    confirmDeliveryButton().click();
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
    finishOrderProcessing,
  };
};

export { OrderDetailPage };
