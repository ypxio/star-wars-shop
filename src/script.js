!function (error) {
  console.error(error);
  if (typeof document === 'undefined') {
    return;
  } else if (!document.body) {
    document.addEventListener('DOMContentLoaded', print);
  } else {
    print();
  }
  function print() {
    var pre = document.createElement('pre');
    pre.className = 'errorify';
    pre.textContent = error.message || error;
    if (document.body.firstChild) {
      document.body.insertBefore(pre, document.body.firstChild);
    } else {
      document.body.appendChild(pre);
    }
  }
}({"message":"/Volumes/Data/Projects/Salestock/assessment/src/App.jsx: Complex binding patterns require an initialization value (8:17) while parsing file: /Volumes/Data/Projects/Salestock/assessment/src/App.jsx\n\nvar Swapi = require('./api/Swapi')\n\nvar { GetPlanet } from './actions/AppActions'\n// var store = require('./store/AppStore')\n\nclass App extends Component {","name":"SyntaxError","stack":"SyntaxError: /Volumes/Data/Projects/Salestock/assessment/src/App.jsx: Complex binding patterns require an initialization value (8:17)\nvar Swapi = require('./api/Swapi')\n\nvar { GetPlanet } from './actions/AppActions'\n// var store = require('./store/AppStore')\n\nclass App extends Component {\n    at Parser.pp.raise (/Volumes/Data/Projects/Salestock/assessment/node_modules/babelify/node_modules/babylon/lib/parser/location.js:24:13)\n    at Parser.pp.parseVar (/Volumes/Data/Projects/Salestock/assessment/node_modules/babelify/node_modules/babylon/lib/parser/statement.js:497:12)\n    at Parser.pp.parseVarStatement (/Volumes/Data/Projects/Salestock/assessment/node_modules/babelify/node_modules/babylon/lib/parser/statement.js:370:8)\n    at Parser.pp.parseStatement (/Volumes/Data/Projects/Salestock/assessment/node_modules/babelify/node_modules/babylon/lib/parser/statement.js:99:19)\n    at Parser.parseStatement (/Volumes/Data/Projects/Salestock/assessment/node_modules/babelify/node_modules/babylon/lib/plugins/flow.js:655:22)\n    at Parser.pp.parseTopLevel (/Volumes/Data/Projects/Salestock/assessment/node_modules/babelify/node_modules/babylon/lib/parser/statement.js:30:21)\n    at Parser.parse (/Volumes/Data/Projects/Salestock/assessment/node_modules/babelify/node_modules/babylon/lib/parser/index.js:70:17)\n    at Object.parse (/Volumes/Data/Projects/Salestock/assessment/node_modules/babelify/node_modules/babylon/lib/index.js:45:50)\n    at Object.exports.default (/Volumes/Data/Projects/Salestock/assessment/node_modules/babelify/node_modules/babel-core/lib/helpers/parse.js:36:18)\n    at File.parse (/Volumes/Data/Projects/Salestock/assessment/node_modules/babelify/node_modules/babel-core/lib/transformation/file/index.js:574:40)"})