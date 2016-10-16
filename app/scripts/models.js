var $ = require('jquery');
var _ = require('underscore');

function Character(config) {
  config = config || {};
  this.health = 50;
  _.extend(this, config);
  // console.log(this.health);

}

//what do we pass in?
Character.prototype.attack = function(hero){
  var damage = Math.floor(Math.random()* 10);
  this.health = this.health - damage;
  $(document).trigger('health:change');
  console.log(this.health);
};

function Hero(config) {
  // this.health = 50;
  Character.call(this, config);

}
Hero.prototype = new Character();

function Villain(config) {
  // this.health = 50;
  Character.call(this, config);

}
Villain.prototype = new Character();


module.exports = {
  'Character': Character,
  'Hero': Hero,
  'Villain': Villain
};
