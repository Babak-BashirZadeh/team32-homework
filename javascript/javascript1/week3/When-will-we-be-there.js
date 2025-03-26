const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function timeOfTravel (speed, destinationDistance) {
    let travelTimeHours = destinationDistance / speed;
    let hours = Math.floor(travelTimeHours);
    let minutes = Math.round((travelTimeHours - hours) * 60);
    return `${hours} hours and ${minutes} minutes`; 
    
  }
  const travelTime = timeOfTravel(travelInformation.speed, travelInformation.destinationDistance);
  console.log(travelTime); // 8 hours and 38 minutes