import { Fragment } from 'react'
import classes from './page.module.scss'
import SocialBar from '@/components/header/social-bar'
import AboutMe from '@/components/header/about-me'
import SkillListSection from '@/components/sections/skills/skills'
import ProjectListSection from '@/components/sections/projects/projects'
import ContactSection from '@/components/sections/contact/contact'

export default function Home() {
	return (
		<Fragment>
			<header className={`${classes.header} ${classes.wrapper} `}>
				<SocialBar></SocialBar>
				<AboutMe></AboutMe>
			</header>
			<main>
				<SkillListSection />
				<ProjectListSection />
				<ContactSection/>
			</main>
			<footer className={classes.footer} >
				<div className={classes.wrapper} ><SocialBar></SocialBar></div>
			</footer>
		</Fragment>
	)
}
