import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Slider } from './ui/slider';
import { 
  Palette, 
  Type, 
  Layout, 
  Smartphone, 
  Monitor,
  Sun,
  Moon,
  Upload,
  RotateCcw,
  Save,
  Eye,
  Settings,
  Image as ImageIcon,
  Globe,
  Instagram,
  Youtube,
  ExternalLink
} from 'lucide-react';

export default function BioEditor() {
  const [previewMode, setPreviewMode] = useState<'mobile' | 'desktop'>('mobile');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [profileName, setProfileName] = useState('Alex Creator');
  const [profileBio, setProfileBio] = useState('Digital artist & designer sharing creative inspiration');
  
  const colorThemes = [
    { name: 'Blue', colors: ['#3B82F6', '#1D4ED8'], active: true },
    { name: 'Purple', colors: ['#8B5CF6', '#7C3AED'], active: false },
    { name: 'Green', colors: ['#10B981', '#059669'], active: false },
    { name: 'Orange', colors: ['#F59E0B', '#D97706'], active: false },
    { name: 'Pink', colors: ['#EC4899', '#DB2777'], active: false },
    { name: 'Red', colors: ['#EF4444', '#DC2626'], active: false }
  ];

  const buttonStyles = [
    { name: 'Rounded', style: 'rounded-2xl', active: true },
    { name: 'Sharp', style: 'rounded-lg', active: false },
    { name: 'Pill', style: 'rounded-full', active: false }
  ];

  const links = [
    { title: 'Portfolio Website', icon: Globe, url: 'alexcreator.design', enabled: true },
    { title: 'Instagram', icon: Instagram, url: 'instagram.com/alexcreator', enabled: true },
    { title: 'YouTube Channel', icon: Youtube, url: 'youtube.com/alexcreator', enabled: true },
    { title: 'Latest Blog Post', icon: Globe, url: 'blog.alexcreator.design', enabled: true }
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-200px)]">
      {/* Editor Panel */}
      <div className="space-y-6 overflow-y-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl">Bio Page Editor</h1>
            <p className="text-slate-600">Customize your page appearance and layout</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-xl">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>

        <Card className="bg-white/60 backdrop-blur-sm border-white/50">
          <CardContent className="p-6">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-slate-50 rounded-xl">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="theme">Theme</TabsTrigger>
                <TabsTrigger value="layout">Layout</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Profile Settings
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                        AC
                      </div>
                      <Button variant="outline" size="sm" className="rounded-xl">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Photo
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="display-name">Display Name</Label>
                      <Input 
                        id="display-name"
                        value={profileName}
                        onChange={(e) => setProfileName(e.target.value)}
                        className="bg-white/50 border-slate-200 rounded-xl"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Input 
                        id="bio"
                        value={profileBio}
                        onChange={(e) => setProfileBio(e.target.value)}
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
                </div>
              </TabsContent>

              <TabsContent value="theme" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2">
                    <Palette className="w-5 h-5" />
                    Theme & Colors
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Dark Mode</span>
                      <div className="flex items-center gap-2">
                        <Sun className="w-4 h-4" />
                        <Switch checked={isDarkTheme} onCheckedChange={setIsDarkTheme} />
                        <Moon className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label>Color Theme</Label>
                      <div className="grid grid-cols-3 gap-3">
                        {colorThemes.map((theme, index) => (
                          <div 
                            key={index}
                            className={`p-3 rounded-xl border-2 cursor-pointer transition-all ${
                              theme.active ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex gap-1 mb-2">
                              <div 
                                className="w-4 h-4 rounded-full"
                                style={{ background: `linear-gradient(45deg, ${theme.colors[0]}, ${theme.colors[1]})` }}
                              ></div>
                              <div 
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: theme.colors[1] }}
                              ></div>
                            </div>
                            <p className="text-xs">{theme.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label>Background Gradient</Label>
                      <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="layout" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2">
                    <Layout className="w-5 h-5" />
                    Layout & Style
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <Label>Button Style</Label>
                      <div className="grid grid-cols-3 gap-3">
                        {buttonStyles.map((style, index) => (
                          <div 
                            key={index}
                            className={`p-3 border-2 cursor-pointer transition-all ${
                              style.active ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-slate-300'
                            } ${style.style}`}
                          >
                            <div className={`w-full h-8 bg-gradient-to-r from-blue-500 to-purple-500 ${style.style} mb-2`}></div>
                            <p className="text-xs text-center">{style.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label>Button Spacing</Label>
                      <Slider defaultValue={[16]} max={32} step={4} className="w-full" />
                    </div>
                    
                    <div className="space-y-3">
                      <Label>Page Width</Label>
                      <Slider defaultValue={[400]} min={320} max={500} step={20} className="w-full" />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="advanced" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Advanced Settings
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p>Show Link Icons</p>
                        <p className="text-sm text-slate-600">Display icons next to link titles</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p>Click Animations</p>
                        <p className="text-sm text-slate-600">Add subtle animations on click</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p>Show Click Counts</p>
                        <p className="text-sm text-slate-600">Display click statistics publicly</p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="custom-css">Custom CSS</Label>
                      <textarea 
                        id="custom-css"
                        placeholder="/* Add your custom styles here */"
                        className="w-full h-24 p-3 text-sm bg-white/50 border border-slate-200 rounded-xl resize-none"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Preview Panel */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg">Live Preview</h2>
          <div className="flex items-center gap-2">
            <Button
              variant={previewMode === 'mobile' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setPreviewMode('mobile')}
              className="rounded-xl"
            >
              <Smartphone className="w-4 h-4" />
            </Button>
            <Button
              variant={previewMode === 'desktop' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setPreviewMode('desktop')}
              className="rounded-xl"
            >
              <Monitor className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <Card className="bg-white/60 backdrop-blur-sm border-white/50 h-[600px] overflow-hidden">
          <CardContent className="p-6 h-full">
            <div className="h-full flex items-center justify-center">
              <div className={`relative ${previewMode === 'mobile' ? 'w-80' : 'w-full max-w-md'} h-full`}>
                {previewMode === 'mobile' && (
                  <div className="absolute inset-0 bg-black rounded-[2.5rem] p-2">
                    <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                      <div className="w-full h-6 bg-black rounded-t-[2rem] flex items-center justify-center">
                        <div className="w-16 h-1 bg-white/30 rounded-full"></div>
                      </div>
                      <div className={`p-6 h-full ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white'} overflow-y-auto`}>
                        <PreviewContent 
                          profileName={profileName}
                          profileBio={profileBio}
                          links={links}
                          isDark={isDarkTheme}
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {previewMode === 'desktop' && (
                  <div className={`w-full h-full p-8 ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white'} rounded-2xl border overflow-y-auto`}>
                    <div className="max-w-sm mx-auto">
                      <PreviewContent 
                        profileName={profileName}
                        profileBio={profileBio}
                        links={links}
                        isDark={isDarkTheme}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 rounded-xl">
            <Eye className="w-4 h-4 mr-2" />
            Preview in New Tab
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
            Publish Changes
          </Button>
        </div>
      </div>
    </div>
  );
}

function PreviewContent({ profileName, profileBio, links, isDark }: {
  profileName: string;
  profileBio: string;
  links: any[];
  isDark: boolean;
}) {
  return (
    <div className="space-y-6">
      {/* Profile Section */}
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl">
          {profileName.split(' ').map(n => n[0]).join('')}
        </div>
        <h2 className="text-lg mb-2">{profileName}</h2>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
          {profileBio}
        </p>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl p-4 text-white text-center">
        <p className="text-sm">🎨 New artwork collection is live!</p>
      </div>

      {/* Links */}
      <div className="space-y-3">
        {links.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <Button 
              key={index}
              variant="outline" 
              className={`w-full justify-start gap-3 py-6 rounded-2xl transition-all hover:scale-105 ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                  : 'bg-white border-slate-200 hover:bg-slate-50'
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span className="flex-1 text-left">{link.title}</span>
              <ExternalLink className="w-4 h-4 opacity-50" />
            </Button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="text-center pt-4">
        <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>
          Made with LinkPatch
        </p>
      </div>
    </div>
  );
}