/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	class: {
		type: 'string'
	},
	onClick: {
		type: 'function'
	}
};

function render({props}) {
	const {children, onClick} = props;

	return (
		<button class={['Button', props.class]} onClick={onClick}>
			{children}
		</button>
	);
}

export default {propTypes, render};
