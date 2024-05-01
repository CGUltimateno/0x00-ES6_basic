/**
 * AppController.js
 * 
 */
class AppController {
    static getHome(req, res) {
        response.status(200).send('Hello Holberton School!');
    }
}

export default AppController;
module.exports = AppController;