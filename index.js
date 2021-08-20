const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const calculator = require('./calculator');

const app = express();

app.use(express.json()); // to grab message body with req.body encoded as JSON
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')

app.get('/', async(req, res) => {
    res.render('index');
})

app.post('/result', (req, res) => {
    console.log(req.body);
    const operation = (req.body.operation);
    const num1 = (req.body.number1);
    const num2 = (req.body.number2);
    console.log(num1, num2, operation)

    if (operation === 'Add') {
        const simpleCalculator = new calculator(+num1, +num2);
        const answer = simpleCalculator.add();

        res.status(200).render('results', { solution: { result: answer } });
    } else if (operation === 'Product') {
        const simpleCalculator = new calculator(+num1, +num2);
        const answer = simpleCalculator.multiply();

        res.status(200).render('results', { solution: { result: answer } });
    }

    res.send('Invalid Input');

});

app.listen(4000, () => {
    console.log('Server running at port 4000');
})