function wearType(temperature) {
    if (temperature < 0) {
        return "Wear a coat, hat, scarf and gloves";
    } else if (temperature < 10) {
        return "Wear a coat and bring a hat";
    } else if (temperature < 20) {
        return "Wear a coat";
    } else {
        return "Get ready for summer";
    }
}
console.log(wearType(15));