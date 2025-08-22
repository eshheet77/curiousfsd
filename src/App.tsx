import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { AuthPage } from './components/AuthPage';
import { Dashboard } from './components/Dashboard';
import { QuestionPage } from './components/QuestionPage';
import { QuestionDetailPage } from './components/QuestionDetailPage';
import { NotesPage } from './components/NotesPage';
import { ContestsPage } from './components/ContestsPage';
import { ContestSubmissionPage } from './components/ContestSubmissionPage';
import { GroupsPage } from './components/GroupsPage';
import { JoinGroupsPage } from './components/JoinGroupsPage';
import { NotificationsPage } from './components/NotificationsPage';
import { ProfilePage } from './components/ProfilePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [selectedContestId, setSelectedContestId] = useState(null);

  const navigate = (page, id = null) => {
    if (page === 'question-detail') {
      setSelectedQuestionId(id);
    } else if (page === 'contest-submission') {
      setSelectedContestId(id);
    }
    setCurrentPage(page);
  };

  const handleAuth = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setSelectedQuestionId(null);
    setSelectedContestId(null);
    setCurrentPage('landing');
  };

  if (!isAuthenticated && currentPage !== 'auth') {
    return <LandingPage onNavigate={navigate} />;
  }

  if (currentPage === 'auth') {
    return <AuthPage onAuth={handleAuth} onNavigate={navigate} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {currentPage === 'dashboard' && (
        <Dashboard user={user} onNavigate={navigate} onLogout={handleLogout} />
      )}
      {currentPage === 'questions' && (
        <QuestionPage user={user} onNavigate={navigate} onLogout={handleLogout} />
      )}
      {currentPage === 'question-detail' && (
        <QuestionDetailPage 
          questionId={selectedQuestionId} 
          user={user} 
          onNavigate={navigate} 
          onLogout={handleLogout} 
        />
      )}
      {currentPage === 'notes' && (
        <NotesPage user={user} onNavigate={navigate} onLogout={handleLogout} />
      )}
      {currentPage === 'contests' && (
        <ContestsPage user={user} onNavigate={navigate} onLogout={handleLogout} />
      )}
      {currentPage === 'contest-submission' && (
        <ContestSubmissionPage 
          contestId={selectedContestId} 
          user={user} 
          onNavigate={navigate} 
          onLogout={handleLogout} 
        />
      )}
      {currentPage === 'groups' && (
        <GroupsPage user={user} onNavigate={navigate} onLogout={handleLogout} />
      )}
      {currentPage === 'join-groups' && (
        <JoinGroupsPage user={user} onNavigate={navigate} onLogout={handleLogout} />
      )}
      {currentPage === 'notifications' && (
        <NotificationsPage user={user} onNavigate={navigate} onLogout={handleLogout} />
      )}
      {currentPage === 'profile' && (
        <ProfilePage user={user} onNavigate={navigate} onLogout={handleLogout} />
      )}
    </div>
  );
}