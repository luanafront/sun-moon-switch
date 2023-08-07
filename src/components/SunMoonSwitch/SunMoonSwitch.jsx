import {ToggleSunMoon} from "./ToggleSunMoon";
import './SunMoonSwitch.css';

export const SunMoonSwitch = ({isClicked, onClick}) => {
	const switchClass = isClicked ? 'switch' : 'switch switch--clicked'
	const buttonClass = isClicked ? 'switch__button' : 'switch__button switch__button--clicked'
	const effectClass = isClicked ? 'switch__effect' : 'switch__effect switch__effect--clicked'

	return (
		<div className={switchClass} onClick={onClick}>
			<div className={buttonClass}>
				<ToggleSunMoon isSun={isClicked}/>
			</div>
			<div className='effectBox'>
				<div className={effectClass}></div>
				<div className={effectClass}></div>
			</div>
		</div>
	)
}
