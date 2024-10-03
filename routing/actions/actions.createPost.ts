'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createPost(id: string){
    try{
        // Call database
    }catch(error){
        // handle errors
    }

    revalidatePath('/posts') // update cached posts
    redirect(`/posts/${id}`) // navigate to the new post page
}