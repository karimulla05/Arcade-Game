// Enemies our player must avoid
var Enemy = function(x,y,speed) {
  this.x=x;
  this.y=y;
  this.speed=speed;
  this.sprite = 'images/star.png';
};
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
var Player = function(x,y){
   this.x=x;
   this.y=y;
  this.sprite = 'images/char-princess-girl.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x=this.x+this.speed*dt;
    if(this.x>=505){
      this.x=0;
    }

    if(player.x<this.x+60 && player.x+60>this.x && player.y<this.y+60 && player.y+60>this.y){

        player.x=200;
        player.y=400;

      }

};
 Player.prototype.update = function(dt){

 };

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Draw the Player on the screen, required method for game
Player.prototype.render = function(){
   ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(position){
  if(position=="left" && this.x>0){
    this.x-=101;
    console.log(this.x);
  }

  else if (position=="right" && this.x<=400) {
    this.x+=101;
    console.log(this.x);
  }
  else if (position=="up" && this.y>60) {
    this.y-=80;
    console.log(this.y);
  }
  else if(position=="down" && this.y<=350){
    this.y+=80;
    console.log(this.y);
  }
  if(this.y<10){
    setTimeout(()=>{
      this.x=200;
      this.y=400;
    },500)
  }
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

 var allEnemies=[]; //This is a an empty array for all Enemy position
  var p=0,q=61;
  var player = new Player(200,400); // object of the Player
   for(var i=0;i<3;i++){
  allEnemies[i] = new Enemy(p,q,Math.floor(Math.random()*700));
  q+=85;
}



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
