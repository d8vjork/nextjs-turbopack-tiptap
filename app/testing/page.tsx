'use client';

import { EditorContent, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'

export default function Page() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: ''
  })

  return (
    <div className="space-y-4">
      <EditorContent editor={editor} style={{ background: 'white', padding: '4px', borderRadius: '6px' }} />
    </div>
  );
}