import * as diagramMocks from '../mocks/Diagram';

describe('Diagram component', () => {
  beforeEach(() => {
    cy.visit('/diagram');
    diagramMocks.getEnrichedBPMNDiagram();
  });

  it('should load the component successfully', () => {
    cy.get('[data-cy="diagram-title"]')
      .invoke('text')
      .should('equal', 'Business Process Model and Notation');
  });

  it('loads the panel for status successfully', () => {
    cy.get('[data-cy="panel"]')
      .should('exist');

    cy.get('[data-cy="panel-ok"]')
      .invoke('text')
      .should('equal', 'OK');

    cy.get('[data-cy="panel-pending"]')
      .invoke('text')
      .should('equal', 'PENDING');

    cy.get('[data-cy="panel-failed"]')
      .invoke('text')
      .should('equal', 'FAILED');
  });
});