import Placeholder from '@tiptap/extension-placeholder'
import { EDITOR_PLACEHOLDER } from '../data/constants'

export default Placeholder.configure({
    // Use a placeholder:
    placeholder: EDITOR_PLACEHOLDER,
    // Use different placeholders depending on the node type:
    // placeholder: ({ node }) => {
    //   if (node.type.name === 'heading') {
    //     return 'What’s the title?'
    //   }

    //   return 'Can you add some further context?'
    // },
})