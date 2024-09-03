import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js',
}

export default function Home() {
  return (
    <div className="h-[80vh] items-center justify-center flex border rounded-md">
      Hello, Home Page!
    </div>
  );
}
