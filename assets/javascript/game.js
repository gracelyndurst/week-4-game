$(document).ready(function(){
	var chosenChar="";
	var chosenEnemy="";
	var isCharChosen=false;
	var isEnemyChosen=false;
	var chosenobj;
	var chosenEnemyobj;
	var playerHp;
	var playerAp;
	var enemyHp;
	var enemyAp;
	var enemiesDefeated=0;
	var stillPlaying=true;
		var chars = {
			luke: {
				name: 'Luke',
				hp: 110,
				attack: 20,
				href: 'assets/images/luke.png',
				image: "img src='assets/images/luke.png'",
				
				},
			obi_wan: {
				name: 'Obi-Wan',
				hp: 118,
				attack: 16,
				href: 'assets/images/obi_wan.png',
				image: 'img src=assets/images/obi_wan.png',
				
				},
			count_dooku: {
				name: 'Count Dooku',
				hp: 140,
				attack: 10,
				href: 'assets/images/count_dooku.png',
				image: 'img src=assets/images/count_dooku.png'
				
				},
			yoda: {
				name: 'Yoda',
				hp: 180,
				attack: 10,
				href: 'assets/images/yoda.png',
				image: 'img src=assets/images/yoda.png',
				
				}
			};



		function choosePlayersfunction(){
			if(stillPlaying){

					$('.char').on('click', function(){
						if(!isCharChosen){
								$('#restartbtn').empty();
							chosenChar=$(this).attr('value');
							if(chosenChar==='luke'){
								chosenobj=(chars.luke);
									$('#obi_wan').css('background-color', 'grey');
									$('#count_dooku').css('background-color', 'grey');
									$('#yoda').css('background-color', 'grey');}
							if(chosenChar==='obi_wan'){
								chosenobj=(chars.obi_wan);
									$('#luke').css('background-color', 'grey');
									$('#count_dooku').css('background-color', 'grey');
									$('#yoda').css('background-color', 'grey');}
							if(chosenChar==='count_dooku'){
								chosenobj=(chars.count_dooku);
									$('#luke').css('background-color', 'grey');
									$('#obi_wan').css('background-color', 'grey');
									$('#yoda').css('background-color', 'grey');}
							if(chosenChar==='yoda'){
								chosenobj=(chars.yoda);
									$('#luke').css('background-color', 'grey');
									$('#obi_wan').css('background-color', 'grey');
									$('#count_dooku').css('background-color', 'grey');}

									$('#yourChosenCharDisplay').append(this);

									playerHp=(chosenobj.hp);
									playerAp=(chosenobj.attack);
									isCharChosen=true;
									return $(this).attr('value');
						}
						else{
							if(!isEnemyChosen){
								if($(this).attr('value')==chosenChar){
									return false;
								}
								else{
									chosenEnemy=$(this).attr('value');
									$('#fightSectionDisplay').append(this);
									$(this).css('background-color', 'red');
									
										if(chosenEnemy==='luke'){
											chosenEnemyobj=(chars.luke);
										}
										if(chosenEnemy==='obi_wan'){
											chosenEnemyobj=(chars.obi_wan);
										}
										if(chosenEnemy==='count_dooku'){
											chosenEnemyobj=(chars.count_dooku);
										}
										if(chosenEnemy==='yoda'){
											chosenEnemyobj=(chars.yoda);
										}

									enemyHp=(chosenEnemyobj.hp);
									enemyAp=(chosenEnemyobj.attack);
									isEnemyChosen=true;
								}
							}

						}
						return;
					});
					return;
			}
				return;
		}//Choose player and enemy function close

		//Area for Attack button function
		function attackfunction(){		
			$(function() {
					$('#attack').on('click', function() {
							var tempPlayerHp=(playerHp-enemyAp);
								playerHp=tempPlayerHp;
								$('#yourChosenCharDisplay .hp').html(tempPlayerHp);

							var tempEnemyHp=(enemyHp-playerAp);
								enemyHp=tempEnemyHp;
								$('#fightSectionDisplay .hp').html(tempEnemyHp);

								$('#resultMessage').html('You attacked ' + chosenEnemyobj.name + ' for ' + playerAp + ' damage. </n> And he attacked you for ' + enemyAp + ' damage.');
								playerAp=(playerAp + (4 + (enemyAp/2)));

						if(playerHp<=0){
								endgamefunction();
						}
						else if(enemyHp<=0){
							if(enemiesDefeated===2){
								wongamefunction();
							}
							else{
								$('#resultMessage').html('You beat him. Choose another enemy');
								$('#fightSectionDisplay').empty();
								enemiesDefeated++;
								isEnemyChosen=false;
								choosePlayersfunction();
							}
						}
						return;
					});
				return;
			})  //attack section close
			return;
		}//attack function close			

		function resetfunction(){			
				$('#restart').on('click', function() {
						chosenChar="";
						chosenEnemy="";
						isCharChosen=false;
						isEnemyChosen=false;
						chosenobj;
						chosenEnemyobj;
						playerHp;
						playerAp;
						enemyHp;
						enemyAp;
						enemiesDefeated=0;
						stillPlaying=true;
						$('#yourCharChoiceDisplay').html('<div id="luke" class="char" value="luke"><div>Luke</div><img src=assets/images/luke.png alt="Luke Skywalker"><div class="hp">100</div></div><div id="obi_wan" class="char" value="obi_wan"><div>Obi-Wan</div><img src=assets/images/obi_wan.png alt="Obi-Wan"><div class="hp">120</div></div><div id="count_dooku" class="char" value="count_dooku"><div>Count Dooku</div><img src=assets/images/count_dooku.png alt="Count Dooku"><div class="hp">150</div></div><div id="yoda" class="char" value="yoda"><div>Yoda</div><img src=assets/images/yoda.png alt="Yoda"><div class="hp">180</div></div>');
						$('#resultMessage').empty();
						choosePlayersfunction();
						return;		
				})//restart click close
				return;
		}//reset function close

		function endgamefunction(){
			$('#resultMessage').html('Game Over');
			$('#fightSectionDisplay').empty();
			$('#yourChosenCharDisplay').empty();
			$('#yourCharChoiceDisplay').empty();
			stillPlaying=false;
			$('#restartbtn').html('<button class=btn id="restart">Restart</button>');
			resetfunction();
			return;
		}// endgamefunction close

		function wongamefunction(){
			$('#resultMessage').html('CONGRATULATIONS. YOU WON THE GAME!');
			$('#fightSectionDisplay').empty();
			$('#yourChosenCharDisplay').empty();
			$('#yourCharChoiceDisplay').empty();
			stillPlaying=false;
			$('#restartbtn').html('<button class=btn id="restart">Restart</button>');
			resetfunction();
			return;
		}//wongamefunction close

	//function calls	
	choosePlayersfunction();
	attackfunction();

});