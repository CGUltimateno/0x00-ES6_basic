import AppController from "../controllers/AppController";
import StudentsController from "../controllers/StudentsController";

/**
 * Index of routes
 */

const routes = (app) => {
    app.get('/', (req, res) => {
        AppController.getHome(req, res);
    });

    app.get('/students', (req, res) => {
        StudentsController.getAllStudents(res);
    });

    app.get('/students/:major', (req, res) => {
        StudentsController.getAllStudentsByMajor(res, req.params.major);
    });
}