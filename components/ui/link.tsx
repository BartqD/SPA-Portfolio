import React from 'react'
import Link from 'next/link'
import classes from './link.module.scss'

interface PageLinkProps {
	href: string
	children: React.ReactNode
}

const PageLink: React.FC<PageLinkProps> = ({href, children}) => {
	return (
		<Link className={classes.link} href={href}>
			{children}
		</Link>
	)
}

export default PageLink
