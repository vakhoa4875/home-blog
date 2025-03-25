import { Editor, EditorTextChangeEvent } from "primereact/editor";
import { useState } from "react";

export default function BlogContentEditor() {
  const [text, setText] = useState<string>('');

  return (
    <div className="relative justify-content-center bg-white">
      <Editor value={text} onTextChange={(e: EditorTextChangeEvent) => setText(e.htmlValue ?? '')} />
    </div>
  )
}
