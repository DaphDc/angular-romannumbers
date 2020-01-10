export class RomanNumberConverter {
  // Define the roman number converter decimals.
  //    Define the roman decimal from 1 to 9, 10 to 90, then 100 to 1000.
  private readonly _decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  // Define the roman equivalence to decimale values: I to IX, X to XC, C to M. 
  private readonly _roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  // Define the roman in minuscule char.   
  private readonly _romanMinuscule = ["m", "cm", "d", "cd", "c", "xc", "l", "xl", "x", "ix", "v", "iv", "i"];

  // var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}

  // var lookup = {M:1000,CM:900,D:,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
  
  constructor(){
  }

  // toRomanMinuscule return string
  // This is nice, it seems mentally easier to parse what is happening here. Starting at the largest number, continue subtracting from the lookup table and appending as long as the remainder is greater than the lookup value.
  // If a letter is immediately followed by one of equal or lesser value, the two values are added; thus, XX equals 20, XV equals 15, VI equals 6. If a letter is immediately followed by one of greater value, the first is subtracted from the second; thus, IV equals 4, XL equals 40, CM equals 900. Examples: XLVII(=47), CXVI(=116), MCXX(=1120), MCMXIV(=1914). Roman numerals may be written in lowercase letters, though they appear more commonly in capitals.
  public convertToRomanString(num: number): string {
    var lookup = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
    let roman = "";
    for (let i in lookup) { // for in
      //  and appending as long as the remainder is greater than the lookup value.
      while(num>=lookup[i]) {
        roman += i;
        num -= lookup[i];
        console.log("roman number " + roman);
        console.log("number lookup" + num);
      }
    }
    return roman;
  }

  public romanize(): string {
    let res = "";
    // Todo: try change length to 100 numbers log.
    for(let i=0; i < 100; i++) {
      const rom = this.convertToRomanString(i);
      console.log(rom);
      console.log(i + "\t" + rom + "<br/>");
      res += i + '\t' + rom + '\n';
    }
    return res;
  }

  // fromRomanMinuscule return number

  // toRoman return string

  // fromRoman return number
}