 class ObstacleManager {
    constructor(scene, textures) {
        /*
         * Obstacle Group: activeObstacleGroup
         * Currently active, moving obstacle(s)
        */
        this.activeObstacleGroup = scene.physics.add.group({
            immovable: true,
            allowGravity: false,
        });
        // Add collisions for obstalces and player
        scene.physics.add.overlap(scene.runner, this.activeObstacleGroup, this.handleCollision, null, this);
        this.hurtSfx = scene.sound.add('hurt',{volume: 0.75});
        
        this.scene = scene;
        this.textures = textures;
    }

    update(speedMod) {
        this.activeObstacleGroup.getChildren().forEach(obstacle => {
            obstacle.setVelocityX(game.settings.obstacleBaseSpeed*-1 * speedMod)
        });
        this.cleanOffscreen()        
    }

    addObstacle() {
        let obstacle;
        if(Phaser.Math.Between(0,1)) {
            // Change the spawn position of the vine here
            let spawnY = 30;
            obstacle = this.activeObstacleGroup.create(game.config.width, spawnY, this.textures[1]).setOrigin(0);
            obstacle.canSlide = true;
        } else {
            obstacle = this.activeObstacleGroup.create(game.config.width, game.config.height - groundSize, this.textures[0]).setOrigin(1);
        }
    }
    

    handleCollision(runner, obstacle){
        //console.log(obstacle.canSlide)
        if( (!runner.isSliding && obstacle.canSlide) || !obstacle.canSlide){
            this.hurtSfx.play();
            runner.pushBack(this.scene.speedMod)
            this.activeObstacleGroup.killAndHide(obstacle);
            this.activeObstacleGroup.remove(obstacle);
        }
    }

    cleanOffscreen() {
        let front = this.activeObstacleGroup.getFirstAlive()
        if(front && front.x + front.width < 0) {
          this.activeObstacleGroup.killAndHide(front);
          this.activeObstacleGroup.remove(front);
        }
    }
}
