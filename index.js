/** @jsx dom */
import dom from 'magic-virtual-element';

const render = ({props}) => {
	const {class: className, ...attributes} = props;
	return <button class={['Button', className]} {...attributes}/>;
};

export default {render};
