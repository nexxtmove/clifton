# 📬 Clifton

Easy-to-use messaging between iframes and their parent.

## Install

```bash
npm install clifton
```

## Usage

🚚 Create a `Bus` on all your pages:

```js
import { Bus } from 'clifton'

const bus = new Bus('letters')
```

📨 Then start delivering messages:

<table>
<tr>
<td>parent.html</td>
<td>iframe.html</td>
</tr>
<tr>
<td>

```js
bus.deliver('letter', { to: 'Jess' })

bus.receive('reply', msg => {})
```

</td>
<td>
    
```js
bus.receive('letter', msg => {
  bus.deliver('reply', { text: 'Meow' })
})
```

</td>
</tr>
</table>

<br>
<img src="https://raw.githubusercontent.com/nexxtmove/clifton/pat/pat.png" width="50" alt="Pat Clifton"/>
