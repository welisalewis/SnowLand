var game = new Phaser.Game(window.innerWidth,window.innerHeight,Phaser.AUTO,'',{preload:preload,create:create,update:update});

/*var gameState0=function(){
    console.log("gameState0");
};
gameState0.prototype = {
    preload : preload0,
    create : create0,
    update : update0
};


var gameState1 = function(){
    console.log("gameState1");
};
gameState1.prototype = {
    preload : preload,
    create : create,
    update : update
};



game.state.add('gameState0',gameState0);
game.state.add('gameState1',gameState1);
game.state.start('gameState0');


function preload0(){
	 game.load.image('button', 'assets/plpay.png',game.world.width/2,game.world.height/2);
}

var button;
function create0{
	 button = game.add.button(game.world.width/4, game.world.height/4, 'button', actionOnClick, this, 2, 1, 0);
    button.input.useHandCursor = true;
}

function actionOnClick(){
       game.state.start('gameState1');
}


function update0(){

}*/









function preload(){
	game.load.image ('background' , 'assets/back.png');
	game.load.spritesheet('sm','assets/download.png',32,48);

}

function create(){
    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.sprite(0,0,'background');
    var player = game.add.image(32,48,'sm');

    player.scale.setTo(2,2);
}

function update(){

}