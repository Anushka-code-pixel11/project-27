class Roof {
    constructor(){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(200,200,70,30,options);
        World.add(world,this.body);
    }
    display(){
        strokeWeight(2);
        stroke("red");
        fill("pink");
        rectMode(CENTER);
        rect(380,160,260,20);
    }
}
