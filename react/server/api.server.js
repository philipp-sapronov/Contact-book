'use strict';
// Don't keep credentials in the source tree in a real app!
// const {Pool} = require('pg');
// const pool = new Pool(require('../credentials'));

require('react-server-dom-webpack/node-register')();
// babel

require('@babel/register')({
  ignore: [/[\\\/](build|server|node_modules)[\\\/]/],
  // only: [/[\\\/](src)[\\\/]/],

  presets: [
    ['@babel/preset-env', { loose: true }],
    ['react-app', { runtime: 'automatic' }],
  ],
  plugins: [
    ['@babel/plugin-transform-proto-to-assign'],
    ['@babel/plugin-transform-modules-commonjs'],
  ],
});

const express = require('express');
const compress = require('compression');
const ReactApp = require('../src/App.server').default;
const renderReact = require('./renderReact.server');
const renderHtml = require('./renderHtml.server');
const { tryCatch, handleError } = require('./helpers');

const PORT = 4000;
const app = express();

app.use(compress());
app.use(express.json());
app.use(express.static('build'));
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Server is listening at ' + PORT);
});

app.get('*', async (req, res, next) => {
  console.log(req.url, '<<< GET: ' + req.url + ' >>>');
  const html = await tryCatch(renderHtml, next)();
  res.send(html);
});

app.post('*', async (req, res, next) => {
  console.log('<<< POST: ' + req.url + ' >>>');
  await tryCatch(renderReact, next)(ReactApp, res, { url: req.url });
});

app.on('error', handleError);

app.use(function(err, req, res, next) {
  console.error(err);
  res.status(500).send('Something broke!');
  next(err);
});
