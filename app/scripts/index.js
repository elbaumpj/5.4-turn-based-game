var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var gamedisplay= require('../templates/gamedisplay.hbs');

$(function(){
  var selectedHero;
  var selectedVillain;

  var heroes = [
    new models.Hero({name: 'Pistol Pete', image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTfWIGt7Hy6rC67yefLP1lFfdPcGD0M5TPDQWJuzZaXLw1NAH5H"}),
    new models.Hero({name: 'Sheriff Dan', image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQWEIA2MSMCzVYUrVgkna7WPb9HSBYdUPaZbWVxqV6xNUemq6-u"}),
    new models.Hero({name: 'Red Wolf', image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ1BCKxEECzQZ0hSq-BXOlPcHMSymb-v9AQzyurDDSGwPsb2ikjoQ"})
  ];

  var villains = [
    new models.Villain({name: 'Pancho Villa', image:"https://unsplash.it/50/50"}),
    new models.Villain({name: 'Jesse James', image:"https://unsplash.it/50/50"}),
    new models.Villain({name: 'Tombstone', image:"https://unsplash.it/50/50"})
  ];

  var context = {
    'heroes': heroes,
  };

  // var context2 = {
  //   'villains': villains
  // };


$('.hero-container').html(gamedisplay(context));
// $('.villain-container').html(gamedisplay(context2));


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

    $(this).parents().siblings('.hero-info').hide();
  

    //Villain selection and html attributes
    selectedVillain = villains[randomVillain];
    $('.villain-name').html(selectedVillain.name);
    $('#villain-pic').attr("src", selectedVillain.image);
    console.log(selectedVillain.image);

    console.log(selectedHero);
    console.log(selectedVillain);
  });


  $('.fire-button').click(function(event){
    console.log(selectedHero);
    event.preventDefault();


    selectedHero.attack(selectedVillain);
    $('.villain-health').html(selectedVillain.health);

    window.setTimeout(function(){
      selectedVillain.attack(selectedHero);
      $('.hero-health').html(selectedHero.health);
      console.log(selectedVillain);
      console.log(selectedVillain.health);
    }, 2000);


  });



});
