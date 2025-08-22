import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { ArrowLeft, Search, Users, BookOpen, MessageCircle, Calendar, Pin, Plus, Settings, Star, Download, Eye } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function GroupsPage({ user, onNavigate, onLogout }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCollege, setSelectedCollege] = useState(user.college);
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    type: '',
    stream: ''
  });

  const colleges = [
    {
      id: 1,
      name: 'IIT Delhi',
      members: 2458,
      posts: 1234,
      avatar: 'https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop&crop=face',
      description: 'Official community for IIT Delhi students',
      streams: ['Engineering', 'Research'],
      isJoined: true,
      moderators: ['Dr. Rajesh Kumar', 'Prof. Priya Sharma']
    },
    {
      id: 2,
      name: 'AIIMS Delhi',
      members: 1876,
      posts: 892,
      avatar: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop',
      description: 'Medical students community at AIIMS',
      streams: ['Medical', 'Research'],
      isJoined: false,
      moderators: ['Dr. Vikram Singh']
    },
    {
      id: 3,
      name: 'NIT Surathkal',
      members: 1654,
      posts: 743,
      avatar: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop',
      description: 'NIT Surathkal student hub',
      streams: ['Engineering', 'Technology'],
      isJoined: false,
      moderators: ['Prof. Ananya Patel']
    },
    {
      id: 4,
      name: 'DU - Miranda House',
      members: 987,
      posts: 456,
      avatar: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100&fit=crop',
      description: 'Delhi University Miranda House community',
      streams: ['Arts', 'Commerce', 'Science'],
      isJoined: false,
      moderators: ['Dr. Neha Gupta']
    }
  ];

  const collegePosts = [
    {
      id: 1,
      title: 'CSE Semester 6 Curriculum Update - Important Changes',
      content: 'The Computer Science department has announced important changes to the semester 6 curriculum. New subjects include Advanced Machine Learning and Blockchain Technology...',
      author: 'Dr. Rajesh Kumar',
      authorAvatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=rajesh',
      role: 'Professor',
      type: 'announcement',
      stream: 'Engineering',
      time: '2 hours ago',
      likes: 45,
      comments: 12,
      isPinned: true,
      tags: ['Curriculum', 'CSE', 'Important']
    },
    {
      id: 2,
      title: 'Sharing Complete Notes: Data Structures & Algorithms',
      content: 'I\'ve compiled comprehensive notes for DSA covering all topics from our syllabus. Includes solved examples and practice problems...',
      author: 'Priya Sharma',
      authorAvatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=priya',
      role: 'Student',
      type: 'notes',
      stream: 'Engineering',
      time: '5 hours ago',
      likes: 38,
      comments: 8,
      downloads: 124,
      isPinned: false,
      tags: ['Notes', 'DSA', 'Study Material']
    },
    {
      id: 3,
      title: 'Mid-Term Exam Schedule Released',
      content: 'The mid-term examination schedule for all engineering streams has been released. Please check the notice board for detailed timetable...',
      author: 'Academic Office',
      authorAvatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=academic',
      role: 'Official',
      type: 'announcement',
      stream: 'All Streams',
      time: '1 day ago',
      likes: 67,
      comments: 23,
      isPinned: true,
      tags: ['Exams', 'Schedule', 'Important']
    },
    {
      id: 4,
      title: 'Study Group for Machine Learning - Join Us!',
      content: 'Starting a study group for Machine Learning course. We\'ll meet every weekend to discuss concepts and solve assignments together...',
      author: 'Rahul Gupta',
      authorAvatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=rahul',
      role: 'Student',
      type: 'discussion',
      stream: 'Engineering',
      time: '2 days ago',
      likes: 29,
      comments: 15,
      isPinned: false,
      tags: ['Study Group', 'ML', 'Collaboration']
    },
    {
      id: 5,
      title: 'Campus Placement Drive - Microsoft, Google, Amazon',
      content: 'Major tech companies are visiting campus next month for placements. Preparation resources and previous year questions available...',
      author: 'Placement Cell',
      authorAvatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=placement',
      role: 'Official',
      type: 'announcement',
      stream: 'Engineering',
      time: '3 days ago',
      likes: 156,
      comments: 45,
      isPinned: false,
      tags: ['Placements', 'Companies', 'Career']
    }
  ];

  const curriculumData = [
    {
      semester: 'Semester 6',
      stream: 'Computer Science Engineering',
      subjects: [
        { code: 'CS601', name: 'Advanced Database Systems', credits: 4, type: 'Core' },
        { code: 'CS602', name: 'Machine Learning', credits: 4, type: 'Core' },
        { code: 'CS603', name: 'Computer Networks', credits: 4, type: 'Core' },
        { code: 'CS604', name: 'Software Engineering', credits: 3, type: 'Core' },
        { code: 'CS605', name: 'Blockchain Technology', credits: 3, type: 'Elective' },
        { code: 'CS606', name: 'Project Work', credits: 2, type: 'Project' }
      ]
    },
    {
      semester: 'Semester 5',
      stream: 'Computer Science Engineering',
      subjects: [
        { code: 'CS501', name: 'Design and Analysis of Algorithms', credits: 4, type: 'Core' },
        { code: 'CS502', name: 'Computer Graphics', credits: 4, type: 'Core' },
        { code: 'CS503', name: 'Operating Systems', credits: 4, type: 'Core' },
        { code: 'CS504', name: 'Compiler Design', credits: 4, type: 'Core' },
        { code: 'CS505', name: 'Web Technologies', credits: 3, type: 'Elective' }
      ]
    }
  ];

  const resources = [
    {
      id: 1,
      title: 'IIT Delhi Academic Calendar 2024',
      type: 'document',
      downloads: 2341,
      uploadedBy: 'Academic Office',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'CSE Department Handbook',
      type: 'document',
      downloads: 1876,
      uploadedBy: 'CSE Department',
      date: '2024-02-01'
    },
    {
      id: 3,
      title: 'Campus Map & Facilities Guide',
      type: 'document',
      downloads: 3421,
      uploadedBy: 'Student Affairs',
      date: '2024-01-10'
    },
    {
      id: 4,
      title: 'Library Resources & Database Access',
      type: 'link',
      downloads: 987,
      uploadedBy: 'Central Library',
      date: '2024-02-15'
    }
  ];

  const handleCreatePost = () => {
    console.log('Creating post:', newPost);
    setIsCreatingPost(false);
    setNewPost({ title: '', content: '', type: '', stream: '' });
  };

  const handleJoinCollege = (collegeId) => {
    console.log('Joining college:', collegeId);
  };

  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getPostTypeIcon = (type) => {
    switch (type) {
      case 'announcement': return <Pin className="w-4 h-4 text-blue-600" />;
      case 'notes': return <BookOpen className="w-4 h-4 text-green-600" />;
      case 'discussion': return <MessageCircle className="w-4 h-4 text-purple-600" />;
      default: return <MessageCircle className="w-4 h-4 text-gray-600" />;
    }
  };

  const getPostTypeColor = (type) => {
    switch (type) {
      case 'announcement': return 'bg-blue-100 text-blue-700';
      case 'notes': return 'bg-green-100 text-green-700';
      case 'discussion': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => onNavigate('dashboard')}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <h1 className="text-xl font-bold">College Groups & Communities</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search colleges..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
              
              <Dialog open={isCreatingPost} onOpenChange={setIsCreatingPost}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Create New Post</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Post Title</Label>
                      <Input
                        placeholder="What would you like to share?"
                        value={newPost.title}
                        onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Content</Label>
                      <Textarea
                        placeholder="Share your thoughts, resources, or announcements..."
                        rows={4}
                        value={newPost.content}
                        onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Post Type</Label>
                        <Select value={newPost.type} onValueChange={(value) => setNewPost({...newPost, type: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="discussion">Discussion</SelectItem>
                            <SelectItem value="notes">Study Notes</SelectItem>
                            <SelectItem value="announcement">Announcement</SelectItem>
                            <SelectItem value="question">Question</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Target Stream</Label>
                        <Select value={newPost.stream} onValueChange={(value) => setNewPost({...newPost, stream: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select stream" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Streams</SelectItem>
                            <SelectItem value="engineering">Engineering</SelectItem>
                            <SelectItem value="medical">Medical</SelectItem>
                            <SelectItem value="arts">Arts</SelectItem>
                            <SelectItem value="commerce">Commerce</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setIsCreatingPost(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleCreatePost}>
                        Create Post
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - College List */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  My Colleges
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {filteredColleges.map((college) => (
                  <div 
                    key={college.id} 
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedCollege === college.name ? 'border-primary bg-primary/10' : 'hover:bg-muted/50'
                    }`}
                    onClick={() => setSelectedCollege(college.name)}
                  >
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={college.avatar} />
                        <AvatarFallback>{college.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{college.name}</div>
                        <div className="text-sm text-muted-foreground">{college.members} members</div>
                      </div>
                      {college.isJoined ? (
                        <Badge className="bg-green-100 text-green-700">Joined</Badge>
                      ) : (
                        <Button size="sm" variant="outline" onClick={() => handleJoinCollege(college.id)}>
                          Join
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Academic Calendar
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Course Catalog
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Faculty Directory
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  College Resources
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="feed" className="space-y-6">
              <TabsList>
                <TabsTrigger value="feed">College Feed</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="members">Members</TabsTrigger>
              </TabsList>
              
              <TabsContent value="feed" className="space-y-6">
                {/* College Info Header */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={colleges.find(c => c.name === selectedCollege)?.avatar} />
                        <AvatarFallback>{selectedCollege?.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-2">{selectedCollege}</h2>
                        <p className="text-muted-foreground mb-3">
                          {colleges.find(c => c.name === selectedCollege)?.description}
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{colleges.find(c => c.name === selectedCollege)?.members} members</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{colleges.find(c => c.name === selectedCollege)?.posts} posts</span>
                          </div>
                          <div className="flex space-x-2">
                            {colleges.find(c => c.name === selectedCollege)?.streams.map((stream) => (
                              <Badge key={stream} variant="secondary">{stream}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Posts Feed */}
                <div className="space-y-4">
                  {collegePosts.map((post) => (
                    <Card key={post.id} className={`${post.isPinned ? 'border-blue-200 bg-blue-50' : ''}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={post.authorAvatar} />
                            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-2">
                              {post.isPinned && <Pin className="w-4 h-4 text-blue-600" />}
                              <Badge className={getPostTypeColor(post.type)}>
                                {getPostTypeIcon(post.type)}
                                <span className="ml-1 capitalize">{post.type}</span>
                              </Badge>
                              <Badge variant="outline">{post.stream}</Badge>
                            </div>
                            
                            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                            <p className="text-muted-foreground mb-3">{post.content}</p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <span className="font-medium text-foreground">{post.author}</span>
                                <span>•</span>
                                <Badge variant="outline" className="text-xs">{post.role}</Badge>
                                <span>•</span>
                                <span>{post.time}</span>
                              </div>
                              
                              <div className="flex items-center space-x-4">
                                <Button variant="ghost" size="sm">
                                  <Star className="w-4 h-4 mr-1" />
                                  {post.likes}
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <MessageCircle className="w-4 h-4 mr-1" />
                                  {post.comments}
                                </Button>
                                {post.downloads && (
                                  <Button variant="ghost" size="sm">
                                    <Download className="w-4 h-4 mr-1" />
                                    {post.downloads}
                                  </Button>
                                )}
                              </div>
                            </div>
                            
                            {post.tags && (
                              <div className="flex space-x-2 mt-3">
                                {post.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    #{tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="curriculum" className="space-y-6">
                <div className="space-y-6">
                  {curriculumData.map((semester) => (
                    <Card key={semester.semester}>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>{semester.semester} - {semester.stream}</span>
                          <Badge variant="outline">Current</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {semester.subjects.map((subject) => (
                            <div key={subject.code} className="flex items-center justify-between p-3 border rounded-lg">
                              <div className="flex-1">
                                <div className="font-medium">{subject.name}</div>
                                <div className="text-sm text-muted-foreground">Code: {subject.code}</div>
                              </div>
                              <div className="flex items-center space-x-4">
                                <Badge variant={subject.type === 'Core' ? 'default' : 'secondary'}>
                                  {subject.type}
                                </Badge>
                                <div className="text-sm font-medium">{subject.credits} Credits</div>
                                <Button size="sm" variant="outline">
                                  <BookOpen className="w-4 h-4 mr-2" />
                                  Resources
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="resources" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {resources.map((resource) => (
                    <Card key={resource.id} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium mb-1">{resource.title}</h3>
                            <div className="text-sm text-muted-foreground mb-2">
                              Uploaded by {resource.uploadedBy} • {resource.date}
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Download className="w-4 h-4" />
                                <span>{resource.downloads} downloads</span>
                              </div>
                              <Button size="sm">
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="members" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'Dr. Rajesh Kumar', role: 'Professor', dept: 'Computer Science', avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=rajesh' },
                    { name: 'Priya Sharma', role: 'Student', dept: 'CSE - 3rd Year', avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=priya' },
                    { name: 'Rahul Gupta', role: 'Student', dept: 'CSE - 4th Year', avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=rahul' },
                    { name: 'Prof. Ananya Patel', role: 'Professor', dept: 'Mathematics', avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=ananya' },
                    { name: 'Vikram Singh', role: 'PhD Student', dept: 'Research', avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=vikram' },
                    { name: 'Neha Gupta', role: 'Student', dept: 'CSE - 2nd Year', avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=neha' }
                  ].map((member) => (
                    <Card key={member.name} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4 text-center">
                        <Avatar className="w-16 h-16 mx-auto mb-3">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <h3 className="font-medium">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                        <p className="text-sm text-muted-foreground">{member.dept}</p>
                        <Button size="sm" variant="outline" className="mt-3">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Connect
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}