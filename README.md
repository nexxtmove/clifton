# 📬 Clifton

Never miss a delivery between your iframes again! Clifton is your friendly neighborhood message service, ensuring your messages arrive safe and sound, no matter the weather.

## Install

🚏 Get on the road by installing clifton:

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
<img src="https://raw.githubusercontent.com/nexxtmove/clifton/pat/pat.gif" width="175" alt="Pat Clifton"/>
