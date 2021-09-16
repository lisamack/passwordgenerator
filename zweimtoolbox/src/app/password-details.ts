/**
 * Details for the new password that is going to be generated. 
 */
export class PasswordDetails {

    /**
     * Password length 
     */
    private _length: number = 10; 
    /**
     * Shows if upper case letters should be contained
     */
    private _upperCase: boolean = true; 
    /**
     * Shows if the password should be easy to remember
     */
    private _easy: boolean = false; 
    /**
     * Shows if the password should contain special signs
     */
    private _specialSigns: boolean = true; 

    constructor (length?: number, upperCase?: boolean, specialSigns: boolean = true) {
        if (length) {
            this._length = length; 
        }
        if (upperCase) {
            this._upperCase = upperCase;   
        }
        if (specialSigns) {
            this._specialSigns = specialSigns;
        }
    }


    get length(): number {
        return this._length;
    }

    get upperCase(): boolean {
        return this._upperCase;
    }

    get specialSigns(): boolean {
        return this._specialSigns;
    }

    get easy(): boolean {
        return this._easy;
    }


}
