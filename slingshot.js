class slingShot{
    constructor(bodyA,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.9,
            lenght:10
            
            
        }
        this.pointB=pointB
        this.body=Matter.Constraint.create(options)
        World.add(world,this.body)
        
      }

      fly (){
          this.body.bodyA=null
      }
      display(){
       if (this.body.bodyA){
        var pointA=this.body.bodyA.position
        var pointB=this.pointB
        fill ('blue')
        line (pointA.x,pointA.y,pointB.x,pointB.y)
       }
      }
}