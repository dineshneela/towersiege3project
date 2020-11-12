class Box1 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
      console.log(this.body.speed)
      if(this.body.speed<3){
        super.display()
      }
      else{
        World.remove(world,this.body)
        push();
        this.visiblity=this.visiblity-5;
        tint(255,this.visiblity);
        pop();
      }
    }
    Score(){
      if(this.visiblity<0&&this.visiblity>=1005){
        score++;
      }
    }
  }