import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { 
  Plus, 
  Megaphone, 
  Clock, 
  MapPin, 
  Users, 
  Target,
  Edit3, 
  Trash2, 
  Eye,
  EyeOff,
  Zap,
  Calendar,
  BarChart3,
  Settings
} from 'lucide-react';

export default function SmartCTAs() {
  const [isCreating, setIsCreating] = useState(false);
  
  const ctas = [
    {
      id: 1,
      title: 'New Course Launch',
      message: '🎨 My new design course is live! Get 50% off for early birds',
      type: 'announcement',
      conditions: {
        source: 'all',
        timeFrame: 'always',
        location: 'global'
      },
      enabled: true,
      clicks: 234,
      impressions: 1247,
      ctr: '18.8%',
      created: '2 days ago'
    },
    {
      id: 2,
      title: 'Instagram Followers',
      message: '📱 Follow me on Instagram for daily design tips!',
      type: 'social',
      conditions: {
        source: 'not-instagram',
        timeFrame: 'always',
        location: 'global'
      },
      enabled: true,
      clicks: 89,
      impressions: 456,
      ctr: '19.5%',
      created: '1 week ago'
    },
    {
      id: 3,
      title: 'Weekend Sale',
      message: '💸 Weekend only: 30% off all digital products!',
      type: 'promotion',
      conditions: {
        source: 'all',
        timeFrame: 'weekend',
        location: 'global'
      },
      enabled: false,
      clicks: 0,
      impressions: 0,
      ctr: '0%',
      created: '3 days ago'
    }
  ];

  const triggerTypes = [
    { value: 'source', label: 'Traffic Source', icon: Target },
    { value: 'time', label: 'Time Based', icon: Clock },
    { value: 'location', label: 'Location', icon: MapPin },
    { value: 'device', label: 'Device Type', icon: Users },
    { value: 'visits', label: 'Visit Count', icon: BarChart3 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl">Smart CTAs</h1>
          <p className="text-slate-600">Create dynamic call-to-actions that adapt to your visitors</p>
        </div>
        <Button 
          onClick={() => setIsCreating(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Smart CTA
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="bg-white/60 backdrop-blur-sm border-white/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Active CTAs</p>
                <p className="text-2xl">2</p>
              </div>
              <Megaphone className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/60 backdrop-blur-sm border-white/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Total Clicks</p>
                <p className="text-2xl">323</p>
              </div>
              <Target className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/60 backdrop-blur-sm border-white/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Impressions</p>
                <p className="text-2xl">1,703</p>
              </div>
              <Eye className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/60 backdrop-blur-sm border-white/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Avg. CTR</p>
                <p className="text-2xl">19.1%</p>
              </div>
              <BarChart3 className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Create CTA Form */}
      {isCreating && (
        <Card className="bg-white/60 backdrop-blur-sm border-white/50">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between">
              Create Smart CTA
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsCreating(false)}
              >
                Cancel
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <h4 className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Basic Information
                </h4>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cta-title">CTA Title</Label>
                    <Input 
                      id="cta-title"
                      placeholder="e.g., New Course Launch"
                      className="bg-white/50 border-slate-200 rounded-xl"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cta-message">Message</Label>
                    <Textarea 
                      id="cta-message"
                      placeholder="🎨 My new design course is live! Get 50% off..."
                      className="bg-white/50 border-slate-200 rounded-xl"
                      rows={3}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cta-link">Link URL (optional)</Label>
                    <Input 
                      id="cta-link"
                      placeholder="https://course.alexcreator.design"
                      className="bg-white/50 border-slate-200 rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Smart Triggers */}
              <div className="space-y-4">
                <h4 className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Smart Triggers
                </h4>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Show when visitor is from</Label>
                    <Select defaultValue="all">
                      <SelectTrigger className="bg-white/50 border-slate-200 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All sources</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="twitter">Twitter</SelectItem>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="google">Google</SelectItem>
                        <SelectItem value="direct">Direct traffic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Time condition</Label>
                    <Select defaultValue="always">
                      <SelectTrigger className="bg-white/50 border-slate-200 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="always">Always show</SelectItem>
                        <SelectItem value="business">Business hours</SelectItem>
                        <SelectItem value="weekend">Weekends only</SelectItem>
                        <SelectItem value="specific">Specific dates</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Device type</Label>
                    <Select defaultValue="all">
                      <SelectTrigger className="bg-white/50 border-slate-200 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All devices</SelectItem>
                        <SelectItem value="mobile">Mobile only</SelectItem>
                        <SelectItem value="desktop">Desktop only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
                Create CTA
              </Button>
              <Button variant="outline" className="rounded-xl">
                Save as Draft
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Existing CTAs */}
      <Card className="bg-white/60 backdrop-blur-sm border-white/50">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center justify-between">
            Your Smart CTAs
            <Badge variant="secondary">{ctas.length} total</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {ctas.map((cta) => (
            <div 
              key={cta.id}
              className={`group p-6 rounded-2xl border-2 transition-all ${
                cta.enabled 
                  ? 'border-blue-200 bg-blue-50/50' 
                  : 'border-slate-200 bg-slate-50/50 opacity-75'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg">{cta.title}</h4>
                    <Badge 
                      variant={cta.type === 'announcement' ? 'default' : cta.type === 'social' ? 'secondary' : 'outline'}
                      className="capitalize"
                    >
                      {cta.type}
                    </Badge>
                    {cta.enabled ? (
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        <Eye className="w-3 h-3 mr-1" />
                        Active
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-slate-600">
                        <EyeOff className="w-3 h-3 mr-1" />
                        Inactive
                      </Badge>
                    )}
                  </div>
                  <p className="text-slate-600 mb-3">{cta.message}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>Created {cta.created}</span>
                    <span>•</span>
                    <span>Conditions: {Object.keys(cta.conditions).length} rules</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Switch checked={cta.enabled} />
                  <div className="flex opacity-0 group-hover:opacity-100 transition-opacity gap-1">
                    <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-xl">
                      <Edit3 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-xl text-red-500 hover:text-red-600 hover:bg-red-50">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-lg">{cta.clicks}</div>
                  <div className="text-xs text-slate-600">Clicks</div>
                </div>
                <div className="text-center">
                  <div className="text-lg">{cta.impressions}</div>
                  <div className="text-xs text-slate-600">Impressions</div>
                </div>
                <div className="text-center">
                  <div className="text-lg text-blue-600">{cta.ctr}</div>
                  <div className="text-xs text-slate-600">CTR</div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Trigger Types Info */}
      <Card className="bg-white/60 backdrop-blur-sm border-white/50">
        <CardHeader className="pb-4">
          <CardTitle>Available Triggers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {triggerTypes.map((trigger, index) => {
              const IconComponent = trigger.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="text-sm">{trigger.label}</h5>
                    <p className="text-xs text-slate-600">Smart targeting</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}