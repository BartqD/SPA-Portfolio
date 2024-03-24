import type { Metadata } from 'next'
import './globals.css'
import { Outfit } from 'next/font/google'

export const metadata: Metadata = {
	title: '',
	description: '',
}

const outfit = Outfit({ weight: ['400', '700'], subsets: ['latin'] })

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={outfit.className}>{children}</body>
		</html>
	)
}
