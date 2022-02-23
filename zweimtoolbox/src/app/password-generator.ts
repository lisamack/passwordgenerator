import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { PasswordDetails } from './password-details';

@Injectable({
    providedIn: 'root'
  })
export class PasswordGenerator {
    
    private static SPECIAL_SIGNS: string = "\/()[]{}?!$%&=*+~,.;:<>-_"; 
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
    public generatePassword(passwordDetails: PasswordDetails): string {
        // checks if the password has to be easy because then we need to generate in another way
        if (passwordDetails.easy) {
            return this.generateEasyPassword(passwordDetails); 
        }

        // all symbols that can be used for the password
        const symbols: string[] = this.generateSymbols(passwordDetails); 

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
    private generateEasyPassword(passwordDetails: PasswordDetails): string {
        // number of specials signs (1 or 2)
        const numberSpecialSigns: number = this.randomNumber(1) + 1; 
                
        // initialization of password
        let password: string = ""; 
        
        // generates 1 uppercase letters if upper case letters are allowed
        if (passwordDetails.upperCase == true) {
            const upperCaseLetters: string[] = PasswordGenerator.UPPER_CASE_LETTERS.split("");
            password += this.randomSymbol(upperCaseLetters);
        }

        // generates multiple lowercase letters (the length of the password minus the number of other symbols)
        const lowerCaseLength: number = passwordDetails.length - 4 - numberSpecialSigns;
        const constants: string[] = PasswordGenerator.LOWER_CASE_CONSONANTS.split("");
        const vocals: string[] = PasswordGenerator.LOWER_CASE_VOCALS.split("");
        for (var counter = 0; counter < lowerCaseLength; counter++) {
            // vocals and consonants are alternating (first a constant, then a vocal, etc.l)
            let rest: number = counter % 2;
            if (rest == 0) {
                password += this.randomSymbol(constants);
            } else if (rest == 1) {
                password += this.randomSymbol(vocals);
            } else {
                console.error("Error in Generation of multiple lower case letter. The rest of the division is not 0 or 1.");
            }
        }
        
        // generates 3 numbers if numbers are allowed
        if (passwordDetails.numbers == true) {
            const numbers: string[] = PasswordGenerator.NUMBERS.split("");
            for (var counter = 0; counter < 3; counter++) {
                password += this.randomSymbol(numbers);
            }
        }
        
        // generates 1 or 2 special signs if special signs are allowed
        if (passwordDetails.specialSigns == true) {
            const specialSigns: string[] = PasswordGenerator.SPECIAL_SIGNS.split("");
            for (var counter = 0; counter < numberSpecialSigns; counter++) {
                password += this.randomSymbol(specialSigns);
            }
        }

        return password; 
    }


    /**
     * Returns a random symbol of the symbol set. 
     * @param symbolSet any set of symbols
     * @returns a symbol
     */
    private randomSymbol(symbolSet: string[]): string {
        return symbolSet[this.randomNumber(symbolSet.length)]; 
    }

    /**
     * Returns a random number with maximum length. Minimum is 0.  
     * @param length maximum length of random number
     * @returns the random number
     */
    private randomNumber(length: number): number {
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
    private generateSymbols(passwordDetails: PasswordDetails): string[] {
        let symbols: string[] = PasswordGenerator.LOWER_CASE_LETTERS.split("");
        if (passwordDetails.upperCase) {
            symbols = symbols.concat(PasswordGenerator.UPPER_CASE_LETTERS.split(""));    
        }
        if (passwordDetails.specialSigns) {
            symbols = symbols.concat(PasswordGenerator.SPECIAL_SIGNS.split(""));
        }
        if (passwordDetails.numbers) {
            symbols = symbols.concat(PasswordGenerator.NUMBERS.split(""));
        }

        return symbols;
    }

}
