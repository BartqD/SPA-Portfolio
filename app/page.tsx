import { Fragment } from 'react'
import classes from './page.module.scss'
import SocialBar from '@/components/header/social-bar'

export default function Home() {
	return (
		<Fragment>
			<header className={`${classes.header} ${classes.wrapper} `}>
				<SocialBar></SocialBar>

			</header>
			<main>
				<section></section>
			</main>
			<footer>
				<div className={classes.attribution}>
					Challenge by{' '}
					<a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
						Frontend Mentor
					</a>
					. Coded by <a href='https://github.com/BartqD'>Bartosz</a>.
				</div>
			</footer>
		</Fragment>
	)
}
