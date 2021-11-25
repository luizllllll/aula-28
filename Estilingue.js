class Estilingue{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.estilingue = Constraint.create(options);
        World.add(world, this.estilingue);
    }

    fly(){
        this.estilingue.bodyA = null;
    }

    display(){
        if(this.estilingue.bodyA){
            var pointA = this.estilingue.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}