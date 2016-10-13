var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var gamedisplay= require('../templates/gamedisplay.hbs');

$(function(){
  var selectedHero;
  var selectedVillain;

  var heroes = [
    new models.Hero({name: 'Pistol Pete', image: "#"}),
    new models.Hero({name: 'Sheriff Dan', image: "#"}),
    new models.Hero({name: 'Red Wolf', image: "#"})
  ];

  var villains = [
    new models.Villain({name: 'Pancho Villa', image:"#"}),
    new models.Villain({name: 'Jesse James', image:"#"}),
    new models.Villain({name: 'Tombstone', image:"#"})
  ];

  var context = {
    'heroes': heroes,
  };

  var context2 = {
    'villains': villains
  };


$('.hero-container').html(gamedisplay(context));
$('.villain-container').html(gamedisplay(context2));


// Event Handlers
$(document).on('hero:selected', function (event, hero) {
  selectedHero = hero;
});

$(document).on('villain:selected', function(event, villain){
  selectedVillain = villain;
});


// $(document).on('attack:villain', function(event){
//   var damage = Math.floor(Math.random()* 10);
//   // this.health = this.health - damage;
//   selectedVillain.health = selectedVillain.health - damage;
//
//   $(document).trigger('health:change');
//
//   console.log(selectedHero);
//   selectedHero.attack(selectedVillain);
// });



  $('img').on('click', function(event){
    event.preventDefault();

    var $heroSelect = $(this);
    var heroName = $heroSelect.data('hero-name');
    var randomVillain = Math.floor(Math.random()*villains.length);

    selectedHero = _.filter(heroes, {'name': heroName})[0];
    selectedVillain = villains[randomVillain];

    console.log(selectedHero);
    console.log(selectedVillain);
  });

//why is the attack not happening?
  $('.fire-button').click(function(event){
    console.log(selectedHero);
    event.preventDefault();

    selectedHero.attack(selectedVillain);

    window.setTimeout(function(){
      selectedVillain.attack(selectedHero);
    }, 2000);


  });
});
