/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	class: {
		type: 'string'
	},
	disabled: {
		type: 'boolean'
	},
	name: {
		type: 'string'
	},
	onClick: {
		type: 'function'
	},
	type: {
		type: 'string'
	}
};

const render = ({props}) => {
	const {children, disabled, name, onClick, type} = props;

	return (
		<button class={['Button', props.class]} disabled={disabled} name={name} onClick={onClick} type={type}>
			{children}
		</button>
	);
};

export default {propTypes, render};
