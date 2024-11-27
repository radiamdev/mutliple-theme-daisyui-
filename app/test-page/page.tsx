import ThemeSwap from '@/components/ThemeSwap'
import React from 'react'

export default function Page() {
  return (
    <div className="h-screen">
      <div className="navbar p-0">
        <div className="flex-none">
          <ThemeSwap />
        </div>
      </div>
    </div>
  )
}
