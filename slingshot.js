 
 class Slingshot {

constructor(bodyA,pointB)
 {
    var options = {
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    length:10,
}
this.sling = Constraint.create(options);
this.pointB=pointB;
World.add(world,this.sling);
 }

 flY(){
 this.sling.bodyA=null;    
 }
 


show () 
{
    if(this.sling.bodyA){
    var posA = this.sling.bodyA.position;
    var posB =this.pointB;
    push();
strokeWeight(1.5); 
 fill("black");
 stroke(255);
line(posA.x,  posA.y,   posB.x, posB.y);
pop ();
}
}
 }