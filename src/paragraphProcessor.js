import { each } from 'lodash'

export default function paragraphProcessor (paragraphs) {
  each(paragraphs, p => { console.log(p.innerHTML) })
}
