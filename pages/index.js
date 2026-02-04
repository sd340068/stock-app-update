import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Redirect to your public HTML page
    window.location.href = '/index.html'
  }, [])

  return null
}