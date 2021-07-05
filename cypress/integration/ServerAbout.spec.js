describe('ServerAbout component', () => {
  beforeEach(() => {
    cy.visit('/server');
  });

  it('should load the component successfully', () => {
    cy.get('[data-cy="server-about-title"]')
      .invoke('text')
      .should('equal', 'Hi, Again!');

    cy.get('[data-cy="server-about-subtitle"]')
      .invoke('text')
      .should('equal', 'Welcome to the About section for BPMN Server (Middleware)');
  });

  it('should redirect to / successfully on button click', () => {
    cy.get('[data-cy="redirect-to-frontend-about"]')
      .click();

    cy.get('[data-cy="frontend-about-title"]')
      .invoke('text')
      .should('equal', 'Hello, There!');

    cy.get('[data-cy="frontend-about-subtitle"]')
      .invoke('text')
      .should('equal', 'Welcome to the About section for BPMN Frontend');
  });

  it('should redirect to /diagram successfully on button click', () => {
    cy.get('[data-cy="redirect-to-diagram"]')
      .click();

    cy.get('[data-cy="diagram-title"]')
      .invoke('text')
      .should('equal', 'Business Process Model and Notation');
  });
});