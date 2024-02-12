const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use('/', require('./routes/authRoutes'));

app.get("/", (req, res) => {
    res.json("Hello")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
