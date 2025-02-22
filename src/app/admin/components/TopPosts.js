import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const topPosts = [
  { title: "10 Tips for Better React Performance", views: 15000, comments: 45, likes: 230 },
  { title: "Introduction to TypeScript", views: 12000, comments: 38, likes: 180 },
  { title: "CSS Grid vs Flexbox", views: 10000, comments: 32, likes: 150 },
  { title: "JavaScript ES6 Features Explained", views: 9500, comments: 30, likes: 140 },
  { title: "Building RESTful APIs with Node.js", views: 8800, comments: 28, likes: 120 },
]

export function TopPosts() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Views</TableHead>
          <TableHead>Comments</TableHead>
          <TableHead>Likes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topPosts.map((post) => (
          <TableRow key={post.title}>
            <TableCell className="font-medium">{post.title}</TableCell>
            <TableCell>{post.views.toLocaleString()}</TableCell>
            <TableCell>{post.comments}</TableCell>
            <TableCell>{post.likes}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

