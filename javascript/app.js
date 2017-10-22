const express = require('express');
const keys = require ('./config/keys')
const stripe = require('stripe')(keys.stripeSecretKey);
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

// Handlebars Middleware
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

// Index Route
app.get('/', (req, res) => {
  res.render('index',{
    stripePublishableKey: keys.stripePublishableKey
  });
});

// Beginning of Residential Real Estate
// Residential Real Estate (Bronze) Charge Route
app.post('/charge_Rb', (req, res) => {
  const amount = 15000; 

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer => stripe.charges.create({
    amount,
    description:'Residential Real Estate (Bronze)',
    currency:'usd',
    customer:customer.id
  }))
  .then(charge => res.render('success'));
});

// Residential Real Estate (Gold) Charge Route
app.post('/charge_Rg', (req, res) => {
  const amount = 50000; 

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer => stripe.charges.create({
    amount,
    description:'Residential Real Estate (Gold)',
    currency:'usd',
    customer:customer.id
  }))
  .then(charge => res.render('success'));
});

// Residential Real Estate (Silver) Charge Route
app.post('/charge_Rs', (req, res) => {
  const amount = 30000; 

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer => stripe.charges.create({
    amount,
    description:'Residential Real Estate (Silver)',
    currency:'usd',
    customer:customer.id
  }))
  .then(charge => res.render('success'));
});
//End of Residential Real Estate


// Beginning of Commercial Real Estate
// Commercial Real Estate (Bronze) Charge Route
app.post('/charge_Cb', (req, res) => {
  const amount = 20000; 

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer => stripe.charges.create({
    amount,
    description:'Commercial Real Estate (Bronze)',
    currency:'usd',
    customer:customer.id
  }))
  .then(charge => res.render('success'));
});

// Commercial Real Estate (Gold) Charge Route
app.post('/charge_Cg', (req, res) => {
  const amount = 60000; 

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer => stripe.charges.create({
    amount,
    description:'Commercial Real Estate (Gold)',
    currency:'usd',
    customer:customer.id
  }))
  .then(charge => res.render('success'));
});

// Commercial Real Estate (Silver) Charge Route
app.post('/charge_Cs', (req, res) => {
  const amount = 40000; 

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer => stripe.charges.create({
    amount,
    description:'Commercial Real Estate (Silver)',
    currency:'usd',
    customer:customer.id
  }))
  .then(charge => res.render('success'));
});
//End of Commercial Real Estate


// Beginning of Roof Inspections
// Roof Inspections (Bronze) Charge Route
app.post('/charge_RIb', (req, res) => {
  const amount = 10000; 

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer => stripe.charges.create({
    amount,
    description:'Roof Inspections (Bronze)',
    currency:'usd',
    customer:customer.id
  }))
  .then(charge => res.render('success'));
});

// Roof Inspections (Gold) Charge Route
app.post('/charge_RIg', (req, res) => {
  const amount = 50000; 

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer => stripe.charges.create({
    amount,
    description:'Roof Inspections (Gold)',
    currency:'usd',
    customer:customer.id
  }))
  .then(charge => res.render('success'));
});

// Roof Inspections (Silver) Charge Route
app.post('/charge_RIs', (req, res) => {
  const amount = 30000; 

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer => stripe.charges.create({
    amount,
    description:'Roof Inspections (Silver)',
    currency:'usd',
    customer:customer.id
  }))
  .then(charge => res.render('success'));
});
//End of Roof Inspections

// Beginning of Events
// Event (Bronze) Charge Route
app.post('/charge_Eb', (req, res) => {
  const amount = 30000; 

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer => stripe.charges.create({
    amount,
    description:'Event (Bronze)',
    currency:'usd',
    customer:customer.id
  }))
  .then(charge => res.render('success'));
});

// Event (Gold) Charge Route
app.post('/charge_Eg', (req, res) => {
  const amount = 150000; 

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer => stripe.charges.create({
    amount,
    description:'Event (Gold)',
    currency:'usd',
    customer:customer.id
  }))
  .then(charge => res.render('success'));
});

// Event (Silver) Charge Route
app.post('/charge_Es', (req, res) => {
  const amount = 80000; 

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer => stripe.charges.create({
    amount,
    description:'Event (Silver)',
    currency:'usd',
    customer:customer.id
  }))
  .then(charge => res.render('success'));
});
//End of Event

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

