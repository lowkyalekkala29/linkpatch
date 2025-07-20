import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Switch } from './ui/switch';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ExternalLink, 
  Instagram, 
  Youtube, 
  Globe,
  Twitter,
  Moon,
  Sun,
  Smartphone,
  Monitor,
  Heart,
  Share
} from 'lucide-react';
import { useState } from 'react';

export default function PublicBioPage() {
  const [isDark, setIsDark] = useState(false);
  const [viewMode, setViewMode] = useState<'mobile' | 'desktop'>('mobile');
  
  const links = [
    { 
      title: 'Portfolio Website', 
      url: 'alexcreator.design',
      icon: Globe, 
      gradient: 'from-blue-500 to-cyan-500',
      clicks: 523 
    },
    { 
      title: 'Instagram Profile', 
      url: 'instagram.com/alexcreator',
      icon: Instagram, 
      gradient: 'from-pink-500 to-rose-500',
      clicks: 412 
    },
    { 
      title: 'YouTube Channel', 
      url: 'youtube.com/alexcreator',
      icon: Youtube, 
      gradient: 'from-red-500 to-orange-500',
      clicks: 387 
    },
    { 
      title: 'Latest Blog Post: Design Trends 2024', 
      url: 'blog.alexcreator.design/trends-2024',
      icon: Globe, 
      gradient: 'from-purple-500 to-indigo-500',
      clicks: 298 
    },
    { 
      title: 'Twitter Profile', 
      url: 'twitter.com/alexcreator',
      icon: Twitter, 
      gradient: 'from-sky-500 to-blue-500',
      clicks: 272 
    }
  ];

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-2">Public Bio Page</h1>
          <p className="text-slate-600">This is how your page appears to visitors</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4" />
            <Switch checked={isDark} onCheckedChange={setIsDark} />
            <Moon className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1 bg-white/60 backdrop-blur-sm rounded-xl p-1 border border-white/50">
            <Button
              variant={viewMode === 'mobile' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('mobile')}
              className="rounded-lg"
            >
              <Smartphone className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'desktop' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('desktop')}
              className="rounded-lg"
            >
              <Monitor className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Preview Container */}
      <div className="flex justify-center">
        <div className={`${viewMode === 'mobile' ? 'max-w-sm' : 'max-w-md'} w-full`}>
          {viewMode === 'mobile' && (
            <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
              <div className="w-full h-6 bg-black rounded-t-[2rem] flex items-center justify-center">
                <div className="w-16 h-1 bg-white/30 rounded-full"></div>
              </div>
              <div className={`rounded-[2rem] overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-white'} min-h-[600px]`}>
                <BioContent isDark={isDark} links={links} />
              </div>
            </div>
          )}
          
          {viewMode === 'desktop' && (
            <Card className={`shadow-2xl overflow-hidden ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white'}`}>
              <CardContent className="p-0">
                <BioContent isDark={isDark} links={links} />
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Page URL and Actions */}
      <Card className="bg-white/60 backdrop-blur-sm border-white/50">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div>
              <p className="text-sm text-slate-600 mb-2">Your bio page is live at:</p>
              <div className="bg-slate-50 rounded-xl p-4 border-2 border-dashed border-slate-300">
                <code className="text-lg">linkpatch.bio/alexcreator</code>
              </div>
            </div>
            
            <div className="flex gap-3 justify-center">
              <Button 
                variant="outline" 
                className="rounded-xl"
                onClick={() => window.open('https://linkpatch.bio/alexcreator', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in New Tab
              </Button>
              <Button 
                variant="outline" 
                className="rounded-xl"
                onClick={() => navigator.clipboard.writeText('https://linkpatch.bio/alexcreator')}
              >
                <Share className="w-4 h-4 mr-2" />
                Copy Link
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function BioContent({ isDark, links }: { isDark: boolean; links: any[] }) {
  return (
    <div className="p-8 space-y-8">
      {/* Profile Header */}
      <div className="text-center space-y-4">
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl shadow-lg">
            AC
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 border-4 border-white rounded-full"></div>
        </div>
        
        <div className="space-y-2">
          <h1 className={`text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Alex Creator
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Digital Artist & Designer
          </p>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            ✨ Creating beautiful digital experiences • 🎨 Available for commissions
          </p>
        </div>
      </div>

      {/* Smart CTA Banner */}
      <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-2xl p-6 text-white text-center shadow-lg">
        <div className="space-y-2">
          <p className="text-lg">🎨 New Course Just Launched!</p>
          <p className="text-sm opacity-90">
            "Mastering Digital Art" - Get 50% off this week only
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 mt-3 rounded-xl px-6">
            Learn More
          </Button>
        </div>
      </div>

      {/* Links */}
      <div className="space-y-4">
        {links.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <Button 
              key={index}
              variant="outline" 
              className={`w-full justify-start gap-4 py-6 px-6 rounded-2xl transition-all duration-200 hover:scale-[1.02] hover:shadow-lg group ${
                isDark 
                  ? 'bg-gray-800/50 border-gray-700 text-white hover:bg-gray-700/50 backdrop-blur-sm' 
                  : 'bg-white/80 border-gray-200 hover:bg-white backdrop-blur-sm'
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${link.gradient} shadow-lg`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1 text-left">
                <div className="text-base mb-1">{link.title}</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {link.url} • {link.clicks} clicks
                </div>
              </div>
              
              <ExternalLink className={`w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`} />
            </Button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Heart className={`w-4 h-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
          <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            Made with LinkPatch
          </span>
        </div>
        <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
          Create your own link in bio page
        </p>
      </div>
    </div>
  );
}