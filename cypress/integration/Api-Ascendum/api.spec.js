describe('API Testing with Cypress', () => {
            
        it('Second test case', function() {

            var authHeader='e051043b86624518a57a263f9388d198';
            const options = {
              method: 'GET',
              url: `https://api.football-data.org/v2/teams/12`,
              headers:{
                authorization:authHeader,
              }};
        
            cy.request(options)
              .then((response)=>{
                expect(response.status).to.equal(200);
                expect(response.body).to.contain('12');
              });
          });
     });