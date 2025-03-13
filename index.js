// Code your solution in this file!
// Function to calculate distance in blocks from Scuber HQ (42nd Street)
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
  }
  
  // Function to calculate distance in feet from Scuber HQ
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }
  
  // Function to calculate distance traveled in feet
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  
  // Function to calculate the fare price based on distance
  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate for distances between 2000 and 2500 feet
    } else {
      return "cannot travel that far"; // Beyond 2500 feet is not allowed
    }
  }
  
  // Export functions for testing
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
  