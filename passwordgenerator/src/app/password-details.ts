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
    /**
     *  Shows if the password should contain numbers.
     */
    private _numbers: boolean = true; 

    constructor (length: number = 10, upperCase: boolean = true, easy: boolean = false, numbers: boolean = true, specialSigns: boolean = true) {
        if (length != undefined) {
            this._length = length; 
        }
        if (upperCase != undefined) {
            this._upperCase = upperCase;   
        }
        if (easy != undefined) {
            this._easy = easy; 
        }
        if (numbers != undefined) {
            this._numbers = numbers; 
        }
        if (specialSigns != undefined) {
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

    get numbers(): boolean {
        return this._numbers;
    }

}
