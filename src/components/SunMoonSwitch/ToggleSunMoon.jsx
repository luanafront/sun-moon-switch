import './ToggleSunMoon.css'

export const ToggleSunMoon = ({isSun}) => {
	const sunBeamClass = isSun ? 'sunMoon__sunbeam sunMoon__sunbeam--sun' : 'sunMoon__sunbeam sunMoon__sunbeam--moon'
	const sunMoonClass = isSun ? 'sunMoon sunMoon--sun' : 'sunMoon sunMoon--moon'
	return (
		<div className='toggleSunMoonBox'>
			<div className={sunMoonClass}>
				<div className={sunBeamClass}></div>
				<div className={sunBeamClass}></div>
				<div className={sunBeamClass}></div>
				<div className={sunBeamClass}></div>
				<div className={sunBeamClass}></div>
				<div className={sunBeamClass}></div>
				<div className={sunBeamClass}></div>
				<div className={sunBeamClass}></div>
			</div>
		</div>
	)
}
