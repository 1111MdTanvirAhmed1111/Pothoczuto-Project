import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function CommentForm({ initialContent = "", onSubmit, onCancel }) {
  const [content, setContent] = useState(initialContent)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(content)
    setContent("")
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment..."
        className="w-full p-2 mb-2"
      />
      <div className="flex justify-end gap-2">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" disabled={!content.trim()}>
          Submit
        </Button>
      </div>
    </form>
  )
}

