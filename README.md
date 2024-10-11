# 📬 Clifton

Easy-to-use messaging between iframes and their parent.

## Install

```bash
npm install clifton
```

## Usage

Create a `Bus` (with the same name) on all your pages:

```js
import { Bus } from 'clifton'

const bus = new Bus('letters')
```

Then start sending messages to each other:

<table>
<tr>
<td>parent.html</td>
<td>iframe.html</td>
</tr>
<tr>
<td>

```js
bus.deliver('letter', { from: 'Pat Clifton' })

bus.receive('reply', msg => {})
```

</td>
<td>
    
```js
bus.receive('letter', msg => {})

bus.deliver('reply', { text: 'meow' })
```

</td>
</tr>
</table>

<br>
<img src="https://raw.githubusercontent.com/nexxtmove/clifton/pat/pat.png" width="50" alt="Pat Clifton"/>
