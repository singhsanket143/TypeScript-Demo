/**
 * We want to define a common type for authentication forms
 * this common type will take multiple parameters
 *  - name of the form
 *  - how to handle submission of the form
 *  - how to handle reset of the form
 *  - what should be the text of the submitting button
 */

interface AuthForm {
    name: string,
    submitButtonText: string,
    onReset: (e : any) => void,
    onSubmit: (e : any) => void
}

const loginForm: AuthForm = {
    name: "Login form",
    submitButtonText: "Login",
    onReset: (e) => {
        // some impl
    },
    onSubmit: (e) => {
        // some impl
    }
}

console.log(loginForm)
