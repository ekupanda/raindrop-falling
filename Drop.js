class Drop{
    constructor(){
        var randX = Math.round(random(0, 1000));
        var randY = Math.round(random(0, 100));

        this.body = Bodies.rectangle(randX, randY, 5, 10);

        this.width = 2;
        this.height = 10;

        if(this.body.position.y < 1000){
            this.body.position.y = 0;
        }

        World.add(world, this.body);
        
    }

    display(){
        var pos = this.body.position;
        fill("cyan");
        push();
        translate(pos.x, pos.y);
        pop();
        rect(pos.x, pos.y, this.width, this.height);
    }

}