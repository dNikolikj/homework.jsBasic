//chinese zodiac exercise
let year = prompt("Enter the year you were born:");

if((year - 4) % 12 == 0) {
    console.log("You're Chinese zodiac sign is: rat")
}
else if((year - 4) % 12 == 1) {
    console.log("You're Chinese zodiac sign is: Ox")
}
else if((year - 4) % 12 == 2) {
    console.log("You're Chinese zodiac sign is: Tiger")
}else if((year - 4) % 12 == 3) {
    console.log("You're Chinese zodiac sign is: Rabbit")
}else if((year - 4) % 12 == 4) {
    console.log("You're Chinese zodiac sign is: Dragon")
}else if((year - 4) % 12 == 5) {
    console.log("You're Chinese zodiac sign is: Snake")
}else if((year - 4) % 12 == 6) {
    console.log("You're Chinese zodiac sign is: Horse")
}
else if((year - 4) % 12 == 7) {
    console.log("You're Chinese zodiac sign is: Goat")
}
else if((year - 4) % 12 == 8) {
    console.log("You're Chinese zodiac sign is: Monkey")
}
else if((year - 4) % 12 == 9) {
    console.log("You're Chinese zodiac sign is: Rooster")
}
else if((year - 4) % 12 == 10) {
    console.log("You're Chinese zodiac sign is: Dog")
}
else if((year - 4) % 12 == 11) {
    console.log("You're Chinese zodiac sign is: Pig")
}
else{
    console.log("You were never meant to be Chinese.")
}

