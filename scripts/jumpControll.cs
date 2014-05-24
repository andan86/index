using UnityEngine;
using System.Collections;

public class jumpControll : MonoBehaviour
{
	public bool jump = false;				// Condition for whether the player should jump.
	public  KeyCode jumpKey; 

	
	private int tauntIndex;					// The index of the taunts array indicating the most recent taunt.
	private Transform groundCheck;			// A position marking where to check if the player is grounded.
	private bool grounded = false;			// Whether or not the player is grounded.

	
	
	void Update()
	{
		// The player is grounded if a linecast to the groundcheck position hits anything on the ground layer.
		grounded = Physics2D.Linecast(transform.position, groundCheck.position, 1 << LayerMask.NameToLayer("Ground"));  
		
		// If the jump button is pressed and the player is grounded then the player should jump.
		if(Input.GetKeyDown(jumpKey) && grounded)
			jump = true;
	}

}