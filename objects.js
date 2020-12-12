    
		
		var Weather=function (isWithFog, isWithRainFall, fogIntensity,RainRadius){
				if(isWithFog){
   
    if(typeof fogIntensity === "undefined"){
				 fogIntensity=0.05;
				 }
				 scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
        scene.fogDensity = fogIntensity ; 
        scene.fogColor = new BABYLON.Color3(1.4, 1.9, 0.5); // color alt later adjustable
}

if(isWithRainFall){
// weather REF: https://www.babylonjs-playground.com/#10XN2J#8 ///////////////////////////////////////
            // Create & launch a particule system
            particleSystem = new BABYLON.ParticleSystem("spawnParticles", 3600, scene);    // 3600 particles to have a continue effect when computing circle positions
            particleSystem.particleTexture = new BABYLON.Texture("static/images/particles/flare.png", scene);
            particleSystem.color1 = new BABYLON.Color4(.9, .9, .95, 1.0);
            particleSystem.color2 = new BABYLON.Color4(0.2, 0.2, .3, .5);
            particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
            particleSystem.emitter = new BABYLON.Vector3(0, 20, 0);
            particleSystem.minSize = 0.1;
            particleSystem.maxSize = 0.5;// this!!
            particleSystem.emitRate = 500;
            particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;     // to manage alpha
            particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
            //particleSystem.direction1 = new BABYLON.Vector3(-1, 1, -1);
            //particleSystem.direction2 = new BABYLON.Vector3(1, 1, 1);
            particleSystem.minEmitPower = -10;
            particleSystem.maxEmitPower = -100;
            //particleSystem.updateSpeed = 0.1;
        
			 if(typeof RainRadius === "undefined"){
				 RainRadius=150;
				 }

            var radius = RainRadius;
        
            // Custom function to get the circle effect
            particleSystem.startPositionFunction = function(worldMatrix, positionToUpdate)
            {
                var rndAngle = 2 * Math.random() * Math.PI;
                var randX = Math.random() *radius * Math.sin(rndAngle);
                var randY = this.minEmitBox.y;
                var randZ = Math.random() *radius * Math.cos(rndAngle);
                
                BABYLON.Vector3.TransformCoordinatesFromFloatsToRef(randX, randY, randZ, worldMatrix, positionToUpdate);
            }
			
			
             particleSystem.updateFunction = function(particles) {

        for (var index = 0; index < particles.length; index++) {
            var particle = particles[index];
            particle.age += this._scaledUpdateSpeed;
            if (particle.age >= particle.lifeTime) {
                this.recycleParticle(particle);
                index--;
                continue;
            }
            else {
                particle.colorStep.scaleToRef(this._scaledUpdateSpeed, this._scaledColorStep);
                particle.color.addInPlace(this._scaledColorStep);
                if (particle.color.a < 0)
                    particle.color.a = 0;
                particle.angle += particle.angularSpeed * this._scaledUpdateSpeed;
                particle.direction.scaleToRef(this._scaledUpdateSpeed, this._scaledDirection);
                particle.position.addInPlace(this._scaledDirection);
                this.gravity.scaleToRef(this._scaledUpdateSpeed, this._scaledGravity);
                particle.direction.addInPlace(this._scaledGravity);
                 
             }
        }
            };

 
            // Start
            this.particleSystem.start();
 				
				}
			};
		// atm as decor, later useable as a resource object
		var  Resource=   function Resource(x,y,z,sparkleCount) {
                 var mesh = BABYLON.MeshBuilder.CreateBox("ResourceObj"+uuidv4() , {height: (gridSizeX/gridSizeZ), width: (gridSizeX/gridSizeZ), depth: (gridSizeX/gridSizeZ) }, scene);   
                 var  material = new BABYLON.StandardMaterial("matResourceObj_"+uuidv4(), scene);
                 material.diffuseColor = new BABYLON.Color3(0.8, 0.4, 0.4);
                    material.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
                mesh.material = this.material;
				
             
			  mesh .visibility = false;
			  
			  
			   if(typeof sparkleCount === "undefined"){
				 sparkleCount=1;
				 }
 
			    // Create a particle system
     particleSystem = new BABYLON.ParticleSystem("particles_"+uuidv4(), sparkleCount, scene);
 
 //Texture of each particle
     particleSystem.particleTexture = new BABYLON.Texture("static/images/particles/flare.png", scene);

    // Where the particles come from
     particleSystem.emitter = mesh;//BABYLON.Vector3.Zero(); // the starting location

    // Colors of all particles
   particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
   particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
   particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

    // Size of each particle (random between...
   particleSystem.minSize = 2;
   particleSystem.maxSize = 8;

    // Life time of each particle (random between...
   particleSystem.minLifeTime = 1.5;
   particleSystem.maxLifeTime = 1.5;

    // Emission rate
   particleSystem.emitRate = 50;


    // Emission type
    var hemisphericEmitter =new BABYLON.HemisphericParticleEmitter();
    hemisphericEmitter.radiusRange = 0;
    hemisphericEmitter.radis = 1.2;

   particleSystem.particleEmitterType = hemisphericEmitter;

    // Limit velocity
   particleSystem.addLimitVelocityGradient(0, 1);
   particleSystem.addLimitVelocityGradient(0.120, 0.983);
   particleSystem.addLimitVelocityGradient(0.445, 0.780);
   particleSystem.addLimitVelocityGradient(0.691, 0.502);
   particleSystem.addLimitVelocityGradient(0.930, 0.05);
   particleSystem.addLimitVelocityGradient(1.0, 0);

   particleSystem.limitVelocityDamping = 0.6;

    // Size over lifetime
   particleSystem.addSizeGradient(0, 0.641);
   particleSystem.addSizeGradient(0.344, 0.883);
   particleSystem.addSizeGradient(0.615, 0.965);
   particleSystem.addSizeGradient(1.0, 1.0);

    // Speed
   particleSystem.minEmitPower = 30;
   particleSystem.maxEmitPower = 60;
   particleSystem.updateSpeed = 1/60;

    // Start the particle system
   particleSystem.start();

						mesh.position.x = x;
                mesh.position.y = y;
                mesh.position.z = z;
			return mesh;
			
			}
        var positionObj= function(x,y,z,isAllowedToDamage,isAllowedToTeleport)
			{
			             var position = new BABYLON.MeshBuilder.CreateBox("positionObj"+uuidv4(), {size: (gridSizeX/gridSizeZ)/4.0}, scene);
						 var mat = new BABYLON.StandardMaterial("positionObjmat"+uuidv4(), scene);
							  mat.diffuse = new BABYLON.Color3(1, 1, 1);
							  mat.specular = new BABYLON.Color3(1, 1, 1);
							 mat.diffuseColor= new BABYLON.Color3(.4, 1.4, .4);

						  mat.backFaceCulling = false;
						  position.material = mat;
						  
						position["isAllowedToDamage"] =isAllowedToDamage;
						position["isAllowedToTeleport"] =isAllowedToTeleport;

			position.position.x = x;
                position.position.y = y;
                position.position.z = z;
				
				if(aICount >= playerCount ||( aICount == 1 && Who ==1)){position.visibility = 0.0;}
				
				return position;

			}
			
			var SquareInteractObj= function(x,y,z,sizeX,sizeY,sizeZ, TeamId, levelId,Health,MovementRange,DamageRange,dps, isWithSprite, imgUrl, ObjectGameName, specialId, specialDescription, isReversedColors)
			{
			             var obj = new BABYLON.MeshBuilder.CreateBox("InteractionObj"+uuidv4(), {size: gridSizeX/gridSizeZ  }, scene);
						 var mat = new BABYLON.StandardMaterial("InteractionObjmat"+uuidv4(), scene);
						 	 mat.diffuse = new BABYLON.Color3(1, 1, 1);
							  mat.specular = new BABYLON.Color3(1, 1, 1);
							  if(TeamId==0){mat.diffuseColor= new BABYLON.Color3(.1, 1.4, 1.4);}
							  else if(TeamId==1){
							mat.diffuseColor= new BABYLON.Color3(1.1, 1.4, 0.1);}
  
 						  mat.backFaceCulling = false;
						  obj.material = mat;
						  

                obj.position.x = x;
                obj.position.y = y;
                obj.position.z = z;
				
				  obj.scaling.x = sizeX;
                obj.scaling.y = sizeY;
                obj.scaling.z = sizeZ;

				obj["levelId"]=levelId;
				 obj["TeamId"] =TeamId;
				 
 				   
				  if(typeof dps === "undefined"){
				 dps=1;
				 }
				  obj["dps"] =dps;

				 if(typeof Health === "undefined"){
				 Health=1;
				 }
				  obj["Health"] =Health;
				   obj["MaxHealth"] =Health;

				 if(typeof MovementRange === "undefined"){
				 MovementRange=0;
				 }
				  obj["MovementRange"] =MovementRange;
				  
				 if(typeof DamageRange === "undefined"){
				 DamageRange=1;
				 }
				  obj["DamageRange"] =DamageRange;

				 if(typeof ObjectGameName === "undefined"){
				 ObjectGameName="Nameless";
				 }
				  obj["ObjectGameName"] =ObjectGameName;

				 if(typeof specialId === "undefined"){
				 specialId=0;
				 }
				  obj["specialId"] =specialId;
				  
				 if(typeof specialDescription === "undefined"){
				 specialDescription="";
				 }
				  obj["specialDescription"] =specialDescription;



				if(isWithSprite){
				
				 if(typeof imgUrl === "undefined"){
				 imgUrl="static/images/units/v_blanco_tiny.png";
				 }
				
					 var planeSprite = new BABYLON.MeshBuilder.CreatePlane("myPlane_"+uuidv4(), {width: gridSizeX/gridSizeZ, height: gridSizeX/gridSizeZ,sideOrientation:BABYLON.Mesh.DOUBLESIDE}, scene);
					   planeSprite.material = new BABYLON.StandardMaterial("myPlanemat_"+uuidv4(), scene);
					   planeSprite.material.diffuseTexture= new BABYLON.Texture(imgUrl, scene);
					   planeSprite.parent= obj;
					   
					   planeSprite.material.diffuseTexture.hasAlpha = true; //important for trans png! https://forum.babylonjs.com/t/transparent-image-not-showing-correctly-on-plane-material/11008
planeSprite.material.useAlphaFromDiffuseTexture = true;



					  	planeSprite.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;//REF:https://www.html5gamedevs.com/topic/25381-how-to-make-mesh-face-camera/

			 // obj .visibility = false;
			  
 			
			
				if ((TeamId==0 && !isReversedColors)|| (TeamId==1&& isReversedColors)) {
 					
					                    planeSprite.material.diffuseColor = new BABYLON.Color3(.1, 1.4, 1.4);
                    planeSprite.material.specularColor = new BABYLON.Color3(.1, 1.4, 1.4);

                } else if ((TeamId==1 && !isReversedColors) || (TeamId==0 && isReversedColors)) {
 					
					                    planeSprite.material.diffuseColor = new BABYLON.Color3(1.1, 1.4, 0.1);
                    planeSprite.material.specularColor = new BABYLON.Color3(1.1, 1.4, 0.1);

                }
				}
				
 			 if(isWithSprite){ obj.getChildren()[0].visibility =0.5;			obj.visibility = 0.0;}else{obj.visibility = 0.5;}

obj["pionNumberOnField"]=pionObjectCount;

pionObjectCount+=1;

				return obj;

			}
				var SphereBlockObj= function(x,y,z,sizeX,sizeY,sizeZ, isWithSprite,isMine, damageCount, opacity)
			{
			var obj = BABYLON.MeshBuilder.CreateSphere("SphereBlockObj"+uuidv4(), {size: gridSizeX/gridSizeZ  }, scene);  
						 var mat = new BABYLON.StandardMaterial("SphereBlockObjmat"+uuidv4(), scene);
						 	 mat.diffuse = new BABYLON.Color3(1, 1, 1);
							  mat.specular = new BABYLON.Color3(1, 1, 1);
 							mat.diffuseColor= new BABYLON.Color3(0, 0, 0); 
			obj.visibility = 0.5;

 						  mat.backFaceCulling = false;
						  obj.material = mat;
						  

                obj.position.x = x;
                obj.position.y = y;
                obj.position.z = z;
				
				  obj.scaling.x = sizeX;
                obj.scaling.y = sizeY;
                obj.scaling.z = sizeZ;

 
 				  if(typeof isMine === "undefined"){
				 isMine=0;
				 }
				  obj["isMine"] =isMine;

				 if(typeof damageCount === "undefined"){
				 damageCount=0;
				 }
				  obj["damageCount"] =damageCount;


if(isWithSprite){
					 var planeSprite = new BABYLON.MeshBuilder.CreatePlane("myPlane_"+uuidv4(), {width: gridSizeX/gridSizeZ, height: gridSizeX/gridSizeZ,sideOrientation:BABYLON.Mesh.DOUBLESIDE}, scene);
					   planeSprite.material = new BABYLON.StandardMaterial("myPlanemat_"+uuidv4(), scene);
					   planeSprite.material.diffuseTexture= new BABYLON.Texture("static/images/units/v_chess_zero.png", scene);
					   planeSprite.parent= obj;
 						  } 
			 
				 
 				  if(typeof opacity === "undefined"){
				 opacity=0.0;// default 0.5
				 }

 			 if(isWithSprite){ obj.getChildren()[0].visibility =opacity;			obj.visibility = 0.0;}else{obj.visibility = opacity;}

				return obj;

			}
			
			
			var GroundObj = function(gridSizeX, gridSizeY, gridSizeZ, img,gLevels)
			{
			for (var f = 0; f < gLevels; f++) {
			    
					   var ground = new BABYLON.Mesh.CreateGround("ground"  , gridSizeX, gridSizeY, gridSizeZ, scene);
					          groundArray.push(ground);
            ground.material = new BABYLON.StandardMaterial("grdmat", scene);
            ground.material.wireframe = false;
			
			ground.position.y-=f;
			
			ground["floorId"] =f;

			if(typeof img ==="undefined")
			{
			img ="static/images/decor/HoloGraph_Chess_Board_Transparent.png"
			
			}
			
				if(typeof gLevels ==="undefined")
			{
			gLevels=1
			
			}
        	 ground.material.diffuseTexture= new BABYLON.Texture(img, scene);
		ground.material.diffuseTexture.hasAlpha  = true;
		ground.visibility  = 0.3;
		//ground.material.specularColor = new BABYLON.Color3(0, 0, 0); https://stackoverflow.com/questions/46862168/babylon-js-remove-light-reflection-of-sphere
					   ground.material.diffuseTexture.hasAlpha = true;     
ground.material.useAlphaFromDiffuseTexture = true;
//ground.isPickable=false;
//ground.material.isPickable=false;

}
return groundArray;
																			

			}