'use server'

export async function submitForm(formData: unknown) {
    if(!(formData instanceof FormData)){
        throw new Error('Invalid form data');
    }
   
    return console.log(formData);
}