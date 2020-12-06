# Reporting Tool

The Reporting Tool system faces our customers. Customers can create an account, purchase a licence, make a payment and when everything is OK, they can view the ontologies! Customers will get an email if everything is OK. We require to have a sandbox integration with paypal. Next, there are going to be 3 types of licences. Monthly, yearly and per visit. RT will use the Neo4j database and react graph library to enable customers to see our ontologies and RT will also use PostgreSQL database to store accounts and licences. Customers can manage their own account and licences and they can download the ontologies in an excel spreadsheet. Customers can download the content of the GD as pdf or excel sheet. We enable customers to fill a form that asks them for certain parameters. These parameters will be used to query the database and display appropriate results.

## Structure

* rt-fe: React front end
* rt-be: Spring Boot back end