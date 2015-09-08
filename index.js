/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	class: {
		type: 'string'
	},
	onClick: {
		type: 'function'
	},
	type: {
		type: 'string'
	}
};

function render({props}) {
	const {children, onClick, type} = props;

	return (
		<button class={['Button', props.class]} onClick={onClick} type={type}>
			{children}
		</button>
	);
}

export default {propTypes, render};
