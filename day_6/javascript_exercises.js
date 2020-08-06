function tellFortune(numChildren, partnerName, location, jobTitle) {
  var future = "You will be a " + jobTitle + " in " + location + ", and married to " + partnerName + " with " + numChildren + " kids."
  console.log(future);
}

tellFortune(5, "Selwyn", "Denver", "CSM");
tellFortune(2, "Selwyn", "NYC", "DJ");
tellFortune(3, "Selwyn", "LA", "Model");


function calculateAge (birthYear, currentYear) {
  var currentAge = currentYear - birthYear
  var result = "You are either " + currentAge + " or " + (currentAge - 1)
  console.log(result);
}

calculateAge(1990, 2020);
calculateAge(1955, 2020);
calculateAge(1980, 2020);


function calculateSupply(age, amountPerDay) {
  var maxAge = 100;
  var lifetimeSnacks = (amountPerDay * 365) * (maxAge - age)
  console.log("You will need " + lifetimeSnacks + " to last you until the ripe old age of " + maxAge)
}

calculateSupply(5, 1);
calculateSupply(30, 2.5);
calculateSupply(40, 3);
