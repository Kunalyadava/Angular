import { AbstractControl } from "@angular/forms";
export function passwordMatch(password:string,confirm_password:string){
    return function(form:AbstractControl){
        const passwordvalue=form.get(password)?.value
        const confirmPasswordValue=form.get(confirm_password)?.value
        if(passwordvalue==confirmPasswordValue){
            return null;
        }
        return {passwordMismatchError:true}
    }
}