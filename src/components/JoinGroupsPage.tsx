import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { ArrowLeft, Search, Users, MapPin, GraduationCap, BookOpen, Sparkles, Lock, Globe, Code, Shuffle, Plus, Star, Calendar, TrendingUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';

export function JoinGroupsPage({ user, onNavigate, onLogout }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [groupCode, setGroupCode] = useState('');
  const [isJoiningWithCode, setIsJoiningWithCode] = useState(false);

  const availableGroups = [
    {
      id: 1,
      name: 'IIT Delhi - Computer Science',
      college: 'IIT Delhi',
      department: 'Computer Science & Engineering',
      members: 1247,
      description: 'Official CSE department group for sharing notes, assignments, and connecting with peers.',
      isPrivate: false,
      groupCode: 'IITD-CSE-2024',
      moderators: ['Dr. Rajesh Kumar', 'Prof. Anita Sharma'],
      subjects: ['Data Structures', 'Algorithms', 'Database Systems', 'Computer Networks'],
      recentActivity: '2 minutes ago',
      joinType: 'open',
      verified: true
    },
    {
      id: 2,
      name: 'AIIMS - MBBS Batch 2022',
      college: 'AIIMS Delhi',
      department: 'Medicine',
      members: 892,
      description: 'Connect with MBBS students, share medical notes, and discuss clinical cases.',
      isPrivate: true,
      groupCode: 'AIIMS-MBBS-22',
      moderators: ['Dr. Priya Singh', 'Dr. Vikram Patel'],
      subjects: ['Anatomy', 'Physiology', 'Biochemistry', 'Pathology'],
      recentActivity: '15 minutes ago',
      joinType: 'code',
      verified: true
    },
    {
      id: 3,
      name: 'NIT Surathkal - Mechanical Engineering',
      college: 'NIT Surathkal',
      department: 'Mechanical Engineering',
      members: 567,
      description: 'Mechanical engineering students community for project collaboration and study groups.',
      isPrivate: false,
      groupCode: 'NIT-MECH-2024',
      moderators: ['Prof. Suresh Reddy'],
      subjects: ['Thermodynamics', 'Fluid Mechanics', 'Machine Design', 'Manufacturing'],
      recentActivity: '1 hour ago',
      joinType: 'open',
      verified: true
    },
    {
      id: 4,
      name: 'DU - Economics Honors',
      college: 'Delhi University',
      department: 'Economics',
      members: 423,
      description: 'Economics honors students sharing research papers, notes, and discussing economic theories.',
      isPrivate: false,
      groupCode: 'DU-ECO-HON',
      moderators: ['Prof. Arjun Mehta'],
      subjects: ['Microeconomics', 'Macroeconomics', 'Statistics', 'Econometrics'],
      recentActivity: '3 hours ago',
      joinType: 'open',
      verified: false
    },
    {
      id: 5,
      name: 'IISC - Research Scholars',
      college: 'IISC Bangalore',
      department: 'Interdisciplinary',
      members: 234,
      description: 'PhD and research scholars from various departments collaborating on research projects.',
      isPrivate: true,
      groupCode: 'IISC-RESEARCH',
      moderators: ['Dr. Kavitha Nair', 'Dr. Rahul Joshi'],
      subjects: ['Research Methods', 'Publications', 'Conferences', 'Funding'],
      recentActivity: '6 hours ago',
      joinType: 'invite',
      verified: true
    }
  ];

  const myGroups = [
    {
      id: 1,
      name: 'IIT Delhi - Computer Science',
      role: 'Member',
      joinedDate: '2024-01-15',
      lastActive: '2 hours ago',
      unreadMessages: 12,
      avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=iitd'
    },
    {
      id: 2,
      name: 'Engineering Study Group',
      role: 'Admin',
      joinedDate: '2024-02-01',
      lastActive: '1 day ago',
      unreadMessages: 5,
      avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=engg'
    }
  ];

  const handleJoinGroup = (group) => {
    if (group.joinType === 'code') {
      setIsJoiningWithCode(true);
    } else if (group.joinType === 'open') {
      toast.success(`Successfully joined ${group.name}!`);
    } else {
      toast.error('This group requires an invitation to join.');
    }
  };

  const handleJoinWithCode = () => {
    if (!groupCode.trim()) {
      toast.error('Please enter a group code');
      return;
    }
    
    const group = availableGroups.find(g => g.groupCode.toLowerCase() === groupCode.toLowerCase());
    if (group) {
      toast.success(`Successfully joined ${group.name}!`);
      setIsJoiningWithCode(false);
      setGroupCode('');
    } else {
      toast.error('Invalid group code. Please check and try again.');
    }
  };

  const handleRandomJoin = () => {
    const openGroups = availableGroups.filter(g => g.joinType === 'open');
    const randomGroup = openGroups[Math.floor(Math.random() * openGroups.length)];
    toast.success(`Randomly joined ${randomGroup.name}!`);
  };

  const filteredGroups = availableGroups.filter(group =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.college.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Join Study Groups
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  placeholder="Search groups..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 w-80 glass border-white/20 focus-elegant bg-white/60 rounded-xl"
                />
              </div>
              
              <Dialog open={isJoiningWithCode} onOpenChange={setIsJoiningWithCode}>
                <DialogTrigger asChild>
                  <Button className="btn-premium hover-glow shadow-elegant">
                    <Code className="w-4 h-4 mr-2" />
                    Join with Code
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass border-white/20">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-slate-800">Join Group with Code</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium">Group Code</Label>
                      <Input
                        placeholder="Enter group code (e.g., IITD-CSE-2024)"
                        value={groupCode}
                        onChange={(e) => setGroupCode(e.target.value)}
                        className="glass border-white/20 focus-elegant bg-white/60"
                        onKeyPress={(e) => e.key === 'Enter' && handleJoinWithCode()}
                      />
                      <p className="text-sm text-slate-500">
                        Ask your classmates or check college notice boards for group codes.
                      </p>
                    </div>
                    <div className="flex justify-end space-x-3">
                      <Button variant="outline" onClick={() => setIsJoiningWithCode(false)} className="btn-glass hover-lift">
                        Cancel
                      </Button>
                      <Button onClick={handleJoinWithCode} className="btn-premium hover-glow">
                        Join Group
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button variant="outline" onClick={handleRandomJoin} className="btn-glass hover-lift">
                <Shuffle className="w-4 h-4 mr-2" />
                Random Join
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions */}
            <Card className="glass border-white/20 shadow-elegant animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <Plus className="w-5 h-5 mr-2 text-purple-500" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  onClick={() => setIsJoiningWithCode(true)} 
                  className="w-full justify-start btn-premium hover-glow"
                >
                  <Code className="w-4 h-4 mr-3" />
                  Join with Code
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleRandomJoin}
                  className="w-full justify-start btn-glass hover-lift"
                >
                  <Shuffle className="w-4 h-4 mr-3" />
                  Random Join
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => onNavigate('groups')}
                  className="w-full justify-start btn-glass hover-lift"
                >
                  <BookOpen className="w-4 h-4 mr-3" />
                  Browse All Groups
                </Button>
              </CardContent>
            </Card>

            {/* My Groups */}
            <Card className="glass border-white/20 shadow-elegant animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <Users className="w-5 h-5 mr-2 text-emerald-500" />
                  My Groups ({myGroups.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {myGroups.map((group) => (
                  <div key={group.id} className="flex items-center space-x-3 p-3 glass rounded-xl bg-white/40 hover-lift transition-all cursor-pointer">
                    <Avatar className="w-10 h-10 ring-2 ring-white/50">
                      <AvatarImage src={group.avatar} />
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">
                        {group.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate text-slate-800">{group.name}</div>
                      <div className="text-xs text-slate-500">{group.role}</div>
                      {group.unreadMessages > 0 && (
                        <Badge className="bg-red-500 text-white text-xs mt-1">
                          {group.unreadMessages} new
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Group Stats */}
            <Card className="glass border-white/20 shadow-elegant animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                  Group Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-sm text-slate-600">Access shared notes & materials</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-sm text-slate-600">Get assignment deadlines</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="text-sm text-slate-600">Connect with peers</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="text-sm text-slate-600">Access curriculum guides</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="discover" className="space-y-6">
              <TabsList className="glass border-white/20 bg-white/30 p-1">
                <TabsTrigger 
                  value="discover"
                  className="transition-all data-[state=active]:bg-white data-[state=active]:shadow-elegant"
                >
                  Discover Groups
                </TabsTrigger>
                <TabsTrigger 
                  value="popular"
                  className="transition-all data-[state=active]:bg-white data-[state=active]:shadow-elegant"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Popular
                </TabsTrigger>
                <TabsTrigger 
                  value="college"
                  className="transition-all data-[state=active]:bg-white data-[state=active]:shadow-elegant"
                >
                  My College
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="discover" className="space-y-6 animate-fade-in-up">
                {filteredGroups.map((group, index) => (
                  <Card key={group.id} className="glass border-white/20 shadow-elegant hover:shadow-luxury transition-all hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <h3 className="text-xl font-bold text-slate-800">{group.name}</h3>
                            <div className="flex items-center space-x-2">
                              {group.verified && (
                                <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs">
                                  ✓ Verified
                                </Badge>
                              )}
                              {group.isPrivate ? (
                                <Badge variant="outline" className="border-orange-200 text-orange-700 text-xs">
                                  <Lock className="w-3 h-3 mr-1" />
                                  Private
                                </Badge>
                              ) : (
                                <Badge variant="outline" className="border-green-200 text-green-700 text-xs">
                                  <Globe className="w-3 h-3 mr-1" />
                                  Public
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-6 text-sm text-slate-600 mb-4">
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span>{group.college}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <GraduationCap className="w-4 h-4" />
                              <span>{group.department}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="w-4 h-4" />
                              <span>{group.members} members</span>
                            </div>
                          </div>
                          
                          <p className="text-slate-600 mb-4">{group.description}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex space-x-2">
                              {group.subjects.slice(0, 3).map((subject) => (
                                <Badge key={subject} variant="secondary" className="text-xs bg-slate-100">
                                  {subject}
                                </Badge>
                              ))}
                              {group.subjects.length > 3 && (
                                <Badge variant="secondary" className="text-xs bg-slate-100">
                                  +{group.subjects.length - 3} more
                                </Badge>
                              )}
                            </div>
                            <div className="text-xs text-slate-500">
                              Active {group.recentActivity}
                            </div>
                          </div>
                        </div>
                        
                        <div className="ml-6 text-right">
                          <div className="mb-4">
                            {group.joinType === 'open' && (
                              <Button onClick={() => handleJoinGroup(group)} className="btn-premium hover-glow">
                                <Plus className="w-4 h-4 mr-2" />
                                Join Group
                              </Button>
                            )}
                            {group.joinType === 'code' && (
                              <Button onClick={() => handleJoinGroup(group)} variant="outline" className="btn-glass hover-lift">
                                <Code className="w-4 h-4 mr-2" />
                                Need Code
                              </Button>
                            )}
                            {group.joinType === 'invite' && (
                              <Button disabled variant="outline">
                                <Lock className="w-4 h-4 mr-2" />
                                Invite Only
                              </Button>
                            )}
                          </div>
                          <div className="text-xs text-slate-500">
                            <div>Code: {group.groupCode}</div>
                            <div className="mt-1">Moderators: {group.moderators.join(', ')}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="popular" className="space-y-6 animate-fade-in-up">
                {filteredGroups
                  .sort((a, b) => b.members - a.members)
                  .slice(0, 3)
                  .map((group, index) => (
                  <Card key={group.id} className="glass border-white/20 shadow-elegant hover:shadow-luxury transition-all hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-elegant">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Most Popular
                        </Badge>
                        <h3 className="text-xl font-bold text-slate-800">{group.name}</h3>
                      </div>
                      <p className="text-slate-600 mb-4">{group.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-slate-600">
                          <span className="font-medium">{group.members}</span> members from {group.college}
                        </div>
                        <Button onClick={() => handleJoinGroup(group)} className="btn-premium hover-glow">
                          <Plus className="w-4 h-4 mr-2" />
                          Join Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="college" className="space-y-6 animate-fade-in-up">
                {filteredGroups
                  .filter(group => group.college === user.college)
                  .map((group, index) => (
                  <Card key={group.id} className="glass border-white/20 shadow-elegant hover:shadow-luxury transition-all hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-elegant">
                          Your College
                        </Badge>
                        <h3 className="text-xl font-bold text-slate-800">{group.name}</h3>
                      </div>
                      <p className="text-slate-600 mb-4">{group.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          {group.subjects.slice(0, 4).map((subject) => (
                            <Badge key={subject} variant="secondary" className="text-xs bg-slate-100">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                        <Button onClick={() => handleJoinGroup(group)} className="btn-premium hover-glow">
                          <Plus className="w-4 h-4 mr-2" />
                          Join Group
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}