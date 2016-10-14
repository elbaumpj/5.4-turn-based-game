var $ = require('jquery');


function Character(config) {
  config = config || {};
  $.extend(this, config);
}
var selectedHero;
 var selectedVillain;

//what do we pass in?
Character.prototype.attack = function(hero){
  var damage = Math.floor(Math.random()* 10);
  // this.health = this.health - damage;
  Villain.health = Villain.health - this.attack;
  $(document).trigger('health:change');
  console.log(damage);
  console.log(Villain.health);
};

function Hero(config) {
  this.health = 100;
  Character.call(this, config);
}
Hero.prototype = new Character();

function Villain(config) {
  this.health = 90;
  Character.call(this, config);
}
Villain.prototype = new Character();

module.exports = {
  'Character': Character,
  'Hero': Hero,
  'Villain': Villain
};

$(document).on('hero:selected', function (event, hero) {
  selectedHero = hero;
});
$(document).on('villain:selected', function(event, villain){
  selectedVillain = villain;
});
$(document).on('attack:villain', function(event){
  console.log(window.selectedHero);
  window.selectedHero.attack(selectedVillain);
});
