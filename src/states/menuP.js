var puntos1;
var puntos2;

class menuP extends Phaser.Scene {
    constructor() {
        super("menuPScene");
    }

    preload() {
        //fondo
        this.load.image('menu', 'assets/Menu_inicio.png');

    }

    create() {

        //Fondo
        var fondo = this.add.image(1600, 900, 'menu')
        fondo.setScale(1.67);
        fondo.depth = -2;

        cursors = this.input.keyboard.createCursorKeys();

        /*this.input.on('pointerdown', function (pointer) {

            if((pointer.x>1381 && pointer.x<1848)&&(pointer.y>913 && pointer.y<1058)){
                this.scene.start('juegoScene');
            }

            if((pointer.x>1144 && pointer.x<2050)&&(pointer.y>1140 && pointer.y<1288)){
                this.scene.start('controlesScene');
            }

            if((pointer.x>1280 && pointer.x<1940)&&(pointer.y>1347 && pointer.y<1475)){
                this.scene.start('creditosScene');
            }

    
        }, this);*/

        this.jugar=this.add.text(1350,770,"Jugar",{fill: '#000000', font: '200px Arial'}).setInteractive().on('pointerdown',()=>this.scene.start('juegoScene'));
        this.comoJugar=this.add.text(1100,970,"Como jugar",{fill: '#000000', font: '200px Arial'}).setInteractive().on('pointerdown',()=>this.scene.start('controlesScene'));
        this.creditos=this.add.text(1170,1200,"Creditos",{fill: '#000000', font: '200px Arial'}).setInteractive().on('pointerdown',()=>this.scene.start('creditosScene'));
        
        this.jugar.on('pointerout',()=>this.fueraJ());
        this.jugar.on('pointerover',()=>this.dentroJ());
        this.comoJugar.on('pointerout',()=>this.fueraCJ());
        this.comoJugar.on('pointerover',()=>this.dentroCJ());
        this.creditos.on('pointerout',()=>this.fueraC());
        this.creditos.on('pointerover',()=>this.dentroC());

        puntos1 = 0;
        puntos2 = 0;
        
    }

    update() {
        

    }

    fueraJ(){
        this.jugar.setStyle({ fill: '#000000' });
    }

    dentroJ(){
        this.jugar.setStyle({ fill: '#FFFFFF'});
    }

    fueraCJ(){
        this.comoJugar.setStyle({ fill: '#000000' });
    }

    dentroCJ(){
        this.comoJugar.setStyle({ fill: '#FFFFFF'});
    }

    fueraC(){
        this.creditos.setStyle({ fill: '#000000' });
    }

    dentroC(){
        this.creditos.setStyle({ fill: '#FFFFFF'});
    }
}