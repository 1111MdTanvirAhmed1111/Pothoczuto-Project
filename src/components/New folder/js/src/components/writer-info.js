import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export function WriterInfo({ author, date }) {
    return (<Card className="mb-8">
      <CardContent className="flex items-center gap-4 p-4">
        <Avatar>
          <AvatarImage src={`https://ui-avatars.com/api/?name=${author}`}/>
          <AvatarFallback>{author.split(' ').map(n => n[0]).join('').toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          {/* <h3 className="font-semibold">{author}</h3> */}
          <h3 className="font-semibold">{author}</h3>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </CardContent>
    </Card>);
}
