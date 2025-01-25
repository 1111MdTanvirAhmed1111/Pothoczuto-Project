// components/CommentsCard.js
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Button } from '@/components/ui/button';
import { deleteComment } from '@/lib/comment-actions';
import EditComment from './edit-comment';

const CommentsCard = ({ author, date, _id,content}) => {
  return (

 <Card className="my-4"> 
            <CardContent className="pt-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={`https://ui-avatars.com/api/?name=${author}`} />
                    <AvatarFallback>{author}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{author}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(date).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="space-x-2">
              


              {/* <EditComment content={content} id={_id}/> */}
                  {/* <Button variant="outline" size="sm" onClick={deleteComment.bind(null,_id)}>
                    Delete
                  </Button> */}
                </div>
              </div>
              <p className="text-gray-700">{content}</p>
            </CardContent>
          </Card>
  );
};

export default CommentsCard;
