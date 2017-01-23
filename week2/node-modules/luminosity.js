function luminosity (red, green, blue) {
  return 0.2126*red + 0.7152*green + 0.0722*blue
}

console.log( 
  luminosity(
    process.argv[2], 
    process.argv[3], 
    process.argv[4]
  ) 
);