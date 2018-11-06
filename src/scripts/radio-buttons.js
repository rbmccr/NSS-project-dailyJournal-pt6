// assign click listener to radio button container
radioContainer.addEventListener("click", (e) => {
  // determine id of the radio button that was clicked
  for (i = 0; i < radioButtonCollection.length; i++) {
    if (radioButtonCollection[i].id === e.target.id) {
      radioButtonClicked = radioButtonCollection[i]; // assigned radio button to Clicked variable for access to value property
      container.innerHTML = ""; // empty entryLog container
      // filter entries by mood by comparing entry object's mood property with value of button clicked
      API.getJournalEntries().then(entries => renderJournalEntries(entries.filter(entry => entry.mood === radioButtonClicked.value)));
    } else if (e.target.id === "all") { //else if will render all entries
      container.innerHTML = ""; // empty entryLog container
      API.getJournalEntries().then(entries => renderJournalEntries(entries));
      return // exit function to prevent loop from fetching 5 more times (radioButtonCollection.length)
    }
  }
});
