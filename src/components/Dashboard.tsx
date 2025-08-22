import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Bell, Search, Plus, TrendingUp, Award, Users, BookOpen, Trophy, MessageCircle, Upload, LogOut, Menu, Sparkles, Flame, Eye } from 'lucide-react';
import { Input } from './ui/input';
import { Separator } from './ui/separator';

export function Dashboard({ user, onNavigate, onLogout }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mockFeedData = [
    {
      id: 1,
      type: 'question',
      title: 'How to solve differential equations with complex coefficients?',
      author: 'Priya Sharma',
      college: 'IIT Delhi',
      tags: ['Mathematics', 'Engineering', 'Calculus'],
      upvotes: 23,
      answers: 5,
      time: '2h ago',
      trending: true,
      avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=priya'
    },
    {
      id: 2,
      type: 'note',
      title: 'Complete Notes on Organic Chemistry Reactions',
      author: 'Rahul Gupta',
      college: 'AIIMS',
      tags: ['Chemistry', 'Medical', 'NEET'],
      downloads: 156,
      rating: 4.8,
      time: '4h ago',
      avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=rahul'
    },
    {
      id: 3,
      type: 'contest',
      title: 'Weekly Coding Challenge - Data Structures',
      description: 'Test your problem-solving skills with advanced DSA questions',
      participants: 234,
      prize: '₹5000',
      deadline: '2 days left',
      difficulty: 'Medium',
      avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=contest'
    }
  ];

  const notifications = [
    { id: 1, text: 'Ananya answered your question about Physics', time: '1h ago', type: 'answer', read: false },
    { id: 2, text: 'Your answer got 10 upvotes!', time: '3h ago', type: 'upvote', read: false },
    { id: 3, text: 'New contest: Machine Learning Challenge', time: '5h ago', type: 'contest', read: true }
  ];

  const NavItems = [
    { icon: TrendingUp, label: 'Dashboard', page: 'dashboard', active: true, gradient: 'from-blue-500 to-cyan-500' },
    { icon: MessageCircle, label: 'Questions', page: 'questions', gradient: 'from-emerald-500 to-green-500' },
    { icon: BookOpen, label: 'Notes', page: 'notes', gradient: 'from-purple-500 to-violet-500' },
    { icon: Trophy, label: 'Contests', page: 'contests', gradient: 'from-orange-500 to-yellow-500' },
    { icon: Users, label: 'Groups', page: 'groups', gradient: 'from-pink-500 to-rose-500' },
    { icon: Award, label: 'Profile', page: 'profile', gradient: 'from-indigo-500 to-purple-500' }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'question': return <MessageCircle className="w-5 h-5" />;
      case 'note': return <BookOpen className="w-5 h-5" />;
      case 'contest': return <Trophy className="w-5 h-5" />;
      default: return <MessageCircle className="w-5 h-5" />;
    }
  };

  const getTypeGradient = (type) => {
    switch (type) {
      case 'question': return 'from-blue-500 to-cyan-500';
      case 'note': return 'from-emerald-500 to-green-500';
      case 'contest': return 'from-orange-500 to-yellow-500';
      default: return 'from-slate-500 to-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Top Navigation */}
      <header className="glass border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover-lift"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-elegant">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent hidden sm:block">
                  CuriousHeads
                </span>
              </div>
            </div>

            <div className="flex-1 max-w-xl mx-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  placeholder="Search questions, notes, contests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 glass border-white/20 focus-elegant rounded-xl bg-white/60"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button 
                size="icon" 
                variant="ghost" 
                className="relative hover-lift glass rounded-xl"
                onClick={() => onNavigate('notifications')}
              >
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs shadow-elegant">
                  {notifications.filter(n => !n.read).length}
                </Badge>
              </Button>
              <Avatar 
                className="w-10 h-10 cursor-pointer hover-lift shadow-elegant ring-2 ring-white/50" 
                onClick={() => onNavigate('profile')}
              >
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className={`lg:col-span-1 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <Card className="glass border-white/20 shadow-elegant sticky top-24">
              <CardContent className="p-6">
                <div className="space-y-3">
                  {NavItems.map((item) => (
                    <Button
                      key={item.page}
                      variant={item.active ? "default" : "ghost"}
                      className={`w-full justify-start group transition-all duration-300 ${
                        item.active 
                          ? `bg-gradient-to-r ${item.gradient} text-white shadow-elegant hover:shadow-luxury` 
                          : 'hover:bg-white/50 hover-lift'
                      }`}
                      onClick={() => {
                        onNavigate(item.page);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <div className={`w-5 h-5 mr-3 ${item.active ? '' : 'group-hover:scale-110 transition-transform'}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      {item.label}
                    </Button>
                  ))}
                  <Separator className="my-6 opacity-30" />
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors" 
                    onClick={onLogout}
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Welcome Section */}
            <div className="mb-8 animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-4">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Hi, {user.name.split(' ')[0]}!
                </h1>
                <div className="animate-float">
                  <Sparkles className="w-6 h-6 text-yellow-500" />
                </div>
              </div>
              <p className="text-slate-600 text-lg">Here's what's hot today in your learning community</p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-4 gap-4 mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <Button 
                className="h-24 flex flex-col space-y-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-elegant hover:shadow-luxury transition-all hover-lift" 
                onClick={() => onNavigate('questions')}
              >
                <Plus className="w-6 h-6" />
                <span className="text-sm font-medium">Ask Question</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-24 flex flex-col space-y-2 glass border-white/20 hover:bg-white/60 hover-lift transition-all" 
                onClick={() => onNavigate('notes')}
              >
                <Upload className="w-6 h-6 text-emerald-500" />
                <span className="text-sm font-medium">Upload Notes</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-24 flex flex-col space-y-2 glass border-white/20 hover:bg-white/60 hover-lift transition-all" 
                onClick={() => onNavigate('contests')}
              >
                <Trophy className="w-6 h-6 text-orange-500" />
                <span className="text-sm font-medium">Join Contest</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-24 flex flex-col space-y-2 glass border-white/20 hover:bg-white/60 hover-lift transition-all" 
                onClick={() => onNavigate('join-groups')}
              >
                <Users className="w-6 h-6 text-purple-500" />
                <span className="text-sm font-medium">Join Groups</span>
              </Button>
            </div>

            {/* Smart Feed */}
            <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800">Smart Feed</h2>
                <Badge className="glass border-white/20 px-4 py-2 text-purple-600 font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Recommended
                </Badge>
              </div>

              {mockFeedData.map((item, index) => (
                <Card key={item.id} className="glass border-white/20 shadow-elegant hover:shadow-luxury transition-all hover-lift cursor-pointer group">
                  <CardContent className="p-6">
                    {item.type === 'question' && (
                      <>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className={`w-8 h-8 bg-gradient-to-r ${getTypeGradient(item.type)} rounded-lg flex items-center justify-center`}>
                                {getTypeIcon(item.type)}
                                <span className="text-white text-xs">Q</span>
                              </div>
                              <Badge variant="outline" className="border-slate-200">Question</Badge>
                              {item.trending && (
                                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                                  <Flame className="w-3 h-3 mr-1" />
                                  Trending
                                </Badge>
                              )}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-slate-500">
                              <div className="flex items-center space-x-2">
                                <Avatar className="w-6 h-6">
                                  <AvatarImage src={item.avatar} />
                                  <AvatarFallback>{item.author.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span>{item.author}</span>
                              </div>
                              <span>•</span>
                              <span>{item.college}</span>
                              <span>•</span>
                              <span>{item.time}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-2">
                            {item.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs bg-slate-100 hover:bg-slate-200 transition-colors">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-slate-500">
                            <span className="flex items-center space-x-1">
                              <TrendingUp className="w-4 h-4" />
                              <span>{item.upvotes}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <MessageCircle className="w-4 h-4" />
                              <span>{item.answers} answers</span>
                            </span>
                          </div>
                        </div>
                      </>
                    )}

                    {item.type === 'note' && (
                      <>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className={`w-8 h-8 bg-gradient-to-r ${getTypeGradient(item.type)} rounded-lg flex items-center justify-center`}>
                                {getTypeIcon(item.type)}
                              </div>
                              <Badge variant="outline" className="border-emerald-200 text-emerald-700">Notes</Badge>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-800 group-hover:text-emerald-600 transition-colors">
                              {item.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-slate-500">
                              <div className="flex items-center space-x-2">
                                <Avatar className="w-6 h-6">
                                  <AvatarImage src={item.avatar} />
                                  <AvatarFallback>{item.author.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span>{item.author}</span>
                              </div>
                              <span>•</span>
                              <span>{item.college}</span>
                              <span>•</span>
                              <span>{item.time}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-2">
                            {item.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs bg-slate-100 hover:bg-slate-200 transition-colors">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-slate-500">
                            <span className="flex items-center space-x-1">
                              <Award className="w-4 h-4" />
                              <span>{item.rating}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Upload className="w-4 h-4" />
                              <span>{item.downloads} downloads</span>
                            </span>
                          </div>
                        </div>
                      </>
                    )}

                    {item.type === 'contest' && (
                      <>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className={`w-8 h-8 bg-gradient-to-r ${getTypeGradient(item.type)} rounded-lg flex items-center justify-center`}>
                                {getTypeIcon(item.type)}
                              </div>
                              <Badge variant="outline" className="border-orange-200 text-orange-700">Contest</Badge>
                              <Badge variant="secondary">{item.difficulty}</Badge>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-orange-600 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-slate-600 mb-3">{item.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="flex items-center space-x-1 text-green-600 font-semibold">
                              <Trophy className="w-4 h-4" />
                              <span>{item.prize}</span>
                            </span>
                            <span className="flex items-center space-x-1 text-slate-500">
                              <Users className="w-4 h-4" />
                              <span>{item.participants} participants</span>
                            </span>
                          </div>
                          <Badge variant="outline" className="text-orange-600 border-orange-200">
                            {item.deadline}
                          </Badge>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* User Stats */}
            <Card className="glass border-white/20 shadow-elegant animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <CardHeader>
                <CardTitle className="text-lg text-slate-800 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-purple-500" />
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: user.xp, label: 'Total XP', color: 'text-blue-600', bg: 'bg-blue-500', icon: '⚡' },
                    { value: user.badges, label: 'Badges', color: 'text-green-600', bg: 'bg-green-500', icon: '🏆' },
                    { value: user.streak, label: 'Day Streak', color: 'text-purple-600', bg: 'bg-purple-500', icon: '🔥' },
                    { value: `#${user.rank}`, label: 'Rank', color: 'text-orange-600', bg: 'bg-orange-500', icon: '🎯' }
                  ].map((stat, index) => (
                    <div key={stat.label} className="text-center p-4 glass rounded-xl hover-lift transition-all">
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="glass border-white/20 shadow-elegant animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <CardHeader>
                <CardTitle className="text-lg text-slate-800 flex items-center justify-between">
                  <div className="flex items-center">
                    <Bell className="w-5 h-5 mr-2 text-blue-500" />
                    Notifications
                  </div>
                  <Badge className="bg-red-500 text-white">
                    {notifications.filter(n => !n.read).length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className={`p-3 rounded-xl transition-all hover:bg-white/50 ${!notification.read ? 'bg-blue-50 border-l-4 border-blue-500' : ''}`}>
                      <p className="text-sm text-slate-700 font-medium">{notification.text}</p>
                      <p className="text-xs text-slate-500 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card className="glass border-white/20 shadow-elegant animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <CardHeader>
                <CardTitle className="text-lg text-slate-800 flex items-center">
                  <Flame className="w-5 h-5 mr-2 text-orange-500" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {['JEE Mains 2024', 'NEET Biology', 'Data Structures', 'Organic Chemistry', 'Linear Algebra'].map((topic, index) => (
                    <Badge 
                      key={topic} 
                      variant="secondary" 
                      className="mr-2 mb-2 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 transition-all cursor-pointer hover-lift"
                    >
                      # {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}