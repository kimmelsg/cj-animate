##Animate

###Install

```js
npm install @kimmel/animate --save
```

###Motivation

We needed a way to easily fade in components when they are added to the page. Most animation libraries seemed to do way too much and were complicated.
The way it works is simple. It sets `transition: all 1000ms ease-in-out` by default, which can be changed. Extra CSS is applied with the `start` and `end` props (see props below).
You can transition scale, opacity, whatever else you want.

###Example

```js
import Animate from '@kimmel/animate'

<Animate start={{opacity: 0}} end={{opacity: 1}}>
  {this.state.items.map((item, index) => <Test key={index} size={3} {...item} />)}
</Animate>
```

###Props

- `start`: css that will be applied when the component first mounts
- `end`: css applied shortly after mounting
- `speed`: transition speed in milliseconds
- `transition`: The [transition property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property) you want to target


###Problems

You can't trigger animations on hover or anything like that. It'll probably be added later when we need it. We're open to pull requests though :)
