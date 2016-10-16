var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var gamedisplay= require('../templates/gamedisplay.hbs');

$(function(){
  var selectedHero;
  var selectedVillain;


  var heroes = [
    new models.Hero({name: 'Pistol Pete', image: "./images/PistolPete.png"}),
    new models.Hero({name: 'Sheriff Dan', image: "./images/sheriff-dan.png"}),
    new models.Hero({name: 'Red Wolf', image: "./images/red-wolf.png"})
  ];

  var villains = [
    new models.Villain({name: 'Pancho Villa', image:"./images/pancho-villa.png"}),
    new models.Villain({name: 'Jesse James', image:"./images/jesse-james.png"}),
    new models.Villain({name: 'Tombstone', image:"./images/tombstone.png"})
  ];

  var context = {
    'heroes': heroes,
  };

$('.hero-container').html(gamedisplay(context));

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
    // console.log(selectedHero);

    event.preventDefault();

    window.setTimeout(function(){
      selectedVillain.attack(selectedHero);
      // $('.hero-health').html(this.health); dont delete
      if ($('.hero-health').html !== selectedHero.health) {
        $('.hero-health').html(selectedHero.health);
      }
      console.log("hero health" +selectedHero.health);
    }, 2000);


  });
  $('.fire-button').click(function(event){
    // console.log(selectedHero);
    event.preventDefault();
    selectedHero.attack(selectedVillain);  // $('.hero-health').html(this.health); dont delete

      // if($('.villain-health').html == selectedVillain.health) {
      //     $('.villain-health').html(selectedVillain.health);
          console.log("test" + selectedVillain.health);
      //  }
      if(selectedHero.health <= 0){
        $('.message').html( "You Lose");
      }
    });

});
