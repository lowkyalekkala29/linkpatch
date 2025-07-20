import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  ArrowLeft, 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff,
  Check,
  AlertCircle
} from 'lucide-react';

export default function AuthPages() {
  const [showPassword, setShowPassword] = useState(false);
  const [authStep, setAuthStep] = useState<'forms' | 'forgot'>('forms');

  if (authStep === 'forgot') {
    return (
      <div className="max-w-md mx-auto space-y-6">
        <Button 
          variant="ghost" 
          onClick={() => setAuthStep('forms')}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to login
        </Button>
        
        <Card className="bg-white/60 backdrop-blur-sm border-white/50 shadow-xl">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl">Reset your password</CardTitle>
            <p className="text-slate-600">
              Enter your email and we'll send you a reset link
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="reset-email">Email address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input 
                  id="reset-email"
                  type="email" 
                  placeholder="enter@youremail.com"
                  className="pl-10 h-12 bg-white/50 border-slate-200 rounded-xl"
                />
              </div>
            </div>
            
            <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
              Send Reset Link
            </Button>
            
            <div className="text-center text-sm text-slate-600">
              Remember your password?{' '}
              <button 
                onClick={() => setAuthStep('forms')}
                className="text-blue-600 hover:text-blue-700"
              >
                Sign in
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <Tabs defaultValue="signup" className="space-y-6">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-1 shadow-sm border border-white/50">
          <TabsList className="grid w-full grid-cols-2 bg-transparent h-auto p-0">
            <TabsTrigger 
              value="signup" 
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3"
            >
              Sign Up
            </TabsTrigger>
            <TabsTrigger 
              value="login"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3"
            >
              Log In
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="signup" className="space-y-6">
          <Card className="bg-white/60 backdrop-blur-sm border-white/50 shadow-xl">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-2xl">Create your account</CardTitle>
              <p className="text-slate-600">Start building your link page in seconds</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input 
                      id="name"
                      placeholder="Your full name"
                      className="pl-10 h-12 bg-white/50 border-slate-200 rounded-xl"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="enter@youremail.com"
                      className="pl-10 h-12 bg-white/50 border-slate-200 rounded-xl"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input 
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className="pl-10 pr-10 h-12 bg-white/50 border-slate-200 rounded-xl"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-slate-400">linkpatch.bio/</span>
                    <Input 
                      id="username"
                      placeholder="yourname"
                      className="pl-24 h-12 bg-white/50 border-slate-200 rounded-xl"
                    />
                  </div>
                  <p className="text-xs text-slate-500">This will be your public URL</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs">
                  <Check className="w-3 h-3 text-green-500" />
                  <span className="text-slate-600">At least 8 characters</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <AlertCircle className="w-3 h-3 text-slate-400" />
                  <span className="text-slate-600">One uppercase letter</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <AlertCircle className="w-3 h-3 text-slate-400" />
                  <span className="text-slate-600">One number or symbol</span>
                </div>
              </div>
              
              <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
                Create Account
              </Button>
              
              <div className="relative">
                <Separator className="my-4" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-2 text-sm text-slate-500">or</span>
                </span>
              </div>
              
              <Button variant="outline" className="w-full h-12 border-slate-200 rounded-xl">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>
              
              <p className="text-xs text-center text-slate-600">
                By creating an account, you agree to our{' '}
                <span className="text-blue-600">Terms of Service</span> and{' '}
                <span className="text-blue-600">Privacy Policy</span>
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="login" className="space-y-6">
          <Card className="bg-white/60 backdrop-blur-sm border-white/50 shadow-xl">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-2xl">Welcome back</CardTitle>
              <p className="text-slate-600">Sign in to your LinkPatch account</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input 
                      id="login-email"
                      type="email" 
                      placeholder="enter@youremail.com"
                      className="pl-10 h-12 bg-white/50 border-slate-200 rounded-xl"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input 
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10 h-12 bg-white/50 border-slate-200 rounded-xl"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-slate-300" />
                  <span className="text-slate-600">Remember me</span>
                </label>
                <button 
                  onClick={() => setAuthStep('forgot')}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Forgot password?
                </button>
              </div>
              
              <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
                Sign In
              </Button>
              
              <div className="relative">
                <Separator className="my-4" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-2 text-sm text-slate-500">or</span>
                </span>
              </div>
              
              <Button variant="outline" className="w-full h-12 border-slate-200 rounded-xl">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}