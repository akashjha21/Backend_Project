export const DB_NAME = 'BackendLearn'; // we are writing this in constants.js because we don't want to write the database name again and again in our code

// DATABASE Connection hoga Mongoose ke through and app.js m APP connection hoga Express ke through

// 1. DATABASES will have a lot of errors so WE SHOULD ALWAYS USE TRY AND CATCH BLOCKS or PROMISES(RESOLVE AND REJECT) to handle errors
// 2. DATABASES will always be asynchronous ans it needs some time to connect with the database so we should always use ASYNC AWAIT to handle the asynchronous nature of the database connection