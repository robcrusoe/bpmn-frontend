export const getEnrichedBPMNDiagram = () => {
    cy.intercept(
        'GET',
        'http://localhost:3001/bpmn/diagram',
        {
            statusCode: 200,
            fixture: 'Diagram.xml'
        }
    );
};