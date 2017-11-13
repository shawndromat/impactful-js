import paragraphProcessor from './paragraphProcessor'
import { flatMap } from 'lodash'

console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

const paragraphs = flatMap(['.paragraph', '.story-body p'], selector => [...document.querySelectorAll(selector)])
paragraphProcessor(paragraphs)
