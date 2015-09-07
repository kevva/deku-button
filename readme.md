# deku-button

> Button component for deku


## Install

```
$ npm install --save deku-button
```


## Usage

```js
import Button from 'deku-button';

export function render() {
	function handle(e) {
		console.log(e.target.className);
		//=> 'Button'
	}

	return (
		<Button onClick={handle}>
			Click me!
		</Button>
	);
}
```


## License

MIT © [Kevin Mårtensson](http://github.com/kevva)
