import "/styles/style.css"
import { getNode ,insertLast } from 'kind-tiger'
import santa from "/src/assets/santa.png"
import  {btn}  from "/src/styles/style.module.css"

// console.log(s)

const app = getNode("#app")

const template = /* html */`
<figure class="container">
<img style="width:30vw" src="${santa}">
<figcaption>산타모자를쓴 범쌤</figcaption>
</figure>
<button type="button" class="${btn}">아아</button>
`

insertLast(app,template)