class Box{

    constructor(){
        var options = {
            restitution: 0.8
        }
    
        this.body = Bodies.rectangle(200,390,200,20,options);
        this.width= 200;
        this.height = 20;
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;


        push();

        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);

        pop();



    }
}