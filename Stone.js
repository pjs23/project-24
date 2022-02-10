class Stone{
	constructor(x,y)
	{
	
	  var options= {
		  'restitution':0.8,
		  'friction':0.9,
		  'density':12
	  }
		this.x=x;
		this.y=y;
		
		this.body=Bodies.rect(x, y, width,height, options)
		World.add(world, this.body);

	}
	display()
	{
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			
           rect(0,0,this.width,this.height);
			pop()
	}

}