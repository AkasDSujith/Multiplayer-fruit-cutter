class Fruits{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,30,30);
        this.width = 30;
        this.height= 30;
        this.image1 = loadImage("images/fruit1.png");
        this.image2 = loadImage("images/fruit2.png");
        this.image3 = loadImage("images/fruit3.png");
        this.image4 = loadImage("images/fruit4.png");
        this.image5 = loadImage("images/fruit5.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
       push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
       /* var rand = Math.round(random(1,5));
        if(rand === 1){
            image(this.image1, 0, 0, this.width, this.height);
        }
        else if(rand === 2){
            image(this.image2, 0, 0, this.width, this.height);
        }
        else if(rand === 3){
            image(this.image3, 0, 0, this.width, this.height);
        }
        else if(rand === 4){
            image(this.image4, 0, 0, this.width, this.height);
        }
        else if(rand === 5){
            image(this.image5, 0, 0, this.width, this.height);
        }*/

        image(this.image1, 0, 0, this.width, this.height);
        pop();
    }
}