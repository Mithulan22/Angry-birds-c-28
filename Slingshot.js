class Slingshot {
constructor(bodyX, pointY){
var options = {
bodyA:bodyX, 
pointB:pointY,
stiffness:0.04, 
length:10

}
    this.ss = Constraint.create(options)
    this.pointB = pointY
    World.add(world,this.ss)
}
display(){
if(this.ss.bodyA){
    var pointA = this.ss.bodyA.position
var pointB = this.pointB 
line(pointA.x ,pointA.y, pointB.x, pointB.y)
strokeWeight(5)
}
}
 fly(){
this.ss.bodyA = null

    
}
}
