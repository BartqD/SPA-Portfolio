import { Fragment } from 'react'
import classes from './page.module.scss'
import SocialBar from '@/components/header/social-bar'
import AboutMe from '@/components/header/about-me'
import SkillListSection from '@/components/skills/skills'

export default function Home() {
	return (
		<Fragment>
			<header className={`${classes.header} ${classes.wrapper} `}>
				<SocialBar></SocialBar>
				<AboutMe></AboutMe>
				<hr></hr>
			</header>
			<main className={`${classes.wrapper} `}>
			<SkillListSection></SkillListSection>
			
			</main>
			<footer>
			</footer>
		</Fragment>
	)
}
