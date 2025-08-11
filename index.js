import express from 'express';
import routes from './src/routes/routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

routes(app);

app.get('/', (req, res) => {
  res.send('Hello. Welcome to the Roman Numeral Converter API! Use /{num} endpoint to convert a number to its Roman numeral representation.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;