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
