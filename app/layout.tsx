import type { Metadata } from 'next'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'

export const metadata: Metadata = {
	title: 'Bartosz Drozdek portfolio website',
	description: 'Welcome to Bartosz Drozdek portfolio website. Explore my projects and learn more about me.',
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
