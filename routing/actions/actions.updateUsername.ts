'use server'

import { revalidateTag } from "next/cache"
import { permanentRedirect } from "next/navigation"

export async function updateUsername({username: string, formData: FormData}){

    try{
        // call database
    }catch(error){
        // handle errors
    }
    revalidateTag('username') // update all references to the username
    permanentRedirect(`/profile/${username}`) // Navigate to the new user profile
}