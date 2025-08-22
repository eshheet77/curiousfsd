import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ArrowLeft, Bell, CheckCheck, Trash2, Filter, MoreVertical, Eye, MessageCircle, Trophy, BookOpen, Users, Calendar, TrendingUp, Star, Award, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { toast } from 'sonner@2.0.3';

export function NotificationsPage({ user, onNavigate, onLogout }) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'answer',
      title: 'New answer on your question',
      message: 'Sarah Kumar answered your question about "Linear Algebra basics"',
      time: '2 minutes ago',
      read: false,
      avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=sarah',
      actionUrl: 'question-detail',
      actionId: 1,
      icon: MessageCircle,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      type: 'upvote',
      title: 'Your answer was upvoted',
      message: '5 people found your answer on "Differential Equations" helpful',
      time: '15 minutes ago',
      read: false,
      avatar: null,
      actionUrl: 'question-detail',
      actionId: 2,
      icon: TrendingUp,
      color: 'bg-emerald-500'
    },
    {
      id: 3,
      type: 'contest',
      title: 'Contest result announced',
      message: 'You ranked 3rd in "Weekly Math Challenge"! Congratulations!',
      time: '1 hour ago',
      read: false,
      avatar: null,
      actionUrl: 'contests',
      actionId: null,
      icon: Trophy,
      color: 'bg-orange-500'
    },
    {
      id: 4,
      type: 'note',
      title: 'New notes shared',
      message: 'Rahul Sharma shared "Physics Chapter 12 - Electromagnetic Induction" notes',
      time: '2 hours ago',
      read: true,
      avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=rahul',
      actionUrl: 'notes',
      actionId: null,
      icon: BookOpen,
      color: 'bg-purple-500'
    },
    {
      id: 5,
      type: 'achievement',
      title: 'New achievement unlocked',
      message: 'You earned "Knowledge Sharer" badge for uploading 10+ study notes',
      time: '3 hours ago',
      read: true,
      avatar: null,
      actionUrl: 'profile',
      actionId: null,
      icon: Award,
      color: 'bg-yellow-500'
    },
    {
      id: 6,
      type: 'group',
      title: 'Group invitation',
      message: 'You were invited to join "IIT Delhi - CSE Batch 2024" study group',
      time: '5 hours ago',
      read: true,
      avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=group',
      actionUrl: 'join-groups',
      actionId: null,
      icon: Users,
      color: 'bg-cyan-500'
    },
    {
      id: 7,
      type: 'streak',
      title: 'Streak milestone',
      message: 'Amazing! You\'ve maintained a 15-day learning streak 🔥',
      time: '1 day ago',
      read: true,
      avatar: null,
      actionUrl: 'profile',
      actionId: null,
      icon: Sparkles,
      color: 'bg-pink-500'
    },
    {
      id: 8,
      type: 'reminder',
      title: 'Assignment reminder',
      message: 'Don\'t forget: Data Structures assignment due tomorrow',
      time: '2 days ago',
      read: true,
      avatar: null,
      actionUrl: 'notes',
      actionId: null,
      icon: Calendar,
      color: 'bg-red-500'
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;
  const [selectedFilter, setSelectedFilter] = useState('all');

  const markAsRead = (notificationId) => {
    setNotifications(prev => 
      prev.map(n => 
        n.id === notificationId ? { ...n, read: true } : n
      )
    );
    toast.success('Notification marked as read');
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(n => ({ ...n, read: true }))
    );
    toast.success('All notifications marked as read');
  };

  const deleteNotification = (notificationId) => {
    setNotifications(prev => 
      prev.filter(n => n.id !== notificationId)
    );
    toast.success('Notification deleted');
  };

  const handleNotificationClick = (notification) => {
    if (!notification.read) {
      markAsRead(notification.id);
    }
    if (notification.actionUrl) {
      onNavigate(notification.actionUrl, notification.actionId);
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'unread') return !notification.read;
    if (selectedFilter === 'read') return notification.read;
    return notification.type === selectedFilter;
  });

  const getTimeAgo = (timeString) => {
    return timeString;
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
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    Notifications
                  </h1>
                  {unreadCount > 0 && (
                    <p className="text-sm text-slate-600">
                      You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
                    </p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {unreadCount > 0 && (
                <Button onClick={markAllAsRead} className="btn-premium hover-glow">
                  <CheckCheck className="w-4 h-4 mr-2" />
                  Mark All Read
                </Button>
              )}
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="btn-glass hover-lift">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass border-white/20">
                  <DropdownMenuItem onClick={() => setSelectedFilter('all')}>
                    All Notifications
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedFilter('unread')}>
                    Unread Only
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedFilter('read')}>
                    Read Only
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedFilter('answer')}>
                    Answers & Comments
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedFilter('contest')}>
                    Contests & Results
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedFilter('achievement')}>
                    Achievements
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {filteredNotifications.length === 0 ? (
            <Card className="glass border-white/20 shadow-elegant">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bell className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">No notifications found</h3>
                <p className="text-slate-600 mb-6">
                  {selectedFilter === 'all' 
                    ? "You're all caught up! No new notifications to show."
                    : `No ${selectedFilter} notifications found.`
                  }
                </p>
                <Button onClick={() => onNavigate('dashboard')} className="btn-premium hover-glow">
                  Back to Dashboard
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredNotifications.map((notification, index) => (
                <Card 
                  key={notification.id} 
                  className={`glass border-white/20 shadow-elegant hover:shadow-luxury transition-all hover-lift cursor-pointer ${
                    !notification.read ? 'ring-2 ring-blue-200 bg-blue-50/50' : ''
                  }`}
                  style={{animationDelay: `${index * 0.05}s`}}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Notification Icon */}
                      <div className={`w-12 h-12 ${notification.color} rounded-xl flex items-center justify-center shadow-elegant flex-shrink-0`}>
                        <notification.icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Notification Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-semibold text-slate-800">{notification.title}</h3>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              )}
                            </div>
                            <p className="text-slate-600 mb-3 leading-relaxed">{notification.message}</p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                {notification.avatar && (
                                  <Avatar className="w-6 h-6">
                                    <AvatarImage src={notification.avatar} />
                                    <AvatarFallback className="text-xs">U</AvatarFallback>
                                  </Avatar>
                                )}
                                <span className="text-sm text-slate-500">{getTimeAgo(notification.time)}</span>
                                <Badge 
                                  variant="secondary" 
                                  className="text-xs capitalize bg-slate-100"
                                >
                                  {notification.type}
                                </Badge>
                              </div>
                            </div>
                          </div>

                          {/* Actions Menu */}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="hover-lift opacity-60 hover:opacity-100">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="glass border-white/20">
                              {!notification.read ? (
                                <DropdownMenuItem onClick={(e) => {
                                  e.stopPropagation();
                                  markAsRead(notification.id);
                                }}>
                                  <Eye className="w-4 h-4 mr-2" />
                                  Mark as Read
                                </DropdownMenuItem>
                              ) : (
                                <DropdownMenuItem disabled>
                                  <CheckCheck className="w-4 h-4 mr-2" />
                                  Already Read
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  deleteNotification(notification.id);
                                }}
                                className="text-red-600"
                              >
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Notification Stats */}
          <div className="mt-8 grid md:grid-cols-3 gap-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Card className="glass border-white/20 shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Bell className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-1">{notifications.length}</div>
                <div className="text-sm text-slate-600">Total Notifications</div>
              </CardContent>
            </Card>

            <Card className="glass border-white/20 shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <CheckCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-1">{notifications.filter(n => n.read).length}</div>
                <div className="text-sm text-slate-600">Read Notifications</div>
              </CardContent>
            </Card>

            <Card className="glass border-white/20 shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-1">{unreadCount}</div>
                <div className="text-sm text-slate-600">Unread Notifications</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}