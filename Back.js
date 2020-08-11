const express = require('express');
const app = express();
let cors = require('cors');
const portListen = 8000;
const mysql = require('mysql');
// import data from '.data.json'
app.listen(portListen);
console.log('Port listening to:', portListen);
app.use(cors());



// ---- DATABASE CONNECTION ---- //
const con = mysql.createConnection({
  host: "192.168.64.2",
  user: "Sol",
  password: "tKGVOfOrgaBrLRMd",
  database: "maskshop_db"
});

// ---- ENDPOINTS ---- //
app.get('/', (req, res) => {
  res.sendFile(path.resolve('client/build', 'index.html'));
});

  // --- All Products
app.post('/allproducts', function (req, res) {
    con.query('SELECT id, name, price, relevance FROM articles', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });


  // --- Products by price
 app.post('/productsbyprice_asc', function (req, res) {
  con.query('SELECT a.id, a.name, a.price, a.relevance FROM articles a JOIN brands b ON b.CIF = a.brands_CIF ORDER BY price ASC', function (error, results, fields) {
  if (error) throw error;
  res.end(JSON.stringify(results));
});
});

app.post('/productsbyprice_des', function (req, res) {
  con.query('SELECT a.id, a.name, a.price, a.relevance FROM articles a JOIN brands b ON b.CIF = a.brands_CIF ORDER BY price DESC', function (error, results, fields) {
  if (error) throw error;
  res.end(JSON.stringify(results));
});
});

  // --- Products by name
app.post('/productsbyname_asc', function (req, res) {
  con.query('SELECT a.id, a.name, a.price, a.relevance FROM articles a JOIN brands b ON b.CIF = a.brands_CIF ORDER BY name ASC', function (error, results, fields) {
  if (error) throw error;
  res.end(JSON.stringify(results));
});
});

app.post('/productsbyname_des', function (req, res) {
  con.query('SELECT a.id, a.name, a.price, a.relevance FROM articles a JOIN brands b ON b.CIF = a.brands_CIF ORDER BY name DESC', function (error, results, fields) {
  if (error) throw error;
  res.end(JSON.stringify(results));
});
});


  // --- Products by relevance
app.post('/productsbyrelevance_asc', function (req, res) {
  con.query('SELECT a.id, a.name, a.price, a.relevance FROM articles a JOIN brands b ON b.CIF = a.brands_CIF ORDER BY relevance ASC', function (error, results, fields) {
  if (error) throw error;
  res.end(JSON.stringify(results));
});
});

app.post('/productsbyrelevance_des', function (req, res) {
  con.query('SELECT a.id, a.name, a.price, a.relevance FROM articles a JOIN brands b ON b.CIF = a.brands_CIF ORDER BY relevance DESC', function (error, results, fields) {
  if (error) throw error;
  res.end(JSON.stringify(results));
});
});

  // --- Product´s detail
app.post('/product/:id', (req, res) => {
  let productId = req.params.id
  con.query(`SELECT a.id, a.name, a.price, b.name AS brand, b.address FROM articles a JOIN brands b ON b.CIF = a.brands_CIF WHERE a.id LIKE ${productId};`, function (error, results, fields) {
  if (error) throw error;
  res.end(JSON.stringify(results));
  });
})








  




