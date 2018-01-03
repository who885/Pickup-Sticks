let game = new Phaser.Game(640, 360, Phaser.AUTO);
/*

Creator: Nicolas Delatore
Internet name: Who885 || FighterZee || Blergith



*/
var GameState =  {
    preload: function(){
        this.load.image('background', 'assets/Background.png');
        this.load.image('character', 'assets/Ball.png');
        this.load.image('food', 'assets/food.png');
    },
    

    create: function(){

      
        scoreText = scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });''
        this.background = this.game.add.sprite(0,0, 'background');
        this.food = game.add.sprite(game.world.randomX, game.world.randomY, 'food');   
        this.sprite = this.game.add.sprite(0,0, 'character');
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        // setting collision of world bounds to be true, with this the player cannot
        // leave the screen.
        this.sprite.body.collideWorldBounds= true;
    
       
       
        
        

        this.scoreText = game.add.text(32,32, 'score:  ' + score,  { fontSize: '32px', fill: '#000' });

        
        
    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    cursors = game.input.keyboard.createCursorKeys();
    },

    update: function() {
       
       
       if(checkOverLap(this.sprite, this.food)){
           score++;
           console.log(this.sprite.x, this.sprite.y);
           this.food.x = game.world.randomX - 10;
           this.food.y = game.world.randomY - 10;
           console.log(this.food.x, this.food.y);
           this.scoreText.setText('Score: ' + score);
           console.log(score);
       }









    if (upKey.isDown)
    {
       
       this.sprite.y-= speed;
    }
    else if (downKey.isDown)
    {
        
        this.sprite.y+= speed;
    }

    if (leftKey.isDown)
    {
      this.sprite.x-= speed;
    }
    else if (rightKey.isDown)
    {   
    
        this.sprite.x += speed;
        
    }
    // checks for collision
    function checkOverLap(sprite1, sprite2){
        var boundsA = sprite1.getBounds();
        var boundsB = sprite2.getBounds();
        
        return Phaser.Rectangle.intersects(boundsA, boundsB);

      
    }


    function destroySprite(sprite){
        sprite.destroy();
    }
    }
   
};

console.log(this.background);
var sprite;

var score = 0;
var scoreText;
var upKey;
var downKey;
var leftKey;
var rightKey;
var cursors;
var speed = 3;



game.state.add("GAMESTATE", GameState);

game.state.start("GAMESTATE");