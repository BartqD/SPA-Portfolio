import React from 'react'
import Link from 'next/link'
import classes from './link.module.scss'

interface PageLinkProps {
	href: string
	children: React.ReactNode
	tabIndex?: number
}

const PageLink: React.FC<PageLinkProps> = ({href, children,tabIndex}) => {
	return (
		<Link className={classes.link} tabIndex={tabIndex} href={href}>
			{children}
		</Link>
	)
}

export default PageLink
