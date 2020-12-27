# React Use Scroll Effects

> React Provider Component to add a smooth scroll effect 😍

[![NPM](https://img.shields.io/npm/v/react-use-scroll-effects.svg)](https://www.npmjs.com/package/react-use-scroll-effects) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Live demo: [https://react-smooth-scroll-effect.netlify.app/](https://react-smooth-scroll-effect.netlify.app/)

## Install

```bash
npm install --save react-use-scroll-effects
```

## Usage

```jsx
import React from 'react'

import { UseEffectScroll } from 'react-use-scroll-effects'
import 'react-use-scroll-effects/dist/index.css'

const App = () => {
  return (
    <UseEffectScroll>
      <section className='bgGreen'>
        <h1>Section 1</h1>
      </section>
      <section className='bgOrange'>
        <h1>Section 2</h1>
      </section>
      <section className='bgBlue'>
        <h1>Section 3</h1>
      </section>
      <section className='bgGrey'>
        <h1>Section 4</h1>
      </section>
    </UseEffectScroll>
  )
}

export default App
```

## License

MIT © [saidMounaim](https://github.com/saidMounaim)
