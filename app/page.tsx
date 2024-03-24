import { Fragment } from 'react'
import classes from './page.module.scss'

export default function Home() {
	return (
		<Fragment>
			<main>
			</main>
			<footer>
				<div className={classes.attribution}>
					Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>Frontend Mentor</a>. Coded by <a href='https://github.com/BartqD'>Bartosz</a>.
				</div>
			</footer>
		</Fragment>
	)
}
