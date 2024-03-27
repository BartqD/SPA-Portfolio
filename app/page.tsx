import { Fragment } from 'react'
import classes from './page.module.scss'
import SocialBar from '@/components/header/social-bar'
import AboutMe from '@/components/header/about-me'

export default function Home() {
	return (
		<Fragment>
			<header className={`${classes.header} ${classes.wrapper} `}>
				<SocialBar></SocialBar>
				<AboutMe></AboutMe>
				<hr></hr>
			</header>
			<main className={`${classes.header} ${classes.wrapper} `}>
				<section>

				</section>
			</main>
			<footer>
			</footer>
		</Fragment>
	)
}
