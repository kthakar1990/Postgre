import App from './app';
import SampleRoutes from './controllers/Sample/index';

async function main() {
  const app = new App([new SampleRoutes()]);
  app.listen();
}

// If we don't catch the error then node will report an unhandledRejection but won't actually stop the server
Promise.resolve(main()).then(function () {
  console.info({
      "message": "Production start up complete",
      "logging_category": "startup",
      startup_status: "complete"
  });
}).catch(function (err) {
  console.error({
      "message": "Production start up failed",
      "logging_category": "startup",
      startup_status: "failed"
  });
  console.error(err);
  process.exit(1);
});
