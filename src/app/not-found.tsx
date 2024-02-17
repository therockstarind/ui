'use client'
import { Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <Image src="/icons/404.png" alt="" width={400} height={400} isBlurred />
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">Page not Found</h1>
        <p className="font-mono text-muted-foreground">
          Sorry, but we cant find that page or it has been deleted or removed
        </p>
      </div>
      <button
        onClick={() => router.push('/')}
        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-6 py-0.5 text-sm backdrop-blur-3xl">
          BACK TO HOME
        </span>
      </button>
    </div>
  )
}
