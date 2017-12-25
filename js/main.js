let game = new Phaser.Game(640, 360, Phaser.AUTO);

var GameState =  {
    preload: function(){
        this.load.image('background', 'assets/Background.png');
        this.load.image('character', 'assets/Ball.png');
        this.load.image('food', 'assets/food.png');
    },
    

    create: function(){
        scoreText = scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });''
        this.background = this.game.add.sprite(0,0, 'background');
        this.food = this.game.add.sprite(50,50,'food');
        this.sprite = this.game.add.sprite(0,0, 'character');
        this.scoreText = game.add.text(32,32, 'score:  ' + score,  { fontSize: '32px', fill: '#000' })
       ;
        
        
    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    },

    update: function() {
        
        
       if(checkOverLap(this.sprite, this.food)){
           score++;
           this.scoreText.setText('Score: ' + score);
           console.log(score);
       }
    if (upKey.isDown)
    {
       this.sprite.y--;
    }
    else if (downKey.isDown)
    {
        this.sprite.y++;
    }

    if (leftKey.isDown)
    {
      this.sprite.x--;
    }
    else if (rightKey.isDown)
    {
        this.sprite.x++;
    }

    function checkOverLap(sprite1, sprite2){
        var boundsA = sprite1.getBounds();
        var boundsB = sprite2.getBounds();
        
        return Phaser.Rectangle.intersects(boundsA, boundsB);
    }
    }
};


var sprite;
var score = 0;
var scoreText;
var upKey;
var downKey;
var leftKey;
var rightKey;

game.state.add("GAMESTATE", GameState);

game.state.start("GAMESTATE");