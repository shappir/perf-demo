import Image from 'next/image'
import Hello from './components/hello'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hello />
      <Image
              src="/puppy.jpg"
              alt="Vercel Logo"
              className="dark:invert"
              width={1200}
              height={417}
              priority
            />
    </main>
  )
}
