class Boat{
    constructor(x,y,width,height,boatPos){
        var options={
            restitution : 0.8,
            friction:1,
            density:1
        }

        this.width = width;
        this.height = height;
        this.boatPos = boatPos;

        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        this.image = loadImage("assets/boat.png");

        World.add(world, this.body);

    }


    display(){
       
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, this.boatPos, this.width, this.height);
        pop();
        
        
    }

}