var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var gamedisplay= require('../templates/gamedisplay.hbs');

window.selectedHero;
window.selectedVillain;

$(function(){


// console.log(selectedHero);

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

$('img').on('click', function(event){
  event.preventDefault();

  var $heroSelect = $(this);
  var heroName = $heroSelect.data('hero-name');

  // console.warn(heroName);


  window.selectedHero = _.filter(heroes, {'name': heroName})[0];

  // console.log($heroSelect);
  // console.log(heroName);
  console.log(selectedHero);

  var selectedVillain = function(){
    var randomVillain = Math.floor(Math.random()*villains.length);
    console.log(villains[randomVillain]);
    return villains[randomVillain];
  };
  selectedVillain();

});

//why is the attack not happening?
$('.fire-button').click(function(event){
  console.log(window.selectedHero);
  event.preventDefault();
  $(document).trigger('attack:villain');
  if(window.selectedHero) {
    alert('Bang!' + window.selectedVillain.attack());
    window.setTimeout(function(){
      var attack = window.selectedHero.attack();
    }, 2000);
  }

  });
});
