export function calculateWinner(ships, fireCounter) {
  var hittedShips = 0;
  var minHit = 17;
  for (var shipIndex = 0; shipIndex < ships.length; shipIndex++) {
    if (ships[shipIndex].isGone === true) {
      hittedShips = hittedShips + 1;
    }
    //console.log("Hitted ships ", hittedShips);
    if (hittedShips === ships.length) {
      console.log("All ships sunk! ", (17 / fireCounter) * 100, "%");
      return parseFloat((minHit / fireCounter) * 100).toFixed(2);
    }
  }
  return null;
}
