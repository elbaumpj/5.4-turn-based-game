var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var gamedisplay= require('../templates/gamedisplay.hbs');

$(function(){

var selectedHero;

var heroes = [
  new models.Hero({name: 'Pistol Pete', image: 'https://unsplash.it/100/100'}),
  new models.Hero({name: 'Sheriff Dan', image: "https://unsplash.it/100/100"}),
  new models.Hero({name: 'Red Wolf', image: "https://unsplash.it/100/100"})
];

var villains = [
  new models.Villain({name: 'Pancho Villa', image:"https://unsplash.it/100/100"}),
  new models.Villain({name: 'Jesse James', image:"https://unsplash.it/100/100"}),
  new models.Villain({name: 'Tombstone', image:"https://unsplash.it/100/100"})
];

var context = {
  'heroes': heroes,
};

var context2 = {
  'villains': villains
};

$('.hero-container').html(gamedisplay(context));
$('.villain-container').html(gamedisplay(context2));

$('.hero-container').on('click', function(event){
  event.preventDefault();

  var $heroSelect = $(this);
  var heroName = $heroSelect.data('hero-name');
  selectedHero = _.filter(heroes, {'hero-name': heroName})[0];

  console.log($heroSelect);
  console.log(heroName);


});

$('.fire-button').click(function(event){
  event.preventDefault();
  $(document).trigger('attack:villain');

  if(selectedHero) {
    alert('Bang!' + selectedHero.attck());


    window.setTimeout(function(){
      var attack = selectedHero.attack();
    }, 2000);

  }

  });


});
