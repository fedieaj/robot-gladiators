var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
        if (promptFight === "skip" || promptFight === "SKIP") {

            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
          );

          if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            playerMoney = playerMoney + 20;

            break;

        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
          }

          playerHealth = playerHealth - enemyAttack;
          console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
          );

          if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
          } 
          else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
          }
        } 
};
        

// need to clean up below

        if (promptFight === "fight" || promptFight === "FIGHT") {
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
 
  // Log a resulting message to the console so we know that it worked.
 

  
    break;
  

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  
  // Log a resulting message to the console so we know that it worked.
  

  

    else {
        fight();
    }

    }
    //window.alert("Welcome to Robot Gladiators!");


}
 
};

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
  }