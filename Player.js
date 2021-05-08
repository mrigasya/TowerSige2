class polygonClass {
    constructor(x,y,radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
        this.polygonClass = Bodies.circle(x,y,radius,options);
        this.radius= radius;
        this.image = loadImage("polygon.png");
        World.add(world,this.polygonClass);
    }

    display(){
        
        imageMode(CENTER);
        image(this.image ,this.polygonClass.position.x,this.polygonClass.position.y,this.radius,this.radius);
       
    }
}