import type { Metadata } from 'next'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'

export const metadata: Metadata = {
	title: '',
	description: '',
}

const spaceGrotesk = Space_Grotesk({ weight: ['400','600', '700'], subsets: ['latin'] })

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={spaceGrotesk.className}>{children}</body>
		</html>
	)
}
