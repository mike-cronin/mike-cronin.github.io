const querySuggestionTemplate = hit => `<ul class="autofill-list">
	<li class="autofill-text">${hit._highlightResult.name.value}</li>
  </ul>`;

export default querySuggestionTemplate;
