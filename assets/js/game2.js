/*var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;*/

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money:10,
    reset: function(){
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    },
    refillHealth: function() {
      if (this.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
      } 
      else {
        window.alert("You don't have enough money!");
      }
    },
    upgradeAttack: function() {
      if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
      } 
      else {
        window.alert("You don't have enough money!");
      }
    }
  };
  
  // You can also log multiple values at once like this console.log(playerName,playerAttack,playerHealth);
  
  // function to generate a random numeric value
  var randomNumber = function(min,max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
  }
  
  var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10,14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10,14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10,14)
    }
  ];
  
  console.log(enemyNames);
  console.log(enemyNames.length);
  
  
  var fight = function(enemy) {
      while (playerInfo.health > 0 && enemy.health > 0) {
        // ask player if they'd liked to fight or run
        var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
          // confirm player wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
          // if yes (true), leave fight
          if (confirmSkip) {
            window.alert(playerName + ' has decided to skip this fight. Goodbye!');
            // subtract money from playerMoney for skipping
            playerInfo.money = Math.max(0,playerInfo.money - 10);
            console.log("playerMoney", playerInfo.money)
            break;
          }
        }
    
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        var damage = randomNumber(playerInfo.attack-3,playerInfo.attack);
        enemy.health = Math.max(0,enemy.health - damage);
        console.log(
          playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemyHealth + ' health remaining.'
        );
    
        // check enemy's health
        if (enemy.health <= 0) {
          window.alert(enemy.name + ' has died!');
    
          // award player money for winning
          playerInfo.money = playerInfo.money + 20;
    
          // leave while() loop since enemy is dead
          break;
        } else {
          window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
        }
    
        // remove players's health by subtracting the amount set in the enemyAttack variable
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0,playerInfo.health - damage);
        console.log(
          enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
        );
    
        // check player's health
        if (playerInfo.health <= 0) {
          window.alert(playerInfo.name + ' has died!');
          // leave while() loop if player is dead
          break;
        } else {
          window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
        }
      }
    }
  
    var startGame = function(){
        // reset player stats
        playerInfo.reset();
        /*playerHealth = 100;
        playerInfo.attack = 10;
        playerInfo.money = 10;*/
  
      for (var i = 0; i < enemyInfo.length;i++) {
          if (playerInfo.health > 0 && i < enemyInfo.length-1) {
            // ask if player wants to use the store before next round
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            
            // if yes, take them to the store() function
            if (storeConfirm){
            shop();
            }
              window.alert("Welcome to Robot Gladiators! Round " + (i+1));
          }
          else {
              window.alert("You have lost your robot in battle! Game Over!");
              break;
          }
          var pickedEnemyObj = enemyInfo[i];
          pickedEnemyObj.health = randomNumber(40,60);
          // debugger;
          fight(pickedEnemyObj);
          // if we're not at the last enemy in the array
          if (i < enemyNames.length - 1) {
              shop();
          }
  
      }
      // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
      endGame();
      //play again
      startGame();
  }
  
  
  
  // function to end the entire game
  var endGame = function(){
      if (playerInfo.health > 0){
          window.alert("Great job you survived the game! Your score is " + playerInfo.money);
      } else {
          window.alert("You've lost your robot in battle.");
      }
      // ask player if they want to play again
      var playAgainConfirm = window.confirm("would you like to play again?");
  
      if (playAgainConfirm){
          // restart the game
          startGame();
      }
      else {
          window.alert("Thank you for playing!");
      }
  }
  
  var shop = function() {
      // ask player what they want to do
      var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store?"
      );
      // use switch to carry out action
      switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
          playerInfo.refillHealth();
          break;
        case "UPGRADE":
        case "upgrade":
          playerInfo.upgradeAttack();
          break;
        /*case "REFILL": // new case
        case "refill":
          if (playerInfo.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
      
            playerInfo.health = playerinfo.Health + 20;
            playerInfo.money = playerInfo.money - 7;
          }
          else {
            window.alert("You don't have enough money!");
          }
      
          break;
        case "UPGRADE": // new case
        case "upgrade":
          if (playerInfo.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
      
            playerInfo.attack = playerInfo.attack + 6;
            playerInfo.money = playerInfo.money - 7;
          }
          else {
            window.alert("You don't have enough money!");
          }
      
          break; */
        case "LEAVE": // new case
        case "leave":
          window.alert("Leaving the store.");
          break;
        default:
          window.alert("You did not pick a valid option. Try again.");
          shop();
          break;
      }
  }
  
  
  
  // start game when page loads
  startGame();