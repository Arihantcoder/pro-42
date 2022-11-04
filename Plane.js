class Plane {
    constructor(height,width,planepos,planeAnimation,x,y)
{
    var options={
        restitution:0.8,
        friction:1.0,
        density:1.0,
        lable:"plane"

        

    }


    this.animation=planeAnimation
    this.speed=0.05
    this.body = bodies.rectangle(x,y,width,height)
    this.width=width
    this.height=height
    this.x=x
    this.y=y
    this.planePosition=planepos
    World.add(world,this.body)
}
    animate(){
        this.speed+=0.05
    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        var index = floor(this.speed % this.animation.length);
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[index], 0, this.boatPosition, this.width, this.height);
    pop();
    

    }


    
    
}
