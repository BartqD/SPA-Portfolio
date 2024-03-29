import React from 'react'
import classes from './projects.module.scss'
import Link from 'next/link'

interface PageLinkProps {
	href: string
	children: React.ReactNode
}

const PageLink: React.FC<PageLinkProps> = (href, children) => {
	return (
		<Link className={classes.link} href={href}>
			{children}
		</Link>
	)
}

export default PageLink
