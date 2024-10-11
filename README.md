# <img src="https://raw.githubusercontent.com/nexxtmove/clifton/pat/pat.png" height="40" alt="Pat Clifton"/> Clifton

Cross-origin message delivery

## Install

```bash
npm install clifton
```

## Usage

```js
import { Bus } from 'clifton'

const bus = new Bus('pat')

bus.deliver('letter', { name: 'Pat' })

bus.receive('letter', (message) => {
  alert(`Hi ${message.name}!`)
})
```
