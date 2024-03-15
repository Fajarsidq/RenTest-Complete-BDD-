const URL = 'http://zero.webappsecurity.com/index.html';
const SEARCH  = '#searchTerm';

class searchPage {
    static visit(){
        cy.visit(URL);
    }

    static searchh() {
        cy.get(SEARCH).type('online{enter}')
    }
}

export default searchPage;
