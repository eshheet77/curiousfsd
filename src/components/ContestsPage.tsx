import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { ArrowLeft, Search, Trophy, Users, Calendar, Clock, Target, Award, Play, BookOpen, Sparkles, Star, Flame } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';

export function ContestsPage({ user, onNavigate, onLogout }) {
  const [searchQuery, setSearchQuery] = useState('');

  const mockContests = [
    {
      id: 1,
      title: 'Weekly Coding Challenge - Data Structures',
      description: 'Test your problem-solving skills with advanced DSA questions covering arrays, trees, and graphs.',
      category: 'Coding',
      difficulty: 'Medium',
      participants: 234,
      maxParticipants: 500,
      prize: '₹10,000',
      startDate: '2024-03-25',
      endDate: '2024-03-27',
      duration: '48 hours',
      status: 'upcoming',
      tags: ['Programming', 'DSA', 'Algorithms'],
      organizer: 'CuriousHeads Team',
      requirements: ['Basic programming knowledge', 'Familiarity with data structures'],
      timeLeft: '2 days 5 hours',
      registered: false
    },
    {
      id: 2,
      title: 'NEET Biology Quiz Championship',
      description: 'Comprehensive biology quiz covering all NEET syllabus topics with detailed explanations.',
      category: 'Quiz',
      difficulty: 'Advanced',
      participants: 156,
      maxParticipants: 300,
      prize: '₹5,000',
      startDate: '2024-03-20',
      endDate: '2024-03-22',
      duration: '2 hours',
      status: 'ongoing',
      tags: ['Biology', 'NEET', 'Medical'],
      organizer: 'Medical Stream Community',
      requirements: ['NEET preparation level', 'Basic biology concepts'],
      timeLeft: '6 hours 23 minutes',
      registered: true,
      currentRank: 12
    },
    {
      id: 3,
      title: 'Physics Problem Solving Marathon',
      description: 'Solve complex physics problems from mechanics, thermodynamics, and electromagnetism.',
      category: 'Problem Solving',
      difficulty: 'Advanced',
      participants: 89,
      maxParticipants: 200,
      prize: '₹7,500',
      startDate: '2024-03-28',
      endDate: '2024-03-30',
      duration: '3 days',
      status: 'upcoming',
      tags: ['Physics', 'JEE', 'Problem Solving'],
      organizer: 'Physics Enthusiasts Club',
      requirements: ['JEE level physics', 'Problem solving skills'],
      timeLeft: '1 week 2 days',
      registered: false
    },
    {
      id: 4,
      title: 'Case Study Analysis Challenge',
      description: 'Analyze real-world business cases and present innovative solutions.',
      category: 'Case Study',
      difficulty: 'Medium',
      participants: 67,
      maxParticipants: 100,
      prize: '₹3,000',
      startDate: '2024-03-15',
      endDate: '2024-03-17',
      duration: '72 hours',
      status: 'completed',
      tags: ['Business', 'Analysis', 'MBA'],
      organizer: 'Business Studies Group',
      requirements: ['Basic business knowledge', 'Analytical thinking'],
      winner: 'Priya Sharma',
      registered: true,
      finalRank: 8
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Ananya Patel', college: 'IIT Delhi', points: 2450, avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=ananya' },
    { rank: 2, name: 'Rahul Gupta', college: 'AIIMS', points: 2380, avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=rahul' },
    { rank: 3, name: 'Priya Sharma', college: 'NIT Surathkal', points: 2290, avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=priya' },
    { rank: 4, name: 'Vikram Singh', college: 'IISC Bangalore', points: 2180, avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=vikram' },
    { rank: 5, name: 'Eshheet Kumar', college: 'IIT Delhi', points: 1250, avatar: user.avatar, isCurrentUser: true }
  ];

  const handleContestAction = (contestId, action) => {
    if (action === 'register') {
      console.log('Registering for contest:', contestId);
    } else if (action === 'participate') {
      onNavigate('contest-submission', contestId);
    } else if (action === 'continue') {
      onNavigate('contest-submission', contestId);
    }
  };

  const filteredContests = mockContests.filter(contest =>
    contest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contest.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contest.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
      case 'ongoing': return 'bg-gradient-to-r from-emerald-500 to-green-500 text-white';
      case 'completed': return 'bg-gradient-to-r from-slate-500 to-slate-600 text-white';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      case 'Medium': return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white';
      case 'Advanced': return 'bg-gradient-to-r from-red-500 to-pink-500 text-white';
      default: return 'bg-gray-100 text-gray-700';
    }
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
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Contests & Challenges
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  placeholder="Search contests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 w-80 glass border-white/20 focus-elegant bg-white/60 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* User Contest Stats */}
            <Card className="glass border-white/20 shadow-elegant animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <Award className="w-5 h-5 mr-2 text-purple-500" />
                  Your Contest Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Participated</span>
                    <span className="text-xl font-bold text-slate-700">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Won</span>
                    <span className="text-xl font-bold text-emerald-600">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Best Rank</span>
                    <span className="text-xl font-bold text-blue-600">#2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Total Prizes</span>
                    <span className="text-xl font-bold text-yellow-600">₹15,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card className="glass border-white/20 shadow-elegant animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <Trophy className="w-5 h-5 mr-2 text-orange-500" />
                  Overall Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {leaderboard.map((entry) => (
                    <div key={entry.rank} className={`flex items-center space-x-3 p-3 rounded-xl transition-all hover-lift ${entry.isCurrentUser ? 'glass bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-200' : 'hover:bg-white/50'}`}>
                      <div className={`text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center ${entry.rank <= 3 ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
                        #{entry.rank}
                      </div>
                      <Avatar className="w-10 h-10 ring-2 ring-white/50">
                        <AvatarImage src={entry.avatar} />
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                          {entry.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate text-slate-800">{entry.name}</div>
                        <div className="text-xs text-slate-500 truncate">{entry.college}</div>
                      </div>
                      <div className="text-sm font-bold text-purple-600">{entry.points}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="glass border-white/20 bg-white/30 p-1">
                <TabsTrigger 
                  value="all"
                  className="transition-all data-[state=active]:bg-white data-[state=active]:shadow-elegant"
                >
                  All Contests
                </TabsTrigger>
                <TabsTrigger 
                  value="upcoming"
                  className="transition-all data-[state=active]:bg-white data-[state=active]:shadow-elegant"
                >
                  Upcoming
                </TabsTrigger>
                <TabsTrigger 
                  value="ongoing"
                  className="transition-all data-[state=active]:bg-white data-[state=active]:shadow-elegant"
                >
                  <Flame className="w-4 h-4 mr-2" />
                  Ongoing
                </TabsTrigger>
                <TabsTrigger 
                  value="completed"
                  className="transition-all data-[state=active]:bg-white data-[state=active]:shadow-elegant"
                >
                  Completed
                </TabsTrigger>
                <TabsTrigger 
                  value="registered"
                  className="transition-all data-[state=active]:bg-white data-[state=active]:shadow-elegant"
                >
                  My Contests
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                {filteredContests.map((contest, index) => (
                  <Card key={contest.id} className="glass border-white/20 shadow-elegant hover:shadow-luxury transition-all hover-lift" style={{animationDelay: `${0.1 + index * 0.1}s`}}>
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-4">
                            <Badge className={getStatusColor(contest.status)}>
                              {contest.status.toUpperCase()}
                            </Badge>
                            <Badge variant="outline" className="border-slate-300">{contest.category}</Badge>
                            <Badge className={getDifficultyColor(contest.difficulty)}>
                              {contest.difficulty}
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 text-slate-800">{contest.title}</h3>
                          <p className="text-slate-600 mb-6 leading-relaxed">{contest.description}</p>
                        </div>
                        <div className="text-right ml-8">
                          <div className="text-3xl font-bold text-emerald-600 mb-1">{contest.prize}</div>
                          <div className="text-sm text-slate-500">Prize Pool</div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        <div className="flex items-center space-x-3 glass rounded-xl p-4 bg-white/40">
                          <Users className="w-6 h-6 text-blue-500" />
                          <div>
                            <div className="text-lg font-bold text-slate-800">{contest.participants}/{contest.maxParticipants}</div>
                            <div className="text-xs text-slate-500">Participants</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 glass rounded-xl p-4 bg-white/40">
                          <Calendar className="w-6 h-6 text-emerald-500" />
                          <div>
                            <div className="text-lg font-bold text-slate-800">{contest.startDate}</div>
                            <div className="text-xs text-slate-500">Start Date</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 glass rounded-xl p-4 bg-white/40">
                          <Clock className="w-6 h-6 text-purple-500" />
                          <div>
                            <div className="text-lg font-bold text-slate-800">{contest.duration}</div>
                            <div className="text-xs text-slate-500">Duration</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 glass rounded-xl p-4 bg-white/40">
                          <Target className="w-6 h-6 text-orange-500" />
                          <div>
                            <div className="text-lg font-bold text-slate-800">{contest.timeLeft}</div>
                            <div className="text-xs text-slate-500">
                              {contest.status === 'upcoming' ? 'Starts in' : contest.status === 'ongoing' ? 'Ends in' : 'Ended'}
                            </div>
                          </div>
                        </div>
                      </div>

                      {contest.status === 'ongoing' && contest.registered && (
                        <div className="mb-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-medium text-slate-700">Progress</span>
                            <span className="text-sm text-slate-500">65% Complete</span>
                          </div>
                          <Progress value={65} className="h-3 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all" style={{width: '65%'}}></div>
                          </Progress>
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          {contest.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs bg-slate-100 hover:bg-slate-200 transition-colors">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          {contest.registered && contest.status === 'ongoing' && (
                            <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                              Rank #{contest.currentRank}
                            </Badge>
                          )}
                          {contest.registered && contest.status === 'completed' && (
                            <Badge className="bg-gradient-to-r from-slate-500 to-slate-600 text-white">
                              Final Rank #{contest.finalRank}
                            </Badge>
                          )}
                          
                          {contest.status === 'upcoming' && !contest.registered && (
                            <Button onClick={() => handleContestAction(contest.id, 'register')} className="btn-premium hover-glow shadow-elegant">
                              Register Now
                            </Button>
                          )}
                          {contest.status === 'upcoming' && contest.registered && (
                            <Button variant="outline" disabled className="btn-glass">
                              <Award className="w-4 h-4 mr-2" />
                              Registered
                            </Button>
                          )}
                          {contest.status === 'ongoing' && contest.registered && (
                            <Button onClick={() => handleContestAction(contest.id, 'continue')} className="btn-premium hover-glow shadow-elegant">
                              <Play className="w-4 h-4 mr-2" />
                              Continue Contest
                            </Button>
                          )}
                          {contest.status === 'ongoing' && !contest.registered && (
                            <Button disabled className="opacity-50">Registration Closed</Button>
                          )}
                          {contest.status === 'completed' && (
                            <Button variant="outline" className="btn-glass hover-lift">
                              <Star className="w-4 h-4 mr-2" />
                              View Results
                            </Button>
                          )}
                        </div>
                      </div>

                      {contest.registered && contest.status === 'ongoing' && (
                        <div className="mt-6 p-4 glass rounded-xl bg-blue-50/50">
                          <div className="flex items-center space-x-3">
                            <Award className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-medium text-blue-900">You're participating in this contest!</span>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              {/* Other tab contents with similar styling... */}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}