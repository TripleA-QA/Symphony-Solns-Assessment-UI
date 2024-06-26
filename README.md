#Test for Web Aplication 


This test is to automate the process to verify thst items are sorted correctly.


##Prerequisites


Before you begin, ensure you have the following installed:


- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/)
- Cypress is installed in your project.


##Installation


1. **Clone the repository:**

  git clone <repository_url>
  
  cd <repository_directory>

2. **Install dependencies:**

   `npm install`

##Running Tests  


To run Cypress tests, you can use either the interactive mode or the headless mode.

 **Interactive Mode**

To open Cypress in interactive mode
1. Open a terminal in your project directory.
2. Run the following command:

   `npx cypress open`

This will launch the Cypress Test Runner, where you can select and run your feature files.


 **Headless Mode**

To run Cypress tests in headless mode
1. Open a terminal in your project directory.
2. Run the following command:
    
    `npx cypress run`

This will execute all the tests and output the results in the terminal.

#Project Structure

- __Assessment__
   - README.md
   - __cypress__
     - __downloads__
     - __e2e__
       - name_sorting.cy.js
     - __fixtures__
       - credentials.json
     - __reports__ 
     - __screenshots__
     - __support__
       - commands.js
       - e2e.js
   - node_modules 
   - cypress-mochawesome-reporter.d.ts  
   - cypress.config.ts
   - gitlab-ci.yml
   - package-lock.json
   - package.json
  


#Additional Information
- [Cypress Documentation](https://docs.cypress.io/)






