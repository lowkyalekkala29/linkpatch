import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import { 
  Plus, 
  GripVertical, 
  Edit3, 
  Trash2, 
  Copy, 
  ExternalLink,
  Search,
  Filter,
  MoreHorizontal,
  Globe,
  Instagram,
  Youtube,
  Twitter,
  Eye,
  EyeOff
} from 'lucide-react';

export default function LinkManager() {
  const [isAddingLink, setIsAddingLink] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const linkIcons = {
    website: Globe,
    instagram: Instagram,
    youtube: Youtube,
    twitter: Twitter
  };

  const links = [
    {
      id: 1,
      title: 'Portfolio Website',
      url: 'https://alexcreator.design',
      type: 'website',
      enabled: true,
      clicks: 423,
      lastClicked: '2 hours ago'
    },
    {
      id: 2,
      title: 'Instagram Profile',
      url: 'https://instagram.com/alexcreator',
      type: 'instagram',
      enabled: true,
      clicks: 312,
      lastClicked: '5 minutes ago'
    },
    {
      id: 3,
      title: 'YouTube Channel',
      url: 'https://youtube.com/alexcreator',
      type: 'youtube',
      enabled: false,
      clicks: 287,
      lastClicked: '1 day ago'
    },
    {
      id: 4,
      title: 'Latest Blog Post',
      url: 'https://blog.alexcreator.design/new-post',
      type: 'website',
      enabled: true,
      clicks: 156,
      lastClicked: '30 minutes ago'
    },
    {
      id: 5,
      title: 'Twitter Profile',
      url: 'https://twitter.com/alexcreator',
      type: 'twitter',
      enabled: true,
      clicks: 89,
      lastClicked: '4 hours ago'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl">Link Manager</h1>
          <p className="text-slate-600">Organize and manage all your links in one place</p>
        </div>
        <Button 
          onClick={() => setIsAddingLink(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Link
        </Button>
      </div>

      {/* Search and Filter */}
      <Card className="bg-white/60 backdrop-blur-sm border-white/50">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                placeholder="Search links..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/50 border-slate-200 rounded-xl"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-xl">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="rounded-xl">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add Link Form */}
      {isAddingLink && (
        <Card className="bg-white/60 backdrop-blur-sm border-white/50">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between">
              Add New Link
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsAddingLink(false)}
              >
                Cancel
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="link-title">Link Title</Label>
                <Input 
                  id="link-title"
                  placeholder="e.g., My Instagram"
                  className="bg-white/50 border-slate-200 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="link-url">URL</Label>
                <Input 
                  id="link-url"
                  placeholder="https://instagram.com/username"
                  className="bg-white/50 border-slate-200 rounded-xl"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
                Add Link
              </Button>
              <Button variant="outline" className="rounded-xl">
                Add & Create Another
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Links List */}
      <Card className="bg-white/60 backdrop-blur-sm border-white/50">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center justify-between">
            Your Links ({links.filter(link => link.enabled).length} active)
            <Badge variant="secondary">{links.length} total</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {links.map((link, index) => {
            const IconComponent = linkIcons[link.type as keyof typeof linkIcons] || Globe;
            return (
              <div 
                key={link.id}
                className={`group flex items-center gap-4 p-4 bg-white/50 rounded-2xl border transition-all duration-200 hover:shadow-md ${
                  link.enabled ? 'border-slate-200' : 'border-slate-100 opacity-60'
                }`}
              >
                {/* Drag Handle */}
                <div className="cursor-grab active:cursor-grabbing opacity-50 group-hover:opacity-100 transition-opacity">
                  <GripVertical className="w-5 h-5 text-slate-400" />
                </div>

                {/* Link Icon */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  link.enabled 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white' 
                    : 'bg-slate-100 text-slate-400'
                }`}>
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Link Info */}
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="truncate">{link.title}</h4>
                    {!link.enabled && (
                      <Badge variant="secondary" className="text-xs">
                        <EyeOff className="w-3 h-3 mr-1" />
                        Hidden
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 truncate">{link.url}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span>{link.clicks} clicks</span>
                    <span>Last clicked {link.lastClicked}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="hidden sm:block text-right">
                  <div className="text-lg">{link.clicks}</div>
                  <div className="text-xs text-slate-600">clicks</div>
                </div>

                {/* Toggle */}
                <div className="flex items-center gap-2">
                  <Switch checked={link.enabled} />
                  {link.enabled ? (
                    <Eye className="w-4 h-4 text-slate-400" />
                  ) : (
                    <EyeOff className="w-4 h-4 text-slate-400" />
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-xl">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-xl">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-xl">
                    <Edit3 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-xl text-red-500 hover:text-red-600 hover:bg-red-50">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Bulk Actions */}
      <Card className="bg-white/60 backdrop-blur-sm border-white/50">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600">Bulk actions:</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="rounded-xl">
                  Enable All
                </Button>
                <Button variant="outline" size="sm" className="rounded-xl">
                  Disable All
                </Button>
                <Button variant="outline" size="sm" className="rounded-xl">
                  Export Links
                </Button>
              </div>
            </div>
            <div className="text-sm text-slate-500">
              Drag links to reorder them on your bio page
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}