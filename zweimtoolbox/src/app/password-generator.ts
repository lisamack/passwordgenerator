import { PasswordDetails } from './password-details';
export class PasswordGenerator {
    
    private static SPECIAL_SIGNS: string = "\/()[]{}?!$%&=*+~,.;:<>-_"; 
    // private static EASY_WORD: string = "[B-Z^EIOU][aeiou][b-z^eiou][aeiou][b-z^eiou][aeiou][b-z^eiou][aeiou][0-9]{3}[" + PasswordGenerator.SPECIAL_SIGNS + "]{1,2}";
    private static LOWER_CASE_VOCALS: string = "bcdfghjklmnpqrstvwxyz";
    private static LOWER_CASE_CONSONANTS: string = "aeiou";
    private static UPPER_CASE_LETTERS: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    private static LOWER_CASE_LETTERS: string = "abcdefghijklmnopqrstuvwxyz"; 
    private static NUMBERS: string = "0123456789";


    /**
     * Generates a (default) password by using the information in PasswordDetails. 
     * PasswordDetails shows how long the password has to be and which signs should be used.
     * 
     * @param passwordDetails details for passsword generation
     * @returns the generated password  
     */
    public static generatePassword(passwordDetails: PasswordDetails): string {
        // checks if the password has to be easy because then we need to generate in another way
        if (passwordDetails.easy) {
            return this.generateEasyPassword(passwordDetails); 
        }

        // all symbols that can be used for the password
        const symbols: string[] = this.generateSymbols(passwordDetails); 
        const symbolLength: number = symbols.length; 

        // password is initialized empty
        let password: string = ""; 
        for (var counter = 0; counter < passwordDetails.length; counter++) {
            // random symbol is generated and added to password
            password += this.randomSymbol(symbols);
            password.concat("");
        }

        return password; 
    }

    /**
     * Generates a password that is easy to remember. 
     * It starts with an upper case letter, continues with some lower case letter and it ends with 3 numbers and 1 oder 2 special signs. 
     * @param passwordDetails details for passsword generation
     * @returns the generated password
     */
    private static generateEasyPassword(passwordDetails: PasswordDetails): string {
        // number of specials signs (1 or 2)
        const numberSpecialSigns: number = this.randomNumber(1) + 1; 
                
        // initialization of password
        let password: string = ""; 
        
        // generates 1 uppercase letters
        const upperCaseLetters: string[] = this.UPPER_CASE_LETTERS.split("");
        password += this.randomSymbol(upperCaseLetters);

        // generates multiple uppercase letters (the length of the password minus the number of other symbols)
        const lowerCaseLength: number = passwordDetails.length - 4 - numberSpecialSigns;
        const constants: string[] = this.LOWER_CASE_CONSONANTS.split("");
        const vocals: string[] = this.LOWER_CASE_VOCALS.split("");
        for (var counter = 0; counter < lowerCaseLength; counter++) {
            // vocals and consonants are alternating (first a constant, then a vocal, etc.l)
            let rest: number = counter % 2;
            if (rest == 0) {
                password += this.randomSymbol(constants);
            } else if (rest == 1) {
                password += this.randomSymbol(vocals);
            } else {
                // error
            }
        }
        
        // generates 3 numbers
        const numbers: string[] = this.NUMBERS.split("");
        for (var counter = 0; counter < 3; counter++) {
            password += this.randomSymbol(numbers);
        }
        
        // generates 1 or 2 special signs
        const specialSigns: string[] = this.SPECIAL_SIGNS.split("");
        for (var counter = 0; counter < numberSpecialSigns; counter++) {
            password += this.randomSymbol(specialSigns);
        }

        return password; 
    }


    /**
     * Returns a random symbol of the symbol set. 
     * @param symbolSet any set of symbols
     * @returns a symbol
     */
    private static randomSymbol(symbolSet: string[]): string {
        return symbolSet[this.randomNumber(symbolSet.length)]; 
    }

    /**
     * Returns a random number with maximum length. Minimum is 0.  
     * @param length maximum length of random number
     * @returns the random number
     */
    private static randomNumber(length: number): number {
        return Math.floor(Math.random() * length); 
    }

    /**
     * Generates that symbol that can be used for the password generation. 
     * Lower case letters are always returned. Upper case letters and special signs can be returned as well, 
     * depending on the password details. 
     * 
     * @param passwordDetails details for passsword generation
     * @returns all symbols that can be used for the password
     */
    private static generateSymbols(passwordDetails: PasswordDetails): string[] {
        let symbols: string[] = this.LOWER_CASE_LETTERS.split("");
        if (passwordDetails.upperCase) {
            symbols = symbols.concat(this.UPPER_CASE_LETTERS.split(""));    
        }
        if (passwordDetails.specialSigns) {
            symbols = symbols.concat(this.SPECIAL_SIGNS.split(""))
        }
        
        return symbols;
    }

}
