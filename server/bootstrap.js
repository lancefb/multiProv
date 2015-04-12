Meteor.startup(function () {
  if (ProverbDeck.find().count() === 0) {
    var pverbs = [
      ['Actions speak louder than words', 'It is safer to rely on what people do than on what they say.'],
      ['All for one and one for all', 'Every member supports the group and the group supports every member.'],
      ["All's well that ends well", 'In any effort, all that matters is a good outcome.'],
      ['An apple a day keeps the doctor away', 'Apples help keep us healthy.'],
      ['April showers bring May flowers', 'Unpleasant things may bring about good things, just as rainy days cause flowers to bloom later on.'],
      ['Beauty is only skin deep', 'People should be judged not by their appearance but by their inner qualities.'],
      ["Beggars can't be choosers", "People who have very little can't be fussy about what they get."],
      ['The best-laid plans of mice and men oft go awry', 'No matter how carefully you plan, something may still go wrong.'],
      ['Better late than never', 'It is better to do something after it was supposed to be done than not to do it at all.'],
      ['Better safe than sorry', 'Be careful before you act, or you may suffer later.'],
      ['The bigger they are, the harder they fall', 'The more powerful and successful people are, the more spectacular is their downfall.'],
      ['A bird in the hand is worth two in the bush', 'What you already have is more dependable than something that you only hope to get.'],
      ["Birds of a feather flock together", 'People are attracted to others who are like themselves.'],
      ['Count your blessings', 'Be happy for the good things you have in life.'],
      ['Curiosity killed the cat', 'People should mind their own business'],
      ['Do unto others as you would have them do unto you', 'Treat other people with the same qualities that you would like to be treated.'],
      ["A dog is man's best friend", "A dog is even more faithful to its owner than human friends are."],
      ["Don't count your chickens before they hatch", "Don't assume that you'll get the things you want before you actually have them."],
      ["Don't cry over spilt milk", "It doesn't do any good to be unhappy about something that has already happened."],
      ["Don't cut off your nose to spite your face", "Don't take some action in anger that will hurt you more than it will hurt someone else."]
    ];

    _.each(pverbs, function (pverb) {
      ProverbDeck.insert({
        prverb: pverb[0],
        description: pverb[1]
      });
    });
  }
});
