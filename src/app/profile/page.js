"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Award,
  Bell,
  BookMarked,
  Camera,
  Heart,
  Home,
  ImageIcon,
  LinkIcon,
  MessageSquare,
  MoreHorizontal,
  Music,
  Share2,
  Smile,
  Trophy,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProfilePage() {
  const headerRef = useRef(null)
  const { scrollY } = useScroll()
  const [selectedImage, setSelectedImage] = useState(null)
  const [reactions, setReactions] = useState({
    likes: 2500,
    comments: 45,
    shares: 12,
    isLiked: false,
    isBookmarked: false,
  })
  const [friends, setFriends] = useState(
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      name: `Friend ${i + 1}`,
      avatar: "/placeholder.svg",
      mutualFriends: Math.floor(Math.random() * 10),
      status: "Online",
      lastActive: "2 hours ago",
      isFollowing: true,
    })),
  )

  // Parallax effect for header
  const headerY = useTransform(scrollY, [0, 300], [0, 150])
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0.3])

  // Sample gallery images
  const galleryImages = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    src: "/placeholder.svg",
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 20),
  }))

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-14 items-center">
          <nav className="flex flex-1 items-center gap-6">
            <Link href="#" className="flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">SocialHub</span>
            </Link>
            <div className="flex gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Home className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Home</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-600" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Notifications</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MessageSquare className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Messages</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Music className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </motion.header>

      {/* Profile Header */}
      <motion.div
        ref={headerRef}
        style={{ y: headerY, opacity: headerOpacity }}
        className="relative h-[300px] w-full overflow-hidden"
      >
        <Image
          src="/placeholder.svg"
          alt="Cover photo"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          width={1200}
          height={300}
          priority
        />
        <Button variant="ghost" size="icon" className="absolute right-4 top-4 bg-background/80 backdrop-blur-sm">
          <Camera className="h-4 w-4" />
        </Button>
      </motion.div>

      <div className="container relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute -top-24 flex items-end gap-4"
        >
          <div className="relative">
            <Avatar className="h-32 w-32 border-4 border-background transition-transform duration-300 hover:scale-105">
              <AvatarImage src="/placeholder.svg" alt="Profile picture" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button
              variant="ghost"
              size="icon"
              className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-background"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <div className="mb-4 grid gap-1">
            <h1 className="text-2xl font-bold">Jane Doe</h1>
            <p className="text-sm text-muted-foreground">Senior Product Designer • San Francisco, CA</p>
            <div className="flex gap-2 pt-2">
              <Badge variant="secondary">Product Design</Badge>
              <Badge variant="secondary">UX</Badge>
              <Badge variant="secondary">Leadership</Badge>
            </div>
          </div>
        </motion.div>
      </div>

      <main className="container py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_300px]">
          <div className="grid gap-8">
            {/* Stats Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid gap-2 sm:gap-4 sm:grid-cols-3"
            >
              <Card>
                <CardContent className="flex flex-col items-center gap-2 p-6">
                  <Users className="h-8 w-8 text-primary" />
                  <div className="text-2xl font-bold">2.5k</div>
                  <p className="text-xs text-muted-foreground">Connections</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center gap-2 p-6">
                  <Trophy className="h-8 w-8 text-primary" />
                  <div className="text-2xl font-bold">15</div>
                  <p className="text-xs text-muted-foreground">Achievements</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center gap-2 p-6">
                  <Award className="h-8 w-8 text-primary" />
                  <div className="text-2xl font-bold">98</div>
                  <p className="text-xs text-muted-foreground">Endorsements</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Posts Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid gap-6"
            >
              {/* Create Post Card */}
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="grid gap-4">
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <Input placeholder="What's on your mind?" className="border-0 bg-muted px-3 py-2 text-sm" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-t pt-4">
                      <div className="flex gap-4">
                        <Button variant="ghost" size="sm" className="gap-2">
                          <ImageIcon className="h-4 w-4" />
                          Photo
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Smile className="h-4 w-4" />
                          Feeling
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <LinkIcon className="h-4 w-4" />
                          Link
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <Select defaultValue="public">
                          <SelectTrigger className="w-[110px]">
                            <SelectValue placeholder="Privacy" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">Public</SelectItem>
                            <SelectItem value="friends">Friends</SelectItem>
                            <SelectItem value="private">Private</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button>Post</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Photo Gallery */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between p-6">
                  <h3 className="font-semibold">Photos</h3>
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    {galleryImages.map((image, i) => (
                      <motion.div
                        key={image.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative aspect-square overflow-hidden rounded-lg"
                      >
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="w-full h-full">
                              <Image
                                src={image.src || "/placeholder.svg"}
                                alt={`Gallery image ${image.id}`}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                width={300}
                                height={300}
                              />
                            </button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>Photo</DialogTitle>
                              <DialogDescription>Posted on January 20, 2024</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4">
                              <Image
                                src={image.src || "/placeholder.svg"}
                                alt={`Gallery image ${image.id}`}
                                className="rounded-lg"
                                width={800}
                                height={600}
                              />
                              <div className="flex items-center gap-4">
                                <Button variant="ghost" size="sm" className="gap-2">
                                  <Heart className="h-4 w-4" />
                                  {image.likes}
                                </Button>
                                <Button variant="ghost" size="sm" className="gap-2">
                                  <MessageSquare className="h-4 w-4" />
                                  {image.comments}
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                          <div className="absolute bottom-2 left-2 flex items-center gap-2 text-white">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 rounded-full p-0 text-white hover:text-white"
                            >
                              <Heart className="h-4 w-4" />
                            </Button>
                            <span className="text-sm">{image.likes}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 rounded-full p-0 text-white hover:text-white"
                            >
                              <MessageSquare className="h-4 w-4" />
                            </Button>
                            <span className="text-sm">{image.comments}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Friends Section */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between p-6">
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Friends</h3>
                    <p className="text-sm text-muted-foreground">You have {friends.length} friends</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {friends.map((friend, i) => (
                      <motion.div
                        key={friend.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="grid gap-2"
                      >
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <button className="group relative w-full">
                              <Avatar className="h-20 w-20 mx-auto border-2 border-background transition-transform duration-300 group-hover:scale-105">
                                <AvatarImage src={friend.avatar} />
                                <AvatarFallback>{friend.name[0]}</AvatarFallback>
                              </Avatar>
                              <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-background bg-green-500" />
                            </button>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80" align="center">
                            <div className="flex flex-col items-center gap-4">
                              <Avatar className="h-20 w-20">
                                <AvatarImage src={friend.avatar} />
                                <AvatarFallback>{friend.name[0]}</AvatarFallback>
                              </Avatar>
                              <div className="grid gap-1 text-center">
                                <h4 className="text-base font-semibold">{friend.name}</h4>
                                <p className="text-sm text-muted-foreground">{friend.mutualFriends} mutual friends</p>
                                <p className="text-xs text-muted-foreground">Last active {friend.lastActive}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button
                                  size="sm"
                                  variant={friend.isFollowing ? "secondary" : "default"}
                                  onClick={() => {
                                    setFriends(
                                      friends.map((f) =>
                                        f.id === friend.id ? { ...f, isFollowing: !f.isFollowing } : f,
                                      ),
                                    )
                                  }}
                                >
                                  {friend.isFollowing ? "Following" : "Follow"}
                                </Button>
                                <Button size="sm" variant="outline">
                                  Message
                                </Button>
                              </div>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                        <div className="text-center">
                          <div className="text-sm font-medium truncate">{friend.name}</div>
                          <div className="text-xs text-muted-foreground">{friend.status}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Post */}
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 gap-4">
                      <div className="flex items-start justify-between">
                        <div className="grid gap-1">
                          <div className="font-semibold">Jane Doe</div>
                          <div className="text-sm text-muted-foreground">2 hours ago</div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid gap-4">
                        <p>Just achieved a major milestone in our latest design project! 🎉</p>
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                          <Image
                            src="/placeholder.svg"
                            alt="Post image"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-2"
                          onClick={() =>
                            setReactions((prev) => ({
                              ...prev,
                              likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1,
                              isLiked: !prev.isLiked,
                            }))
                          }
                        >
                          <Heart
                            className={`h-4 w-4 ${
                              reactions.isLiked ? "fill-red-500 text-red-500" : ""
                            } transition-colors`}
                          />
                          <span className="text-sm">{reactions.likes.toLocaleString()}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <MessageSquare className="h-4 w-4" />
                          <span className="text-sm">{reactions.comments}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Share2 className="h-4 w-4" />
                          <span className="text-sm">{reactions.shares}</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-2 ml-auto"
                          onClick={() =>
                            setReactions((prev) => ({
                              ...prev,
                              isBookmarked: !prev.isBookmarked,
                            }))
                          }
                        >
                          <BookMarked
                            className={`h-4 w-4 ${reactions.isBookmarked ? "fill-primary text-primary" : ""}`}
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Side Panel */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid gap-6"
          >
            {/* Achievements */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between p-6">
                <h3 className="font-semibold">Achievements</h3>
                <Trophy className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent className="grid gap-4 p-4 sm:p-6 pt-0">
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Social Butterfly</div>
                    <span className="text-sm text-muted-foreground">85/100</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Content Creator</div>
                    <span className="text-sm text-muted-foreground">45/50</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Trendsetter</div>
                    <span className="text-sm text-muted-foreground">28/30</span>
                  </div>
                  <Progress value={93} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Trending */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between p-6">
                <h3 className="font-semibold">Trending</h3>
                <BookMarked className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[300px]">
                  <div className="grid">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="grid gap-2 border-b p-4 transition-colors hover:bg-muted/50"
                      >
                        <div className="font-medium">Design Trends {2024 - i}</div>
                        <p className="text-sm text-muted-foreground">
                          The latest design trends that are shaping the industry...
                        </p>
                        <div className="flex gap-2">
                          <Badge variant="secondary">Design</Badge>
                          <Badge variant="secondary">Trends</Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
