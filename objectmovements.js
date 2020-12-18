
			var isJumpOverObjectCheck= function(damage)
			{
			var isObjPresent=false;
 						
			scene.meshes.forEach(function(g) {
  												  if(g != damage && g.name.indexOf("InteractionObj") >-1  ){
							   if (Math.floor(g.position.y )== Math.floor(damage.position.y) &&g.position.x == damage.position.x && g.position.z == damage.position.z &&  g.position != activePlayer.position)
 											{ 
							isObjPresent=true; return false;
											  }
											  }
											  });
 				 
				
				return isObjPresent;
			}
				var isJumpOverBlockCheck= function(damage)
			{
			var isObjPresent=false;
 						
			scene.meshes.forEach(function(g) {
  												  if( g.name.indexOf("SphereBlockObj") >-1  ){
													  
 							   if (Math.floor(g.position.y )== Math.floor(damage.position.y) && g.position.x == damage.position.x && g.position.z == damage.position.z &&  g.position != activePlayer.position)
 											{ 
							isObjPresent=true; return false;
											  }
											  }
											  });
 				 
				
				return isObjPresent;
			}		
		 
			

			var movementRight= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles) //position p1
			{
																for (var f = 0; f < groundLevels; f++) {

				for (var i = 0; i < steps; i++) {
				if( f > steps){continue;}// old:  if( f > i){continue;}
				var damage= positionObj(object.position.x+i,0.5-f,object.position.z );
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				
				damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
				
 if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}

			if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();}break;
 											  
				}
			}}}}
				var movementLeft= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
													for (var f = 0; f < groundLevels; f++) {

				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				 var damage=positionObj(object.position.x-i,0.5-f,object.position.z );
				 if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				
				 				damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
								
 if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}
			
			 if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();}break;
 											  
				}
			}}}}
				var movementUp= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
										for (var f = 0; f < groundLevels; f++) {

				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x,0.5-f,object.position.z+i );
				 
if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.

 if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);

damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}

			if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();}break;
 											  
				}
			}}}
			}
				var movementDown= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
							for (var f = 0; f < groundLevels; f++) {

				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x,0.5-f,object.position.z-i );
				
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.

if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}
			
			if(!isCanJumpOverObjects){ 
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();}break;
				break;}
 											  
				}
			}
			 
			}
			}
			
			
				var movementLeftDown= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x-i,0.5-f,object.position.z-i );
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}
			
				if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();} break;
 											  
				}
			} }
			
			}}
			
				var movementRightDown= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x+i,0.5-f,object.position.z-i );
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
				 
if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}
			
				if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();} break;
 											  
				}
			} 
			}
			}}
			
			var movementRightUp= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
				for (var f = 0; f < groundLevels; f++) {
				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x+i,0.5-f,object.position.z+i );
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
				 
if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}

				if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();} break;
 											  
				}
			} }
			
			}}
			
				var movementLeftUp= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x-i,0.5-f,object.position.z+i ); 
				
				  if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
				 
				if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}

				if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();} break;
 											  
				}
			}
			} } 
			
			}
			
			
			
				var movementUpPawn3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
										for (var f = 0; f < groundLevels; f++) {

				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x,object.position.y +   f ,object.position.z-i ); 
				 
if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.

 if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);

damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}

			if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();}break;
 											  
				}
			}}}
			}
				var movementUpPawnBackwards3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
										for (var f = 0; f < groundLevels; f++) {

				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x,object.position.y +   f ,object.position.z+i ); 
				 
if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.

 if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);

damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}

			if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();}break;
 											  
				}
			}}}
			}
			
				var movementStraightDownPawn3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
							for (var f = 0; f < groundLevels; f++) {

				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x,object.position.y -   f ,object.position.z  );
				
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.

if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}
			
			if(!isCanJumpOverObjects){ 
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();}break;
				break;}
 											  
				}
			}
			 
			}
			}
						var movementStraightUpPawn3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
							for (var f = 0; f < groundLevels; f++) {

				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x,object.position.y +   f ,object.position.z  );
				
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.

if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}
			
			if(!isCanJumpOverObjects){ 
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();}break;
				break;}
 											  
				}
			}
			 
			}
			}
			
			
				var movementDownPawn3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
							for (var f = 0; f < groundLevels; f++) {

				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x,object.position.y -   f ,object.position.z+i );
				
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.

if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}
			
			if(!isCanJumpOverObjects){ 
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();}break;
				break;}
 											  
				}
			}
			 
			}
			}
			var movementDownPawnBackwards3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
							for (var f = 0; f < groundLevels; f++) {

				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x,object.position.y -   f ,object.position.z-i );
				
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.

if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}
			
			if(!isCanJumpOverObjects){ 
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();}break;
				break;}
 											  
				}
			}
			 
			}
			}
			
			
			var movementRightPawnUpwards3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles) //position p1
			{
																for (var f = 0; f < groundLevels; f++) {

				for (var i = 0; i < steps; i++) {
				if( f > steps){continue;}// old:  if( f > i){continue;}
				var damage= positionObj(object.position.x+i,object.position.y +   f,object.position.z );
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				
				damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
				
 if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}

			if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();}break;
 											  
				}
			}}}}
				var movementLeftPawnUpwards3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
													for (var f = 0; f < groundLevels; f++) {

				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				 var damage=positionObj(object.position.x-i,object.position.y +   f,object.position.z );
				 if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				
				 				damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
								
 if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}
			
			 if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();}break;
 											  
				}
			}}}}

			
				var movementRightPawnDownwards3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles) //position p1
			{
																for (var f = 0; f < groundLevels; f++) {

				for (var i = 0; i < steps; i++) {
				if( f > steps){continue;}// old:  if( f > i){continue;}
				var damage= positionObj(object.position.x+i,object.position.y -   f,object.position.z );
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				
				damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
				
 if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}

			if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();}break;
 											  
				}
			}}}}
				var movementLeftPawnDownwards3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
													for (var f = 0; f < groundLevels; f++) {

				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				 var damage=positionObj(object.position.x-i,object.position.y -   f,object.position.z );
				 if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				
				 				damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
								
 if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}
			
			 if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();}break;
 											  
				}
			}}}}
	var movementLeftDownPawn3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x-i,object.position.y +   f,object.position.z-i );
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}
			
				if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();} break;
 											  
				}
			} }
			
			}}
			
				var movementRightDownPawn3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x+i,object.position.y +   f,object.position.z-i );
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
				 
if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}
			
				if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();} break;
 											  
				}
			} 
			}
			}}
			
			var movementRightUpPawn3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
				for (var f = 0; f < groundLevels; f++) {
				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x+i,object.position.y -   f,object.position.z+i );
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
				 
if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}

				if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();} break;
 											  
				}
			} }
			
			}}
			
				var movementLeftUpPawn3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x-i,object.position.y -   f,object.position.z+i ); 
				
				  if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
				 
				if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}

				if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();} break;
 											  
				}
			}
			} } 
			
			}
			 
			
			var movementLeftDownPawnBackwards3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x-i,object.position.y-   f,object.position.z-i );
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}
			
				if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();} break;
 											  
				}
			} }
			
			}}
			
				var movementRightDownPawnBackwards3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x+i,object.position.y -   f,object.position.z-i );
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
				 
if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}
			
				if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();} break;
 											  
				}
			} 
			}
			}}
			
			var movementRightUpPawnBackwards3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
				for (var f = 0; f < groundLevels; f++) {
				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x+i,object.position.y +   f,object.position.z+i );
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
				 
if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}

				if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();} break;
 											  
				}
			} }
			
			}}
			
				var movementLeftUpPawnBackwards3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x-i,object.position.y +   f,object.position.z+i ); 
				
				  if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
				 
				if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}

				if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();} break;
 											  
				}
			}
			} } 
			
			}
						 
						 
	var movementRightDownHorse3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x+i,object.position.y  ,object.position.z-i );
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
				 
if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}
			
				if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();} break;
 											  
				}
			} 
			}
			}}		

var movementRightUpHorse3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x+i,object.position.y  ,object.position.z+i );
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
				 
if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}
			
				if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();} break;
 											  
				}
			} 
			}
			}}
			
			var movementLeftUpHorse3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x-i,object.position.y  ,object.position.z-i );
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
				 
if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}
			
				if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();} break;
 											  
				}
			} 
			}
			}}
	var movementLeftDownHorse3D= function (object, steps, isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
				for (var i = 0; i < steps; i++) {
								if( f > steps){continue;}// old:  if( f > i){continue;}

 				var damage= positionObj(object.position.x-i,object.position.y  ,object.position.z-i );
				if(!isCanJumpOverObstacles){
				if(isJumpOverBlockCheck(damage)){  damage.dispose(); break;
 											  
				}
			}
				 damage["isAllowedToDamage"]= isCanDoDamageOnField;
				 damage["stepID"]=i; // the distance from the start position.
				 
if( isCanDoDamageOnField){
				  damage.material.diffuseColor= new BABYLON.Color3(1.4, .4, .4);
				//  damage.material.emissiveColor = new BABYLON.Color3(.4, .4, .4);
damage["isStandAllowedOnDamageField"]= isStandAllowedOnDamageField
			} else{damage["isStandAllowedOnDamageField"]= true;}
			
				if(!isCanJumpOverObjects){
				if(isJumpOverObjectCheck(damage)){ if(!isCanDoDamageOnField){damage.dispose();} break;
 											  
				}
			} 
			}
			}}						
			
				var movementKnightJumpLeftUp= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
								if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x-1 ,object.position.y +   f,object.position.z+(i ) ); 
								movementLeftUpHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);
							 	movementLeftUpHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
				var movementKnightJumpRightUp= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
								if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x+1 ,object.position.y +   f,object.position.z+(i ) ); 
								movementRightDownHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);
																movementRightDownHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
				var movementKnightJumpLeftDown= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
								if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x-1 ,object.position.y +   f,object.position.z-(i ) ); 
								movementLeftDownHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);
																movementLeftDownHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
				var movementKnightJumpRightDown= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
								if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x+1 ,object.position.y +   f,object.position.z-(i ) ); 
								movementRightDownHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);
																movementRightDownHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
			
			
			
			
			
			
			
				var movementKnightJumpLeftUpBackwards= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
								if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x-1 ,object.position.y -   f,object.position.z+(i ) ); 
								movementLeftUpHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);
							 	movementLeftUpHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
				var movementKnightJumpRightUpBackwards= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
								if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x+1 ,object.position.y -   f,object.position.z+(i ) ); 
								movementRightDownHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);
																movementRightDownHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
				var movementKnightJumpLeftDownBackwards= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
								if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x-1 ,object.position.y -   f,object.position.z-(i ) ); 
								movementLeftDownHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);
																movementLeftDownHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
				var movementKnightJumpRightDownBackwards= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x+1 ,object.position.y -   f,object.position.z-(i ) ); 
								movementRightDownHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);
																movementRightDownHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
			
			
			
			
			
			
			
			
			
				var movementKnightJumpLeftUpBackwardsXaxis= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
								if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x-1 ,object.position.y -   f,object.position.z+(i ) ); 
								movementLeftUpHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);
							 	movementLeftUpHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
				var movementKnightJumpRightUpBackwardsXaxis= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
								if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x+i ,object.position.y -   f,object.position.z+(1 ) ); 
								movementRightDownHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);
																movementRightDownHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
				var movementKnightJumpLeftDownBackwardsXaxis= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
								if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x-i ,object.position.y -   f,object.position.z-(1 ) ); 
								movementLeftDownHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);
																movementLeftDownHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
				var movementKnightJumpRightDownBackwardsXaxis= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
								if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x+i ,object.position.y -   f,object.position.z-(1 ) ); 
								movementRightDownHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);
																movementRightDownHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
			
			
			
			
					var movementKnightJumpLeftUpXaxis= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
								if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x-i ,object.position.y +   f,object.position.z+(1 ) ); 
								movementLeftUpHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);
							 	movementLeftUpHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
				var movementKnightJumpRightUpXaxis= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
								if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x+i ,object.position.y +   f,object.position.z+(1 ) ); 
								movementRightDownHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);
																movementRightDownHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
				var movementKnightJumpLeftDownXaxis= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
								if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x-i ,object.position.y +   f,object.position.z-(1 ) ); 
								movementLeftDownHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);
																movementLeftDownHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
				var movementKnightJumpRightDownXaxis= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
								if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x+i ,object.position.y +   f,object.position.z-(1 ) ); 
								movementRightDownHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);
																movementRightDownHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
			
			
			
			
			
			
			
				var movementKnightJumpLeftUpBackwardsXaxis= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
								if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x-i ,object.position.y -   f,object.position.z+(1 ) ); 
								movementLeftUpHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);
							 	movementLeftUpHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
				var movementKnightJumpRightUpBackwardsXaxis= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
								if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x+i ,object.position.y -   f,object.position.z+(1 ) ); 
								movementRightDownHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);
																movementRightDownHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
				var movementKnightJumpLeftDownBackwardsXaxis= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
								if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x-i,object.position.y -   f,object.position.z-(1 ) ); 
								movementLeftDownHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);
																movementLeftDownHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
				var movementKnightJumpRightDownBackwardsXaxis= function (object,   isCanDoDamageOnField, isCanJumpOverObjects, isCanJumpOverObstacles)
			{
			for (var f = 0; f < groundLevels; f++) {
			
 				for (var i = 0; i < 3; i++) {
if( f > i){continue;}
								if( i !=2){continue;}

 				 
				 				var damage= positionObj(object.position.x+i ,object.position.y -   f,object.position.z-(1 ) ); 
								movementRightDownHorse3D(damage, 1, true, isCanJumpOverObjects, isCanJumpOverObstacles);
																movementRightDownHorse3D(damage, 1, false, isCanJumpOverObjects, isCanJumpOverObstacles);

								damage.dispose();
 
				 
				
			 
			} } 
			
			}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			