import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  User, 
  Settings as SettingsIcon, 
  Crown, 
  Bell, 
  Shield, 
  Globe,
  Palette,
  Code,
  Trash2,
  Upload,
  Save,
  Eye,
  Link,
  Mail,
  Lock,
  Smartphone,
  Monitor,
  Sun,
  Moon,
  Download,
  ExternalLink
} from 'lucide-react';

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true,
    marketing: false
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl mb-2">Settings</h1>
        <p className="text-slate-600">Manage your account, profile, and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-1 shadow-sm border border-white/50">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 bg-transparent h-auto p-0">
            <TabsTrigger value="profile" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3">
              Profile
            </TabsTrigger>
            <TabsTrigger value="account" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3">
              Account
            </TabsTrigger>
            <TabsTrigger value="appearance" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3">
              Appearance
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3">
              Notifications
            </TabsTrigger>
            <TabsTrigger value="domain" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3">
              Domain
            </TabsTrigger>
            <TabsTrigger value="billing" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3">
              Billing
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="profile" className="space-y-6">
          <Card className="bg-white/60 backdrop-blur-sm border-white/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="w-20 h-20">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xl">
                    AC
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline" className="rounded-xl">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                  <p className="text-sm text-slate-600">JPG, PNG or GIF. Max 2MB.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="display-name">Display Name</Label>
                  <Input 
                    id="display-name"
                    defaultValue="Alex Creator"
                    className="bg-white/50 border-slate-200 rounded-xl"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 text-slate-500 text-sm">
                      linkpatch.bio/
                    </span>
                    <Input 
                      id="username"
                      defaultValue="alexcreator"
                      className="rounded-l-none bg-white/50 border-slate-200 rounded-r-xl"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea 
                  id="bio"
                  defaultValue="Digital artist & designer sharing creative inspiration"
                  className="w-full h-20 p-3 bg-white/50 border border-slate-200 rounded-xl resize-none"
                />
              </div>

              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-6">
          <Card className="bg-white/60 backdrop-blur-sm border-white/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Account Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    defaultValue="alex@example.com"
                    className="bg-white/50 border-slate-200 rounded-xl"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Button variant="outline" className="w-full justify-start rounded-xl">
                    <Lock className="w-4 h-4 mr-2" />
                    Change Password
                  </Button>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="mb-4 text-red-600">Danger Zone</h4>
                <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 rounded-xl">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card className="bg-white/60 backdrop-blur-sm border-white/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Appearance Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4>Theme</h4>
                  <p className="text-sm text-slate-600">Choose your preferred theme</p>
                </div>
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4" />
                  <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
                  <Moon className="w-4 h-4" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="bg-white/60 backdrop-blur-sm border-white/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { key: 'email', label: 'Email Notifications', desc: 'Receive updates via email' },
                { key: 'weekly', label: 'Weekly Reports', desc: 'Get weekly analytics summary' },
                { key: 'marketing', label: 'Marketing Updates', desc: 'Product news and tips' }
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <div>
                    <h4>{item.label}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                  <Switch 
                    checked={notifications[item.key as keyof typeof notifications]}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, [item.key]: checked }))
                    }
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="domain" className="space-y-6">
          <Card className="bg-white/60 backdrop-blur-sm border-white/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Custom Domain
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600">Pro</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="custom-domain">Custom Domain</Label>
                <Input 
                  id="custom-domain"
                  placeholder="yourdomain.com"
                  className="bg-white/50 border-slate-200 rounded-xl"
                />
                <p className="text-sm text-slate-600">Use your own domain instead of linkpatch.bio</p>
              </div>
              
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
                Connect Domain
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card className="bg-white/60 backdrop-blur-sm border-white/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="w-5 h-5" />
                Billing & Subscription
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4>Free Plan</h4>
                    <p className="text-sm text-slate-600">Current plan</p>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
                    Upgrade to Pro
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}