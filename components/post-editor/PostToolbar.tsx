/* eslint-disable @typescript-eslint/no-explicit-any */



export default function PostToolbar({editor}: any) {

  return (
    <div className="sticky top-14 z-50 flex gap-2 p-2 border-b border-border bg-muted/20 w-full">
      <button
        className={`px-2 py-1 rounded ${editor?.isActive("bold") ? "bg-primary text-primary-foreground" : "hover:bg-muted/30"} bg-card text-xs `}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        B
      </button>
      <button
        className={`px-2 py-1 rounded ${editor?.isActive("italic") ? "bg-primary text-primary-foreground" : "hover:bg-muted/30"} bg-card text-xs `}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        I
      </button>
      <button
        className={`px-2 py-1 rounded ${editor?.isActive("h1") ? "bg-primary text-primary-foreground" : "hover:bg-muted/30"} bg-card text-xs `}
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({
              level: 1,
            })
            .run()
        }
      >
        H1
      </button>
    </div>
  );
}
