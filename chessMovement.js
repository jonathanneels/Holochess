	
		knightMovements=function(activePlayer)
						{
							
								 				 movementKnightJumpRightUp(activePlayer ,true,true,false);
			 				 movementKnightJumpRightDown(activePlayer ,true,true,false);
			 				 movementKnightJumpLeftDown(activePlayer ,true,true,false);
			 				 movementKnightJumpLeftUp(activePlayer ,true,true,false);
							 
							   movementKnightJumpRightUpBackwards(activePlayer ,true,true,false);
			 				 movementKnightJumpRightDownBackwards(activePlayer ,true,true,false);
			 				 movementKnightJumpLeftDownBackwards(activePlayer ,true,true,false);
			 				 movementKnightJumpLeftUpBackwards(activePlayer ,true,true,false);


								 				 movementKnightJumpRightUpXaxis(activePlayer ,true,true,false);
			 				 movementKnightJumpRightDownXaxis(activePlayer ,true,true,false);
			 				 movementKnightJumpLeftDownXaxis(activePlayer ,true,true,false);
			 				 movementKnightJumpLeftUpXaxis(activePlayer ,true,true,false);
							 
							   movementKnightJumpRightUpBackwardsXaxis(activePlayer ,true,true,false);
			 				 movementKnightJumpRightDownBackwardsXaxis(activePlayer ,true,true,false);
			 				 movementKnightJumpLeftDownBackwardsXaxis(activePlayer ,true,true,false);
			 				 movementKnightJumpLeftUpBackwardsXaxis(activePlayer ,true,true,false);
							
						}
	allNormalDirectionMovements=function(activePlayer)  
	{
		
					  	 
					movementRightPawnUpwards3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
					movementLeftPawnUpwards3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
					movementRightPawnDownwards3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
					movementLeftPawnDownwards3D(activePlayer,activePlayer.MovementRange+1,false, false,false);

					  				 movementUpPawn3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
					  				  movementDownPawnBackwards3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
					  				
									movementDownPawn3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
					  				 movementUpPawnBackwards3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
									 
									 movementStraightUpPawn3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
									 movementStraightDownPawn3D(activePlayer,activePlayer.MovementRange+1,false, false,false);


					movementRightPawnUpwards3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
					movementLeftPawnUpwards3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
					movementRightPawnDownwards3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
					movementLeftPawnDownwards3D(activePlayer,activePlayer.DamageRange+1,true, false,false);

					  				 movementUpPawn3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
					  				  movementDownPawnBackwards3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
					  				
									movementDownPawn3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
					  				 movementUpPawnBackwards3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
									 
									 movementStraightUpPawn3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
									 movementStraightDownPawn3D(activePlayer,activePlayer.DamageRange+1,true, false,false);



var digMovementRange= activePlayer.MovementRange;
var digDamageRange= activePlayer.DamageRange

if(activePlayer.ObjectGameName=="Queen"){
  digMovementRange= 5;
  digDamageRange= 5;// more is not req. diagonally in this setting.


}

 movementLeftUpPawn3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
									 movementRightUpPawn3D(activePlayer,digMovementRange+1,false, false,false);
				 									 movementLeftDownPawn3D(activePlayer,digMovementRange+1,false, false,false);
				 									 movementRightDownPawn3D(activePlayer,digMovementRange+1,false, false,false); 
													 
													 
									  movementLeftUpPawnBackwards3D (activePlayer,digMovementRange+1,false, false,false);
									 movementRightUpPawnBackwards3D(activePlayer,digMovementRange+1,false, false,false);
				 									 movementLeftDownPawnBackwards3D(activePlayer,digMovementRange+1,false, false,false);
				 									 movementRightDownPawnBackwards3D(activePlayer,digMovementRange+1,false, false,false); 


									 movementLeftUpPawn3D(activePlayer,digDamageRange+1,true, false,false);
									 movementRightUpPawn3D(activePlayer,digDamageRange+1,true, false,false);
				 									 movementLeftDownPawn3D(activePlayer,digDamageRange+1,true, false,false);
				 									 movementRightDownPawn3D(activePlayer,digDamageRange+1,true, false,false); 
													 
													 
									  movementLeftUpPawnBackwards3D (activePlayer,digDamageRange+1,true, false,false);
									 movementRightUpPawnBackwards3D(activePlayer,digDamageRange+1,true, false,false);
				 									 movementLeftDownPawnBackwards3D(activePlayer,digDamageRange+1,true, false,false);
				 									 movementRightDownPawnBackwards3D(activePlayer,digDamageRange+1,true, false,false); 
		
	}
	PawnMovements=function(activePlayer)
						{
					if(Who ==0){
					  				 movementDownPawn3D(activePlayer,activePlayer.DamageRange+1,false, true, false);
									 movementLeftUpPawn3D(activePlayer,activePlayer.DamageRange+1,true, true, false);
									 movementRightUpPawn3D(activePlayer,activePlayer.DamageRange+1,true, true, false);
									 }
									 else if (Who==1){
 				 movementUpPawn3D(activePlayer,activePlayer.DamageRange+1,false, true, false);
				 									 movementLeftDownPawn3D(activePlayer,activePlayer.DamageRange+1,true, true, false);
				 									 movementRightDownPawn3D(activePlayer,activePlayer.DamageRange+1,true, true, false); 

						}
	}
	bishopMovements=function(activePlayer)
						{
						
									 movementLeftUpPawn3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
									 movementRightUpPawn3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
				 									 movementLeftDownPawn3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
				 									 movementRightDownPawn3D(activePlayer,activePlayer.MovementRange+1,false, false,false); 
													 
													 
									  movementLeftUpPawnBackwards3D (activePlayer,activePlayer.MovementRange+1,false, false,false);
									 movementRightUpPawnBackwards3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
				 									 movementLeftDownPawnBackwards3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
				 									 movementRightDownPawnBackwards3D(activePlayer,activePlayer.MovementRange+1,false, false,false); 


									 movementLeftUpPawn3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
									 movementRightUpPawn3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
				 									 movementLeftDownPawn3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
				 									 movementRightDownPawn3D(activePlayer,activePlayer.DamageRange+1,true, false,false); 
													 
													 
									  movementLeftUpPawnBackwards3D (activePlayer,activePlayer.DamageRange+1,true, false,false);
									 movementRightUpPawnBackwards3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
				 									 movementLeftDownPawnBackwards3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
				 									 movementRightDownPawnBackwards3D(activePlayer,activePlayer.DamageRange+1,true, false,false); 

						}
			 			rookMovements=function(activePlayer)
						{
							movementRightPawnUpwards3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
					movementLeftPawnUpwards3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
					movementRightPawnDownwards3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
					movementLeftPawnDownwards3D(activePlayer,activePlayer.MovementRange+1,false, false,false);

					  				 movementUpPawn3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
					  				  movementDownPawnBackwards3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
					  				
									movementDownPawn3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
					  				 movementUpPawnBackwards3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
									 
									 movementStraightUpPawn3D(activePlayer,activePlayer.MovementRange+1,false, false,false);
									 movementStraightDownPawn3D(activePlayer,activePlayer.MovementRange+1,false, false,false);


					movementRightPawnUpwards3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
					movementLeftPawnUpwards3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
					movementRightPawnDownwards3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
					movementLeftPawnDownwards3D(activePlayer,activePlayer.DamageRange+1,true, false,false);

					  				 movementUpPawn3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
					  				  movementDownPawnBackwards3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
					  				
									movementDownPawn3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
					  				 movementUpPawnBackwards3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
									 
									 movementStraightUpPawn3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
									 movementStraightDownPawn3D(activePlayer,activePlayer.DamageRange+1,true, false,false);
						}
