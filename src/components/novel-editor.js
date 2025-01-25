
import { Editor } from "novel";
import { Card, CardContent } from "@/components/ui/card";


export default function NovelEditor({ setContent, content, title }) {
  return (
    <Card className="">
      <CardContent>
        <h2 className="pt-4 pb-3">{title}</h2>
        <Editor
          defaultValue={{
            type: "doc",
            content: [],
          }}
          onDebouncedUpdate={(editor) => {
            setContent(editor.getHTML());
          }}
          disableLocalStorage={true}
          className="rounded-md border shadow-none"
        />
      </CardContent>
    </Card>
  );
}