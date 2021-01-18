const { Client, logger } = require('camunda-external-task-client-js');
const open = require('open');

const config = {
  baseUrl: "http://localhost:8080/engine-rest",
  use: logger,
  asyncResponseTimeout: 10000
};