export class PasswordOption {
    private _name: string; 
    private _code: string; 
    private _inactive: boolean; 

    constructor(name: string, code: string, inactive: boolean) {
        this._name = name; 
        this._code = code; 
        this._inactive = inactive;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name; 
    }

    get code() {
        return this._code;
    }

    set code(code: string) {
        this._code = code; 
    }

    get inactive() {
        return this._inactive;
    }

    set inactive(inactive: boolean) {
        this._inactive = inactive; 
    }
}