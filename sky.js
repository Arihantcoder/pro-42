class sky{
     constructor(x,y,h,w){

        let options={
            isStatic:true 
        }

        this.body=Bodies.rectangle(x,y,w,h)
        this.w=w;
        this.h=h
        World.add(world,this.body)
    }
        show(){

            this.pos=this.body.position 
            push ()
            rectMode(CENTER)
            noStroke()
            fill(148,127,146)
            rect(pos.x,pos.y,this.w,this.h)
            pop ()

        }


     }





