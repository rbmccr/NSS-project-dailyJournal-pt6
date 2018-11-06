// assign click listener to radio button container
radioContainer.addEventListener("click", (e) => {

  // determine id of the radio button that was clicked
  for (i = 0; i < radioButtonCollection.length; i++) {
    if (radioButtonCollection[i].id === e.target.id) {
      radioButtonClicked = radioButtonCollection[i];
      container.innerHTML = ""; //empty entryLog container
      API.getJournalEntries().then(entries => renderJournalEntries(entries.filter(entry => entry.mood === radioButtonClicked.value)));
    }
  }
});
