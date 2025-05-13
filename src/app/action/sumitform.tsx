'use server'


type Prop = {
    e:string
}
export async function submitForm(e:Prop){
    return console.log(e);
}