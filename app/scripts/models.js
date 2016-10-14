var $ = require('jquery');


function Character(config) {
  config = config || {};
  $.extend(this, config);
}
Character.prototype.attack = function(villain){
  var damage = Math.floor(Math.random()* 10);
  // this.health = this.health - damage;
  villain.health = villain.health - this.attack;
  $(document).trigger('health:change');
  console.log(damage);
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
$(document).on('attack:character', function(event){
  selectedHero.attack(selectedVillain);
});
