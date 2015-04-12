myPagination = new Paginator(ProverbDeck);

Template.PagedProvs.helpers({
  proverbs: function() {
    return myPagination.find({}, {
      itemsPerPage: 4
    });
  },
  showResetButton: function() {
    return myPagination.find().currentPage() > 0;
  }
});

Template.PagedProvs.events({
  'click .reset': function() {
    return myPagination.reset();
  }
});

Template.Accordionate.rendered = function(){
  $('#provListAccordion.ui.accordion').accordion()
  };
