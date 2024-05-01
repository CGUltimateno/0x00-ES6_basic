import AppController from "../controllers/AppController";
import StudentsController from "../controllers/StudentsController";

/**
 * Index of routes
 */

const routes = (app) => {
    app.get('/', AppController.getHomepage);
    app.get('/students', StudentsController.getAllStudents);
    app.get('/students/:major', StudentsController.getAllStudentsByMajor);
  };

export default routes;
modules.export = routes;