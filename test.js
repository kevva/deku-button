/** @jsx dom */
import assertElement from 'assert-element';
import componentMock from 'component-mock';
import dom from 'magic-virtual-element';
import test from 'ava';
import Button from '.';

const mock = componentMock(Button);

test('renders children when passed in', () => {
	const children = <div class='Foo'/>;
	const m = mock.render({props: {children}});

	assertElement.hasChildren(m, x => {
		assertElement.hasClass(x, 'Foo');
	});
});

test('passes props when passed in', () => {
	const m = mock.render({props: {
		class: 'Foo',
		foo: 'bar'
	}});

	assertElement.hasClass(m, 'Foo');
	assertElement.hasAttribute(m, 'foo', 'bar');
});
