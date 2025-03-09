const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Rick and Morty",
      days: 1,
      hours: 8,
      minutes: 58,
    },
    {
      title: "devs",
      days: 0,
      hours: 6,
      minutes: 56,
    },
    {
        title: "Dexter",
        days: 4,
        hours: 23,
        minutes: 22,
      },
  ];
  function timeSpend () {
    const averageLifeYears = 80;
    const averageLifeMinutes = averageLifeYears * 365 * 24;
    for (let series of seriesDurations) {
      const title = series.title;
      const days = series.days;
      const hours = series.hours;
      const minutes = series.minutes;
      const totalTimeSpend = (days * 24 + hours) * 60 + minutes;
      const percentageOfLife = (totalTimeSpend/averageLifeMinutes) * 100;
      console.log (`${title} took ${percentageOfLife.toFixed(2)}% of 80 years old person`);
      let totalTime =+ percentageOfLife.toFixed(2);
      console.log ("In total that is " + totalTime + " of your life")
    }  
    
  }
  timeSpend();