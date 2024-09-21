"use client"

import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter()
  return (<div>
    <h1>Contact page</h1>
    <button type="button" onClick={()=>router.push('/')}>Home</button>
  </div>);
}