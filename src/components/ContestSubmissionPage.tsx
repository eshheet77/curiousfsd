import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ArrowLeft, Upload, Code, FileText, Clock, Users, Trophy, Save } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Label } from './ui/label';
import { Progress } from './ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';

export function ContestSubmissionPage({ contestId, user, onNavigate, onLogout }) {
  const [submission, setSubmission] = useState({
    type: '',
    code: '',
    language: 'python',
    essay: '',
    files: [],
    answers: {}
  });
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  // Mock contest data
  const contest = {
    id: contestId,
    title: 'Weekly Coding Challenge - Data Structures',
    description: 'Test your problem-solving skills with advanced DSA questions covering arrays, trees, and graphs.',
    type: 'coding', // coding, quiz, essay, case-study
    difficulty: 'Medium',
    timeLimit: '2 hours',
    totalPoints: 100,
    submissionDeadline: '2024-03-27 23:59',
    instructions: `Welcome to the Weekly Coding Challenge! 

Rules:
1. You have 2 hours to complete all problems
2. Submit your solutions using the provided interface
3. Code will be automatically tested against hidden test cases
4. Partial credit may be awarded for incomplete solutions

Good luck!`,
    problems: [
      {
        id: 1,
        title: 'Binary Tree Level Order Traversal',
        description: `Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).

Example:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Constraints:
- The number of nodes in the tree is in the range [0, 2000]
- -1000 <= Node.val <= 1000`,
        points: 30,
        testCases: 5,
        difficulty: 'Medium'
      },
      {
        id: 2,
        title: 'Maximum Subarray Sum',
        description: `Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Constraints:
- 1 <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4`,
        points: 35,
        testCases: 8,
        difficulty: 'Medium'
      },
      {
        id: 3,
        title: 'Graph Valid Tree',
        description: `Given n nodes labeled from 0 to n-1 and a list of undirected edges, write a function to check whether these edges make up a valid tree.

Example:
Input: n = 5, edges = [[0,1], [0,2], [0,3], [1,4]]
Output: true

Constraints:
- 1 <= n <= 2000
- 0 <= edges.length <= 5000`,
        points: 35,
        testCases: 6,
        difficulty: 'Hard'
      }
    ]
  };

  const quizQuestions = [
    {
      id: 1,
      question: 'What is the time complexity of searching in a balanced binary search tree?',
      options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
      correctAnswer: 1,
      points: 10
    },
    {
      id: 2,
      question: 'Which data structure uses LIFO (Last In First Out) principle?',
      options: ['Queue', 'Stack', 'Array', 'Linked List'],
      correctAnswer: 1,
      points: 10
    },
    {
      id: 3,
      question: 'What is the worst-case time complexity of QuickSort?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
      correctAnswer: 2,
      points: 15
    }
  ];

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCodeSubmission = (problemId) => {
    if (!submission.code.trim()) {
      toast.error('Please write your code before submitting');
      return;
    }
    toast.success(`Solution for Problem ${problemId} submitted successfully!`);
  };

  const handleQuizAnswer = (questionId, answerIndex) => {
    setSubmission({
      ...submission,
      answers: {
        ...submission.answers,
        [questionId]: answerIndex
      }
    });
  };

  const handleFinalSubmission = () => {
    toast.success('Contest submission completed! Good luck!');
    onNavigate('contests');
  };

  const renderCodingContest = () => (
    <div className="space-y-6">
      {contest.problems.map((problem, index) => (
        <Card key={problem.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <span>Problem {index + 1}: {problem.title}</span>
                <Badge variant="outline">{problem.difficulty}</Badge>
              </CardTitle>
              <Badge className="bg-blue-100 text-blue-700">
                {problem.points} points
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose max-w-none">
              <p className="whitespace-pre-line">{problem.description}</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-4">
                <Label>Language:</Label>
                <Select value={submission.language} onValueChange={(value) => setSubmission({...submission, language: value})}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="java">Java</SelectItem>
                    <SelectItem value="cpp">C++</SelectItem>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Textarea
                placeholder={`def solution(${problem.id === 1 ? 'root' : problem.id === 2 ? 'nums' : 'n, edges'}):\n    # Write your solution here\n    pass`}
                rows={12}
                value={submission.code}
                onChange={(e) => setSubmission({...submission, code: e.target.value})}
                className="font-mono text-sm"
              />
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Test cases: {problem.testCases} | Time limit: 1 second
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline">
                    <Code className="w-4 h-4 mr-2" />
                    Run Code
                  </Button>
                  <Button onClick={() => handleCodeSubmission(problem.id)}>
                    Submit Solution
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderQuizContest = () => (
    <div className="space-y-6">
      {quizQuestions.map((question, index) => (
        <Card key={question.id}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Question {index + 1}</span>
              <Badge className="bg-green-100 text-green-700">
                {question.points} points
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-lg">{question.question}</p>
              <div className="grid gap-3">
                {question.options.map((option, optionIndex) => (
                  <label
                    key={optionIndex}
                    className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 ${
                      submission.answers[question.id] === optionIndex ? 'border-primary bg-primary/10' : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      checked={submission.answers[question.id] === optionIndex}
                      onChange={() => handleQuizAnswer(question.id, optionIndex)}
                      className="rounded"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderEssayContest = () => (
    <Card>
      <CardHeader>
        <CardTitle>Essay Submission</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Topic: "The Future of Artificial Intelligence in Education"</Label>
          <p className="text-sm text-muted-foreground">
            Write a comprehensive essay (800-1200 words) discussing how AI will transform education in the next decade.
            Consider both opportunities and challenges.
          </p>
        </div>
        <Textarea
          placeholder="Start writing your essay here..."
          rows={20}
          value={submission.essay}
          onChange={(e) => setSubmission({...submission, essay: e.target.value})}
          className="min-h-[400px]"
        />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Word count: {submission.essay.split(' ').filter(word => word.length > 0).length}</span>
          <span>Target: 800-1200 words</span>
        </div>
      </CardContent>
    </Card>
  );

  const renderFileUpload = () => (
    <Card>
      <CardHeader>
        <CardTitle>File Upload</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-lg mb-2">Upload your submission files</p>
            <p className="text-sm text-muted-foreground mb-4">
              Drag and drop files here, or click to browse
            </p>
            <Button variant="outline">
              Choose Files
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            Accepted formats: PDF, DOC, DOCX, ZIP, TXT (Max 10MB per file)
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => onNavigate('contests')}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-xl font-bold">{contest.title}</h1>
                <p className="text-sm text-muted-foreground">Contest Submission</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">{formatTime(timeLeft)}</div>
                <div className="text-xs text-muted-foreground">Time Remaining</div>
              </div>
              <Button onClick={handleFinalSubmission} className="bg-green-600 hover:bg-green-700">
                Submit Contest
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  Contest Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground">Difficulty</div>
                  <Badge variant="outline">{contest.difficulty}</Badge>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Total Points</div>
                  <div className="font-semibold">{contest.totalPoints}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Time Limit</div>
                  <div className="font-semibold">{contest.timeLimit}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Progress</div>
                  <Progress value={25} className="mt-2" />
                  <div className="text-xs text-muted-foreground mt-1">1 of 3 problems submitted</div>
                </div>
                
                <Separator />
                
                <div>
                  <div className="text-sm font-medium mb-2">Quick Actions</div>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Save className="w-4 h-4 mr-2" />
                      Save Draft
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      View Instructions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="problems" className="space-y-6">
              <TabsList>
                <TabsTrigger value="problems">Problems</TabsTrigger>
                <TabsTrigger value="instructions">Instructions</TabsTrigger>
                <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
              </TabsList>
              
              <TabsContent value="problems">
                {contest.type === 'coding' && renderCodingContest()}
                {contest.type === 'quiz' && renderQuizContest()}
                {contest.type === 'essay' && renderEssayContest()}
                {contest.type === 'case-study' && renderFileUpload()}
              </TabsContent>
              
              <TabsContent value="instructions">
                <Card>
                  <CardHeader>
                    <CardTitle>Contest Instructions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <p className="whitespace-pre-line">{contest.instructions}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="leaderboard">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Live Leaderboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { rank: 1, name: 'Priya Sharma', score: 85, time: '45:23' },
                        { rank: 2, name: 'Rahul Gupta', score: 80, time: '52:15' },
                        { rank: 3, name: 'Ananya Patel', score: 75, time: '48:30' },
                        { rank: 4, name: user.name, score: 25, time: '25:45', isCurrentUser: true },
                        { rank: 5, name: 'Vikram Singh', score: 20, time: '18:22' }
                      ].map((entry) => (
                        <div key={entry.rank} className={`flex items-center justify-between p-3 rounded-lg ${entry.isCurrentUser ? 'bg-primary/10 border border-primary/20' : 'bg-muted/50'}`}>
                          <div className="flex items-center space-x-3">
                            <div className="font-bold">#{entry.rank}</div>
                            <div>
                              <div className="font-medium">{entry.name}</div>
                              <div className="text-sm text-muted-foreground">Time: {entry.time}</div>
                            </div>
                          </div>
                          <div className="font-bold">{entry.score} pts</div>
                        </div>
                      ))}
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