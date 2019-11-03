import paragraphProcessor from 'src/paragraphProcessor'
import flatMap from 'lodash.flatmap'

console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

const paragraphs = flatMap(['.paragraph', '.story-body p'], selector => [...document.querySelectorAll(selector)])
paragraphProcessor(paragraphs)
