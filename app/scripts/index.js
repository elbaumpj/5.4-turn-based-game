var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var listTemplate = require('../templates/listTemplate.hbs');

$(function(){

var selectedHero;

var heroes = [
  new.models.Hero({name: 'Pistol Pete', image:}),
  new.models.Hero({name: 'Sheriff Dan', image:}),
  new.models.Hero({name: 'Red Wolf', image:})
];

var villains = [
  new.models.Villain({name: 'Pancho Villa', image:}),
  new.models.Villain({name: 'Jesse James', image:}),
  new.models.Villain({name: 'Tombstone', image:s})
];

var context = {
  'heroes': heroes,
  'villains': villains
}

$('game-display').on('click', function(event){
  event.preventDefault();

  var $heroSelect = $(this);
  var heroName = $heroSelect.data('hero-name');
  selectedHero = _.filter(heroes, {'name': heroName})[0];

  console.log(selectedHero);

});

$('.fire-button').click(function(event){
  event.preventDefault();

  if(selectedHero) {
    alert('Bang!' + selectedHero.attck());


    window.setTimeout(function(){
      var attack = selectedHero.attack();
    }, 2000);

  }

  });


});
