import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Users, BookOpen, Trophy, Zap, MessageCircle, Upload, Target, ArrowRight, Play, CheckCircle, Sparkles } from 'lucide-react';

export function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="glass border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-elegant">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                CuriousHeads
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => onNavigate('auth')} className="hover-lift">
                Log In
              </Button>
              <Button onClick={() => onNavigate('auth')} className="btn-premium hover-glow">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="relative container mx-auto text-center max-w-5xl">
          <Badge className="mb-6 glass px-6 py-3 text-base font-medium animate-fade-in-up" variant="secondary">
            <Sparkles className="w-4 h-4 mr-2" />
            Where Students Learn, Collaborate & Grow Together
          </Badge>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-fade-in-up">
            The Ultimate
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
              Educational Platform
            </span>
            for Students
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Join thousands of students sharing knowledge, asking questions, participating in contests, 
            and building their academic journey together with AI-powered recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button 
              size="lg" 
              onClick={() => onNavigate('auth')} 
              className="btn-premium hover-glow text-lg px-10 py-6 shadow-luxury"
            >
              <Play className="w-5 h-5 mr-3" />
              Start Learning Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-glass text-lg px-10 py-6 hover-lift"
            >
              <BookOpen className="w-5 h-5 mr-3" />
              Explore Platform
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            {[
              { number: '50K+', label: 'Active Students' },
              { number: '25K+', label: 'Questions Answered' },
              { number: '15K+', label: 'Study Notes Shared' },
              { number: '500+', label: 'Contests Hosted' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-slate-800 mb-1">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover powerful features designed specifically for student success and collaborative learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'Smart AI Feed',
                description: 'Personalized content recommendations based on your stream, interests, and learning progress.',
                gradient: 'from-blue-500 to-cyan-500',
                bgColor: 'bg-blue-50'
              },
              {
                icon: MessageCircle,
                title: 'Q&A System',
                description: 'Ask questions, get answers from peers, and build a collaborative knowledge base.',
                gradient: 'from-emerald-500 to-green-500',
                bgColor: 'bg-emerald-50'
              },
              {
                icon: Upload,
                title: 'Notes Sharing',
                description: 'Share and access high-quality study notes with built-in preview and rating system.',
                gradient: 'from-purple-500 to-violet-500',
                bgColor: 'bg-purple-50'
              },
              {
                icon: Trophy,
                title: 'Contests & XP',
                description: 'Participate in contests, earn XP, unlock badges, and climb the leaderboards.',
                gradient: 'from-orange-500 to-yellow-500',
                bgColor: 'bg-orange-50'
              }
            ].map((feature) => (
              <Card key={feature.title} className="border-0 shadow-elegant hover-lift transition-smooth group bg-white/60 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gamification Highlights */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-8">Level Up Your Learning Journey</h2>
              <div className="space-y-6">
                {[
                  { icon: Target, text: 'Earn XP for every question, answer, and note shared', color: 'text-blue-400' },
                  { icon: Trophy, text: 'Unlock badges and achievements for milestones', color: 'text-green-400' },
                  { icon: Users, text: 'Compete in leaderboards with your peers', color: 'text-purple-400' },
                  { icon: Zap, text: 'Maintain learning streaks for bonus rewards', color: 'text-orange-400' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass rounded-3xl p-8 bg-white/10">
              <h3 className="text-2xl font-bold mb-8 text-white">Your Learning Dashboard</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '1,250', label: 'Total XP', color: 'text-blue-400', bg: 'bg-blue-500/20' },
                  { value: '15', label: 'Badges Earned', color: 'text-green-400', bg: 'bg-green-500/20' },
                  { value: '7', label: 'Day Streak', color: 'text-purple-400', bg: 'bg-purple-500/20' },
                  { value: '#12', label: 'Rank', color: 'text-orange-400', bg: 'bg-orange-500/20' }
                ].map((stat) => (
                  <div key={stat.label} className={`${stat.bg} rounded-2xl p-6 text-center`}>
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              What Students Say
            </h2>
            <p className="text-xl text-slate-600">Join thousands of students who are already succeeding</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "CuriousHeads completely transformed my study routine. The AI recommendations are spot-on and I've learned so much from my peers!",
                author: 'Priya Sharma',
                role: 'Engineering Student, IIT Delhi',
                avatar: '🎓',
                rating: 5
              },
              {
                quote: "The gamification keeps me motivated to study every day. I love competing in contests and helping other students!",
                author: 'Rahul Gupta',
                role: 'Medical Student, AIIMS',
                avatar: '⚡',
                rating: 5
              },
              {
                quote: "The notes sharing feature saved me countless hours. I found exactly what I needed for my exams!",
                author: 'Ananya Patel',
                role: 'Commerce Student, DU',
                avatar: '📚',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-elegant hover-lift transition-smooth bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">{testimonial.author}</div>
                      <div className="text-sm text-slate-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Learning?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join the community of curious minds and start your journey towards academic excellence today.
          </p>
          <Button 
            size="lg" 
            onClick={() => onNavigate('auth')} 
            className="bg-white text-purple-600 hover:bg-gray-50 text-lg px-10 py-6 shadow-luxury hover-lift font-semibold"
          >
            <CheckCircle className="w-5 h-5 mr-3" />
            Get Started for Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">CuriousHeads</span>
            </div>
            <div className="flex space-x-8 text-slate-600">
              <a href="#" className="hover:text-slate-800 transition-colors">About</a>
              <a href="#" className="hover:text-slate-800 transition-colors">Contact</a>
              <a href="#" className="hover:text-slate-800 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-800 transition-colors">Terms</a>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 text-center text-slate-500">
            <p>© 2024 CuriousHeads. All rights reserved. Built with ❤️ for students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}