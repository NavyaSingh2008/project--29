class Box{
    constructor(x,y,width,height){
        var options={
            'restitution':0.8,
            'friction':1,
            'density':1
        }
        display(){

            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
          pop();
          }
    }
}




