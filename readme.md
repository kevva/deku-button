# deku-button [![Build Status](https://travis-ci.org/kevva/deku-button.svg?branch=master)](https://travis-ci.org/kevva/deku-button)

> Button component for deku


## Install

```
$ npm install --save deku-button
```


## Usage

```js
import Button from 'deku-button';

const handleClick = e => {
	console.log(e.target.className);
	//=> 'Button'
};

const render = () => {
	return (
		<Button onClick={handleClick}>
			Click me!
		</Button>
	);
};

export default {render};
```


## License

MIT © [Kevin Mårtensson](http://github.com/kevva)
