import React, {useRef} from 'react'
import Link from 'next/link'
import classes from './link.module.scss'


interface PageLinkProps {
	href: string
	children: React.ReactNode
	tabIndex?: number
}

const PageLink: React.FC<PageLinkProps> = ({href, children,tabIndex}) => {
	const linkRef = useRef<HTMLAnchorElement>(null);

	const handleClick = () => {
        if (linkRef.current) {
            linkRef.current.blur();
        }
    };


	return (
		<Link className={classes.link} ref={linkRef} target='blank' onClick={handleClick} tabIndex={tabIndex} href={href}>
			{children}
		</Link>
	)
}

export default PageLink
