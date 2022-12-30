import "./lowlight"
import { lowlight } from 'lowlight/lib/core'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'

export default CodeBlockLowlight.configure({
    lowlight,
}) as any