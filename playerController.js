#pragma strict

private var direction : int = 0;

var birdForce : int;
var player : GameObject;

var jumpKey : KeyCode;


var playerSpeed : double;
var leftButton : GUITexture;
var upButton : GUITexture;
var downButton : GUITexture;
var rightButton : GUITexture;

function Start () {

}

function Update () {

	// Skapa ny groda när man trycker på i


	// Håll koll på vilket håll player rör sig
	direction = 0;
	
	 if(Input.GetKeyDown(jumpKey))
	 
	{
		player.rigidbody2D.velocity.y = 1;	
		player.rigidbody2D.AddForce(Vector2(0,birdForce));
	}
	
	if(Input.GetKey("a"))
	{
		direction = 4;
	}
	if(Input.GetKey("d"))
	{
		direction = 2;
	}


		
	/*if(Input.touchCount > 0)
	{
		if(Input.GetTouch(0).phase == TouchPhase.Stationary)
		{
			if(leftButton.HitTest(Input.GetTouch(0).position))
			{
				print("iGoLeft");//direction = 4;
			}
			
			if(upButton.HitTest(Input.GetTouch(1).position))
			{
				direction = 1;
			}
			if(downButton.HitTest(Input.GetTouch(2).position))
			{
				direction = 3;
			}
			if(rightButton.HitTest(Input.GetTouch(3).position))
			{
				direction = 2;
			}
		}
	}
	
	
	if(Input.touchCount > 0)
	{
		if(Input.GetTouch(0).phase == TouchPhase.Stationary)
		{
			if(leftButton.HitTest(Input.GetTouch(0).position))
			{
				transform.position.y = transform.position.y + (playerSpeed * Time.deltaTime);
			}
		}
	}*/

	
	// Sätt direction i animator
	//gameObject.GetComponent(Animator).SetInteger("direction", direction);
	
	// Flytta player beroende på vilket håll den är på väg
	switch(direction)
	{
		case(1):
			transform.position.y = transform.position.y + 1 * Time.deltaTime;
			break;
		case(2):
			transform.position.x = transform.position.x + 1 * Time.deltaTime;
			break;
		case(3):
			transform.position.y = transform.position.y - 1 * Time.deltaTime;
			break;
		case(4):
			transform.position.x = transform.position.x - 1 * Time.deltaTime;
			break;
	}
	
}