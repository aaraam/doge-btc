const express = require('express');
const app = express();

app.use(express.json());

const Routes = require('./routes');
app.use('/api', Routes);

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
