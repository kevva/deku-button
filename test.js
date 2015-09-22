import assertElement from 'assert-element';
import componentMock from 'component-mock';
import test from 'ava';
import Button from './';

test(t => {
	const mock = componentMock(Button);
	const el = mock.render({props: {
		class: 'Button--primary',
		disabled: true
	}});

	assertElement.isNode(el, 'button');
	assertElement.hasClass(el, 'Button');
	assertElement.hasClass(el, 'Button--primary');
	assertElement.hasAttribute(el, 'disabled');

	t.end();
});
