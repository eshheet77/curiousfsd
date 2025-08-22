import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { ArrowLeft, Search, Plus, Upload, Download, Eye, Star, Filter, BookOpen, Sparkles, FileText, Users, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function NotesPage({ user, onNavigate, onLogout }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isUploadingNote, setIsUploadingNote] = useState(false);
  const [newNote, setNewNote] = useState({
    title: '',
    description: '',
    subject: '',
    type: '',
    tags: ''
  });

  const mockNotes = [
    {
      id: 1,
      title: 'Complete Data Structures & Algorithms Notes',
      description: 'Comprehensive notes covering arrays, linked lists, trees, graphs, sorting, and searching algorithms with examples.',
      author: 'Priya Sharma',
      authorAvatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=priya',
      college: 'IIT Delhi',
      subject: 'Computer Science',
      type: 'PDF',
      pages: 124,
      downloads: 2341,
      rating: 4.8,
      reviews: 156,
      uploadedDate: '2024-03-15',
      tags: ['DSA', 'Algorithms', 'Programming'],
      premium: false,
      verified: true
    },
    {
      id: 2,
      title: 'Organic Chemistry Reaction Mechanisms',
      description: 'Detailed notes on all major organic reactions with mechanisms, examples, and practice problems.',
      author: 'Dr. Rajesh Kumar',
      authorAvatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=rajesh',
      college: 'AIIMS Delhi',
      subject: 'Chemistry',
      type: 'PDF',
      pages: 89,
      downloads: 1876,
      rating: 4.9,
      reviews: 234,
      uploadedDate: '2024-03-12',
      tags: ['Organic Chemistry', 'Reactions', 'NEET'],
      premium: true,
      verified: true
    },
    {
      id: 3,
      title: 'Linear Algebra Quick Reference',
      description: 'Concise notes covering matrices, vector spaces, eigenvalues, and linear transformations.',
      author: 'Ananya Patel',
      authorAvatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=ananya',
      college: 'NIT Surathkal',
      subject: 'Mathematics',
      type: 'PDF',
      pages: 45,
      downloads: 987,
      rating: 4.6,
      reviews: 89,
      uploadedDate: '2024-03-10',
      tags: ['Linear Algebra', 'Mathematics', 'Engineering'],
      premium: false,
      verified: false
    },
    {
      id: 4,
      title: 'Physics Formulas & Derivations',
      description: 'Complete collection of physics formulas with step-by-step derivations for JEE preparation.',
      author: 'Vikram Singh',
      authorAvatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=vikram',
      college: 'IISC Bangalore',
      subject: 'Physics',
      type: 'PDF',
      pages: 67,
      downloads: 1543,
      rating: 4.7,
      reviews: 201,
      uploadedDate: '2024-03-08',
      tags: ['Physics', 'Formulas', 'JEE'],
      premium: false,
      verified: true
    }
  ];

  const handleUploadNote = () => {
    console.log('Uploading note:', newNote);
    setIsUploadingNote(false);
    setNewNote({ title: '', description: '', subject: '', type: '', tags: '' });
  };

  const filteredNotes = mockNotes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getRatingStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Header */}
      <header className="glass border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => onNavigate('dashboard')} className="hover-lift glass rounded-xl">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-elegant">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Notes & Study Materials
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    placeholder="Search notes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 glass border-white/20 focus-elegant bg-white/60 rounded-xl"
                  />
                </div>
              </div>
              
              <Dialog open={isUploadingNote} onOpenChange={setIsUploadingNote}>
                <DialogTrigger asChild>
                  <Button className="btn-premium hover-glow shadow-elegant">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Notes
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl glass border-white/20">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-slate-800">Upload Study Notes</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium">Title</Label>
                      <Input
                        placeholder="Enter note title..."
                        value={newNote.title}
                        onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                        className="glass border-white/20 focus-elegant bg-white/60"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium">Description</Label>
                      <Textarea
                        placeholder="Describe what these notes cover..."
                        rows={3}
                        value={newNote.description}
                        onChange={(e) => setNewNote({...newNote, description: e.target.value})}
                        className="glass border-white/20 focus-elegant bg-white/60"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-slate-700 font-medium">Subject</Label>
                        <Select value={newNote.subject} onValueChange={(value) => setNewNote({...newNote, subject: value})}>
                          <SelectTrigger className="glass border-white/20 focus-elegant bg-white/60">
                            <SelectValue placeholder="Select subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mathematics">Mathematics</SelectItem>
                            <SelectItem value="physics">Physics</SelectItem>
                            <SelectItem value="chemistry">Chemistry</SelectItem>
                            <SelectItem value="computer-science">Computer Science</SelectItem>
                            <SelectItem value="biology">Biology</SelectItem>
                            <SelectItem value="engineering">Engineering</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-700 font-medium">File Type</Label>
                        <Select value={newNote.type} onValueChange={(value) => setNewNote({...newNote, type: value})}>
                          <SelectTrigger className="glass border-white/20 focus-elegant bg-white/60">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pdf">PDF Document</SelectItem>
                            <SelectItem value="ppt">PowerPoint</SelectItem>
                            <SelectItem value="doc">Word Document</SelectItem>
                            <SelectItem value="images">Images</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium">Tags (comma-separated)</Label>
                      <Input
                        placeholder="e.g., calculus, derivatives, integration"
                        value={newNote.tags}
                        onChange={(e) => setNewNote({...newNote, tags: e.target.value})}
                        className="glass border-white/20 focus-elegant bg-white/60"
                      />
                    </div>
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center glass bg-white/40">
                      <Upload className="w-12 h-12 mx-auto mb-4 text-slate-400" />
                      <p className="text-lg mb-2 text-slate-700">Upload your files</p>
                      <p className="text-sm text-slate-500 mb-4">
                        Drag and drop files here, or click to browse
                      </p>
                      <Button variant="outline" className="btn-glass hover-lift">
                        Choose Files
                      </Button>
                    </div>
                    <div className="flex justify-end space-x-3">
                      <Button variant="outline" onClick={() => setIsUploadingNote(false)} className="btn-glass hover-lift">
                        Cancel
                      </Button>
                      <Button onClick={handleUploadNote} className="btn-premium hover-glow">
                        Upload Notes
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="glass border-white/20 shadow-elegant sticky top-24 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <Filter className="w-5 h-5 mr-2 text-purple-500" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-sm font-medium text-slate-700">Subject</Label>
                  <div className="mt-3 space-y-3">
                    {['Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'Biology'].map((subject) => (
                      <label key={subject} className="flex items-center space-x-3 cursor-pointer group">
                        <input type="checkbox" className="rounded border-slate-300 text-purple-600 focus:ring-purple-500" />
                        <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">{subject}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-slate-700">File Type</Label>
                  <div className="mt-3 space-y-3">
                    {['PDF', 'PowerPoint', 'Word Doc', 'Images'].map((type) => (
                      <label key={type} className="flex items-center space-x-3 cursor-pointer group">
                        <input type="checkbox" className="rounded border-slate-300 text-purple-600 focus:ring-purple-500" />
                        <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-slate-700">Rating</Label>
                  <div className="mt-3 space-y-3">
                    {[4, 3, 2].map((rating) => (
                      <label key={rating} className="flex items-center space-x-3 cursor-pointer group">
                        <input type="checkbox" className="rounded border-slate-300 text-purple-600 focus:ring-purple-500" />
                        <div className="flex items-center space-x-1">
                          {getRatingStars(rating)}
                          <span className="text-sm text-slate-600 ml-2">& up</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notes List */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="glass border-white/20 bg-white/30 p-1">
                <TabsTrigger 
                  value="all"
                  className="transition-all data-[state=active]:bg-white data-[state=active]:shadow-elegant"
                >
                  All Notes
                </TabsTrigger>
                <TabsTrigger 
                  value="popular"
                  className="transition-all data-[state=active]:bg-white data-[state=active]:shadow-elegant"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Popular
                </TabsTrigger>
                <TabsTrigger 
                  value="recent"
                  className="transition-all data-[state=active]:bg-white data-[state=active]:shadow-elegant"
                >
                  Recent
                </TabsTrigger>
                <TabsTrigger 
                  value="my-notes"
                  className="transition-all data-[state=active]:bg-white data-[state=active]:shadow-elegant"
                >
                  My Notes
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                {filteredNotes.map((note, index) => (
                  <Card 
                    key={note.id} 
                    className="glass border-white/20 shadow-elegant hover:shadow-luxury transition-all hover-lift cursor-pointer group"
                    style={{animationDelay: `${0.1 + index * 0.1}s`}}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-6">
                        {/* File Icon */}
                        <div className="w-16 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-elegant group-hover:scale-105 transition-transform">
                          <FileText className="w-8 h-8 text-white" />
                        </div>

                        {/* Note Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-3">
                                <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-elegant">
                                  {note.subject}
                                </Badge>
                                <Badge variant="secondary" className="bg-white/60">
                                  {note.type}
                                </Badge>
                                {note.premium && (
                                  <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                                    Premium
                                  </Badge>
                                )}
                                {note.verified && (
                                  <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                                    ✓ Verified
                                  </Badge>
                                )}
                              </div>
                              <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-purple-600 transition-colors">
                                {note.title}
                              </h3>
                              <p className="text-slate-600 mb-4 line-clamp-2">
                                {note.description}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                {getRatingStars(note.rating)}
                                <span className="text-sm font-medium text-slate-700 ml-2">{note.rating}</span>
                                <span className="text-sm text-slate-500">({note.reviews} reviews)</span>
                              </div>
                              <div className="flex items-center space-x-4 text-sm text-slate-500">
                                <span className="flex items-center space-x-1">
                                  <FileText className="w-4 h-4" />
                                  <span>{note.pages} pages</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Download className="w-4 h-4" />
                                  <span>{note.downloads}</span>
                                </span>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              <Button variant="outline" size="sm" className="btn-glass hover-lift">
                                <Eye className="w-4 h-4 mr-2" />
                                Preview
                              </Button>
                              <Button size="sm" className="btn-premium hover-glow">
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </Button>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex space-x-2">
                              {note.tags.map((tag) => (
                                <Badge 
                                  key={tag} 
                                  variant="secondary" 
                                  className="text-xs bg-slate-100 hover:bg-slate-200 transition-colors"
                                >
                                  #{tag}
                                </Badge>
                              ))}
                            </div>
                            
                            <div className="flex items-center space-x-3 text-sm text-slate-500">
                              <Avatar className="w-8 h-8 ring-2 ring-white/50">
                                <AvatarImage src={note.authorAvatar} />
                                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">
                                  {note.author.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium text-slate-700">{note.author}</div>
                                <div className="text-xs flex items-center space-x-2">
                                  <span>{note.college}</span>
                                  <span>•</span>
                                  <span className="flex items-center space-x-1">
                                    <Calendar className="w-3 h-3" />
                                    <span>{note.uploadedDate}</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="popular">
                <div className="space-y-6 animate-fade-in-up">
                  {filteredNotes
                    .sort((a, b) => b.downloads - a.downloads)
                    .slice(0, 3)
                    .map((note, index) => (
                    <Card 
                      key={note.id} 
                      className="glass border-white/20 shadow-elegant hover:shadow-luxury transition-all hover-lift cursor-pointer"
                      style={{animationDelay: `${0.1 + index * 0.1}s`}}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-elegant">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Most Popular
                          </Badge>
                          <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white">
                            {note.subject}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-slate-800">{note.title}</h3>
                        <p className="text-slate-600 mb-4">{note.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              {getRatingStars(note.rating)}
                              <span className="text-sm font-medium text-slate-700 ml-2">{note.rating}</span>
                            </div>
                            <span className="text-sm text-slate-500">{note.downloads} downloads</span>
                          </div>
                          <Button size="sm" className="btn-premium hover-glow">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
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