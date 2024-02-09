
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/url', require('./routes/url'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
