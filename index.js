/** @jsx dom */
import dom from 'magic-virtual-element';

const render = ({props}) => {
	const {class: className, children, ...attributes} = props;

	return (
		<button class={['Button', className]} {...attributes}>
			{children}
		</button>
	);
};

export default {render};
