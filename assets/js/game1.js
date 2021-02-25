var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this console.log(playerName,playerAttack,playerHealth);

var enemyNames = ["Roborto","Amy Android","Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);


var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
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
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    }
  }

  var startGame = function(){
      // reset player stats
      playerHealth = 100;
      playerAttack = 10;
      playerMoney = 10;

    for (var i = 0; i < enemyNames.length;i++) {
        if (playerHealth > 0 && i < enemyNames.length-1) {
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
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        // debugger;
        fight(pickedEnemyName);
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
    if (playerHealth > 0){
        window.alert("Great job you survived the game! Your score is " + playerMoney);
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
      case "REFILL": // new case
      case "refill":
        if (playerMoney >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
    
          playerHealth = playerHealth + 20;
          playerMoney = playerMoney - 7;
        }
        else {
          window.alert("You don't have enough money!");
        }
    
        break;
      case "UPGRADE": // new case
      case "upgrade":
        if (playerMoney >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
    
          playerAttack = playerAttack + 6;
          playerMoney = playerMoney - 7;
        }
        else {
          window.alert("You don't have enough money!");
        }
    
        break;
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
