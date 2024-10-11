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

bus.deliver('letter', { name: 'Pat' })

bus.receive('letter', (message) => {
  alert(`Hi ${message.name}!`)
})
```

<br>
<img src="https://raw.githubusercontent.com/nexxtmove/clifton/pat/pat.png" width="75" alt="Pat Clifton"/>
