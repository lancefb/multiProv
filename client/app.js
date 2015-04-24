myPagination = new Paginator(ProverbDeck);

Template.PagedPopovers.helpers({
  proverbs: function() {
    return myPagination.find({}, {
      itemsPerPage: 4
    });
  },
  showResetButton: function() {
    return myPagination.find().currentPage() > 0;
  }
});

Template.PagedPopovers.events({
  'click .reset': function() {
    return myPagination.reset();
  }
});

Template.PopMeOver.rendered = function(){
  $('[data-toggle="popover"]').popover()
  };


  Template.PagedAccordions.helpers({
    proverbs: function() {
      return myPagination.find({}, {
        itemsPerPage: 4
      });
    },
    showResetButton: function() {
      return myPagination.find().currentPage() > 0;
    },
    rendered: function(){
    }
  });

  Template.PagedAccordions.events({
    'click .reset': function() {
      return myPagination.reset();
    }
  });


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


  Template.PagedDropdowns.helpers({
    proverbs: function() {
      return myPagination.find({}, {
        itemsPerPage: 4
      });
    },
    showResetButton: function() {
      return myPagination.find().currentPage() > 0;
    }
  });

  Template.PagedDropdowns.events({
    'click .reset': function() {
      return myPagination.reset();
    }
  });


Template.PagedShapes.helpers({
    proverbs: function() {
      return myPagination.find({}, {
        itemsPerPage: 4
      });
    },
    showResetButton: function() {
      return myPagination.find().currentPage() > 0;
    }
  });

Template.PagedShapes.events({
    'click .reset': function() {
      return myPagination.reset();
    }
  });

Template.ShapeMe.events({
  'click': function () {
    $('#provListShape.shape').shape('flip down')
  }
});
