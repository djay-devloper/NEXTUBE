// The purpose of the ApiErrors class is to standardize how errors are formatted and returned across your entire application.

class ApiErrors extends Error{
    constructor(
        statusCode,
        message= "Somethinf went wrong",
        errors= [],
        stack= ""
    ){
        // This calls the constructor of the parent Error class,
        super(message)

        this.statusCode= statusCode
        this.data= null
        this.message= message
        this.success= false;
        this.errors= errors

        if(stack){
            this.statck= stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiErrors}