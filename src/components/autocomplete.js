import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';

// Instant Search Widgets
import { hits, searchBox, configure, index } from 'instantsearch.js/es/widgets';

// Instant Search connector (added to support query suggestions widget)
// import { connectHits, connectRefinementList } from 'instantsearch.js/es/connectors';

// Autocomplete Product + Query Suggestion Templates
import autocompleteProductTemplate from '../templates/autocomplete-product';
import querySuggestionTemplate from '../templates/query-suggestion';

/**
 * @class Autocomplete
 * @description Instant Search class to display content in the page's autocomplete
 */
class Autocomplete {
  /**
   * @constructor
   */
  constructor() {
    this._registerClient();
//    this._updateIndex();
    this._registerWidgets();
    this._startSearch();
  }

  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */
  _registerClient() {
    this._searchClient = algoliasearch(
      '1NSSZNS70I',
      'f395208666abf2c440eafa9c7d3cd02c'
    );

    this._searchInstance = instantsearch({
      indexName: 'dev_products',
      searchClient: this._searchClient,
    });

    // Adding query suggestion index object
  /*  this._qsInstance = instantsearch({
      indexName: 'dev_products_query_suggestions',
      searchClient: this._searchClient,
    }); */

  }

  /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */
  _registerWidgets() {

    /* Adding helper function to generate HTML for query suggestions based on some sample code from docs
    * Leaving commented out for reference towards a failed attempt

    const queryDisplay = ({ widgetParams, hits }, isFirstRender) => {
      const container = document.querySelector(widgetParams.container);
      
      container.innerHTML = `<ul>
        ${hits
          .map(
            (item) => `<li>${hits.name.value} - ${instantsearch.highlight({ hit: item, attribute: 'query' })}</li>`
          )
          .join('')}
      </ul>`;

    };

    const queryHits = connectHits(queryDisplay);
    */

    // Product results index (from original code)
    this._searchInstance.addWidgets([
        configure({
          hitsPerPage: 4
        }),
        searchBox({
          container: '#searchbox',
        }),
        hits({
          container: '#autocomplete-hits',
          templates: { item: autocompleteProductTemplate },
        }),
    ]);

    // Query suggestion - added simple template for display
    this._searchInstance.addWidgets([
      configure({
      hitsPerPage: 10,
      }),
      searchBox({
        container: '#searchbox',
     }),
      hits({
        container: '#suggestions',
        templates: { item: querySuggestionTemplate },
      }),
    ]); 

  }

  /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */
  _startSearch() {
    this._searchInstance.start();

  }

  /**
  * @private
   * Loads data from /data/products.json into the index 
   * @return {void}
  */ 
  /*
  _updateIndex() {
    const products = require('../../data/products.json');

    this._searchClient.initIndex('dev_products').saveObjects(products, {
      autoGenerateObjectIDIfNotExist: true
      // any other requestOptions
    }); 
  }
  */
  
}

export default Autocomplete;
