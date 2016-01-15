import assertElement from 'assert-element';
import componentMock from 'component-mock';
import test from 'ava';
import m from './dist';

test(() => {
	const mock = componentMock(m);
	const el = mock.render({props: {
		class: 'Button--primary',
		disabled: true
	}});

	assertElement.isNode(el, 'button');
	assertElement.hasClass(el, 'Button');
	assertElement.hasClass(el, 'Button--primary');
	assertElement.hasAttribute(el, 'disabled');
});
