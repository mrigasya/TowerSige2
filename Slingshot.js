class Sling {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.pointB= pointB;
        this.slingClass = Constraint.create(options);
        World.add(world, this.slingClass);
    }
        fly(){
            this.slingClass.bodyA=null
        }

    display(){
        if(this.slingClass.bodyA){
        var pointA = this.slingClass.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);}
        
    }
    
}