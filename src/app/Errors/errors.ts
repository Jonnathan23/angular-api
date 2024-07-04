export class ModifyError extends Error {
     override name: string
    constructor(message:string){
        super(message) 
        this.name = "ErrorConvert"
    }
}

export class EmptyInputErrors extends Error{
    override name: string
    constructor(message:string){
        super(message);
        this.name = "EmptyInputsErros";
    }
}

