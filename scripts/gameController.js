#pragma strict

var birdForce : int;
var player : GameObject;
var pipes : GameObject;

var jumpKey : KeyCode;

private var scoreCount : int = 0;

private var birdIsDead : boolean = false;


function Update () {
	if(Input.GetKeyDown(jumpKey) && birdIsDead == false)
	{
		player.rigidbody2D.velocity.y = 1;	
		player.rigidbody2D.AddForce(Vector2(0,birdForce));
	}
	
}