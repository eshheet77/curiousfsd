import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ArrowLeft, Edit, Trophy, Star, Calendar, MapPin, GraduationCap, BookOpen, Sparkles, Award, TrendingUp, Users, MessageCircle, Upload } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';

export function ProfilePage({ user, onNavigate, onLogout }) {
  const [isEditing, setIsEditing] = useState(false);

  const achievements = [
    { id: 1, title: 'First Answer', description: 'Posted your first answer', icon: '🎯', earned: true, date: '2024-03-01' },
    { id: 2, title: 'Helpful Helper', description: 'Received 50+ upvotes', icon: '👍', earned: true, date: '2024-03-05' },
    { id: 3, title: 'Knowledge Sharer', description: 'Uploaded 10+ study notes', icon: '📚', earned: true, date: '2024-03-10' },
    { id: 4, title: 'Contest Winner', description: 'Won a contest', icon: '🏆', earned: false, date: null },
    { id: 5, title: 'Streak Master', description: 'Maintained 30-day streak', icon: '🔥', earned: false, date: null },
    { id: 6, title: 'Top Contributor', description: 'Ranked in top 100', icon: '⭐', earned: true, date: '2024-03-15' }
  ];

  const recentActivity = [
    { id: 1, type: 'answer', content: 'Answered: "How to solve differential equations?"', time: '2 hours ago', points: '+15 XP' },
    { id: 2, type: 'note', content: 'Uploaded: "Linear Algebra Notes Chapter 5"', time: '1 day ago', points: '+25 XP' },
    { id: 3, type: 'contest', content: 'Participated in: "Weekly Math Challenge"', time: '3 days ago', points: '+50 XP' },
    { id: 4, type: 'vote', content: 'Your answer received 5 upvotes', time: '5 days ago', points: '+10 XP' }
  ];

  const stats = [
    { label: 'Questions Asked', value: 23, icon: MessageCircle, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Answers Given', value: 67, icon: BookOpen, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Notes Uploaded', value: 12, icon: Upload, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Contests Won', value: 3, icon: Trophy, color: 'text-orange-600', bg: 'bg-orange-50' }
  ];

  const progressToNext = 75; // Progress to next level

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
                  My Profile
                </h1>
              </div>
            </div>
            
            <Button variant="outline" onClick={() => setIsEditing(!isEditing)} className="btn-glass hover-lift">
              <Edit className="w-4 h-4 mr-2" />
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card className="glass border-white/20 shadow-elegant animate-fade-in-up">
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-white/50 shadow-elegant">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-2xl">
                    {user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold text-slate-800 mb-2">{user.name}</h2>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center justify-center space-x-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>{user.stream}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{user.college}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{user.year}</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 glass rounded-xl bg-white/40">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    <span className="font-medium text-slate-700">Level 8</span>
                  </div>
                  <Progress value={progressToNext} className="h-2 mb-2" />
                  <div className="text-xs text-slate-500">
                    {progressToNext}% to Level 9
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="glass border-white/20 shadow-elegant animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <TrendingUp className="w-5 h-5 mr-2 text-emerald-500" />
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Total XP</span>
                  <span className="text-lg font-bold text-purple-600">{user.xp}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Current Rank</span>
                  <span className="text-lg font-bold text-blue-600">#{user.rank}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Day Streak</span>
                  <span className="text-lg font-bold text-orange-600">{user.streak} 🔥</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Badges Earned</span>
                  <span className="text-lg font-bold text-emerald-600">{user.badges}</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="glass border-white/20 shadow-elegant animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <Award className="w-5 h-5 mr-2 text-yellow-500" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.filter(a => a.earned).slice(-3).map((achievement) => (
                  <div key={achievement.id} className="flex items-center space-x-3 p-3 glass rounded-xl bg-white/40 hover-lift transition-all">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-800 text-sm">{achievement.title}</div>
                      <div className="text-xs text-slate-500">{achievement.date}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="glass border-white/20 bg-white/30 p-1">
                <TabsTrigger 
                  value="overview"
                  className="transition-all data-[state=active]:bg-white data-[state=active]:shadow-elegant"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="activity"
                  className="transition-all data-[state=active]:bg-white data-[state=active]:shadow-elegant"
                >
                  Activity
                </TabsTrigger>
                <TabsTrigger 
                  value="achievements"
                  className="transition-all data-[state=active]:bg-white data-[state=active]:shadow-elegant"
                >
                  Achievements
                </TabsTrigger>
                <TabsTrigger 
                  value="settings"
                  className="transition-all data-[state=active]:bg-white data-[state=active]:shadow-elegant"
                >
                  Settings
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6 animate-fade-in-up">
                {/* Stats Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <Card key={stat.label} className="glass border-white/20 shadow-elegant hover-lift transition-all" style={{animationDelay: `${index * 0.1}s`}}>
                      <CardContent className="p-6 text-center">
                        <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                          <stat.icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                        <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
                        <div className="text-sm text-slate-600">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Performance Chart */}
                <Card className="glass border-white/20 shadow-elegant animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <CardHeader>
                    <CardTitle className="flex items-center text-slate-800">
                      <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                      Learning Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-slate-700">Mathematics</span>
                          <span className="text-sm text-slate-500">85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-slate-700">Physics</span>
                          <span className="text-sm text-slate-500">72%</span>
                        </div>
                        <Progress value={72} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-slate-700">Chemistry</span>
                          <span className="text-sm text-slate-500">68%</span>
                        </div>
                        <Progress value={68} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-slate-700">Computer Science</span>
                          <span className="text-sm text-slate-500">91%</span>
                        </div>
                        <Progress value={91} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="activity" className="space-y-6 animate-fade-in-up">
                <Card className="glass border-white/20 shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center text-slate-800">
                      <Calendar className="w-5 h-5 mr-2 text-purple-500" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={activity.id} className="flex items-start space-x-4 p-4 glass rounded-xl bg-white/40 hover-lift transition-all" style={{animationDelay: `${index * 0.1}s`}}>
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            activity.type === 'answer' ? 'bg-blue-500' :
                            activity.type === 'note' ? 'bg-emerald-500' :
                            activity.type === 'contest' ? 'bg-orange-500' : 'bg-purple-500'
                          }`}></div>
                          <div className="flex-1">
                            <p className="text-slate-700 font-medium">{activity.content}</p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-sm text-slate-500">{activity.time}</span>
                              <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs">
                                {activity.points}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="achievements" className="space-y-6 animate-fade-in-up">
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <Card 
                      key={achievement.id} 
                      className={`glass border-white/20 shadow-elegant transition-all hover-lift ${
                        achievement.earned ? 'hover:shadow-luxury' : 'opacity-60'
                      }`}
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`text-4xl ${achievement.earned ? '' : 'grayscale'}`}>
                            {achievement.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-slate-800 mb-1">{achievement.title}</h3>
                            <p className="text-sm text-slate-600 mb-2">{achievement.description}</p>
                            {achievement.earned ? (
                              <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs">
                                Earned {achievement.date}
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="text-xs border-slate-300">
                                Not earned yet
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="animate-fade-in-up">
                <Card className="glass border-white/20 shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Profile Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Edit className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">Settings Coming Soon</h3>
                        <p className="text-slate-600">Profile settings and customization options will be available soon.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}