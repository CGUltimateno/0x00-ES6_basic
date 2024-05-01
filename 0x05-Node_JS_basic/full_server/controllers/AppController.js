/**
 * AppController.js
 * 
 */
class AppController {
    static getHome(req, res) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    }
}

export default AppController;
module.exports = AppController;