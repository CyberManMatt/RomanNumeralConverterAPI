import { romanNumeralConverter, romanNumeralToNumber } from '../controllers/controller.js';

// This function sets up the routes for the application
// It maps the incoming requests to the appropriate controller function
// for converting numbers to Roman numerals.
// The route expects a number as a parameter in the URL.
// Example: GET /5 will return the Roman numeral for 5.
const routes = (app) => {
    app.route('/:num')
        .get(romanNumeralConverter);

    // This route handles the conversion of Roman numerals back to numbers.
    // It expects a Roman numeral as a parameter in the URL.
    // Example: GET /X will return the number 10.
    app.route('/roman/:roman')
        .get(romanNumeralToNumber);
}

export default routes;