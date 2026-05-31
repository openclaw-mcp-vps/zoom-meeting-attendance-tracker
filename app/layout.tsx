import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zoom Attendance Tracker — Track Student Attendance Automatically',
  description: 'Automatically track student attendance duration in Zoom classes with detailed reports and alerts for teachers and training coordinators.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b379b782-9d50-4fa7-895a-d0134d64a861"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
