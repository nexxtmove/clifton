# 📬 Clifton

Cross-origin message delivery

## Install

```bash
npm install clifton
```

## Usage

```js
import { Bus } from 'clifton'

const bus = new Bus('pat')

bus.send('letter', { name: 'Pat' })

bus.receive('letter', (message) => {
  alert(`Hi ${message.name}!`)
})
```
