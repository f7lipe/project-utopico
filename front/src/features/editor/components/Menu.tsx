
import { Editor } from "@tiptap/react"

import {
    TbBold,
    TbItalic,
    TbStrikethrough,
    TbLetterH,
    TbList,
    TbListNumbers,
    TbPencil,
    TbDirectionHorizontal,
    TbCode,
    TbQuote,
    TbSeparator,
    TbArrowBackUp,
    TbArrowForwardUp,
    TbClearFormatting
} from "react-icons/tb"

interface MenuBarProps {
    editor: Editor | null
}

const MenuBar = ({ editor }: MenuBarProps) => {
    if (!editor) {
        return null
    }
    return (
        <div className="menuBar">
            {/* B I S and Highlight */}
            <div className="buttonGroup">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive("bold") ? "is_active" : ""}
                >
                    <TbBold />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive("italic") ? "is_active" : ""}
                >
                    <TbItalic />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive("strike") ? "is_active" : ""}
                >
                    <TbStrikethrough />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHighlight().run()}
                    className={editor.isActive("highlight") ? "is_active" : ""} 
                >
                    <TbPencil />   
                </button>
            </div>

            {/* Headings and lists */}
            <div className="buttonGroup">
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 2 }).run()
                    }
                    className={
                        editor.isActive("heading", { level: 2 }) ? "is_active" : ""
                    }
                >
                    <TbLetterH />
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 3 }).run()
                    }
                    className={
                        editor.isActive("heading", { level: 3 }) ? "is_active" : ""
                    }
                >
                    <TbLetterH className="heading3" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive("bulletList") ? "is_active" : ""}
                >
                    <TbList />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive("orderedList") ? "is_active" : ""}
                >
                    <TbListNumbers />
                </button>
            </div>

            {/* Quote and horizontal rule */}
            <div className="buttonGroup">
            <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive("blockquote") ? "is_active" : ""}
                >
                    <TbQuote />
                </button>
                <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                    <TbSeparator />
                </button>
            </div>

            {/* Code */}
            <div className="buttonGroup">
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    className={editor.isActive("code") ? "is_active" : ""}
                >
                    <TbDirectionHorizontal />
                </button>
                <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editor.isActive("codeBlock") ? "is_active" : ""}
                >
                    <TbCode />
                </button>
            </div>

            {/* Undo e Redo */}
            <div className="buttonGroup">
                <button onClick={() => editor.chain().undo().run()}>
                    <TbArrowBackUp />
                </button>
                <button onClick={() => editor.chain().redo().run()}>
                    <TbArrowForwardUp />
                </button>
                <button onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}>
                    <TbClearFormatting/>
                </button>

            </div>
        </div>
    )
}

export default MenuBar