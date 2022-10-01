## ACP - Demo App

This application is intended to test connection and permission with the tables of a database. Through the ACP application, the permissions of the tables of a database can be configured for each application.

Requires these environment variables:
- APP_NAME: Application name.
- TABLE_NAME: Name of the table to test.
- MYSQL_HOST: Database host.
- MYSQL_USER: Database user.
- MYSQL_PASSWORD: Database password.
- MYSQL_DATABASE: Database name.
- SELECT_RULE: Select rule.
- INSERT_RULE: Insert rule.
- UPDATE_RULE: Update rule.
- DELETE_RULE: Delete rule.


### How to start
1. Clone this repository.
2. run npm install.
3. Run node index.js. Depending on the ACP rules, the application will connect to the database and execute the SELECT, INSERT, UPDATE and DELETE actions.
```
--------642 - demo1 - table1 - database_a--------
SELECT OK
INSERT OK
UPDATE OK
DELETE OK
```
