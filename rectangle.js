class Rectangle {
    constructor(x,y,height,width) {
      var options ={
          //isStatic:true,
          restitution: 0.4
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.height=height;
      this.width=width;
      this.x=x;
      this.y=y;
      World.add(world,this.body);
      this.visibility = 255;
    }

    score(){
      if(this.visibility<0 && this.visibility>-105){
        score++
      }
   }
  
  
    display() {
      //console.log(this.body.speed);
      if(this.body.speed< 6){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
            rectMode(CENTER);
            strokeWeight(2);
            stroke("black");
            fill("purple");
            rect(0,0,this.height,this.width);
            pop(); 
      }
      else{
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility-5;
        tint(255,this.visibility);
        pop();
      }
      
          
      }
  
  }