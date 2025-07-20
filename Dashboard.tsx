import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { 
  LayoutDashboard, 
  Link2, 
  Megaphone, 
  BarChart3, 
  Settings, 
  Crown,
  Plus,
  TrendingUp,
  Users,
  MousePointer,
  ExternalLink,
  Zap,
  ChevronRight,
  Bell
} from 'lucide-react';

export default function Dashboard() {
  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Link2, label: 'Links', count: 8 },
    { icon: Megaphone, label: 'Smart CTAs', count: 2 },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Settings, label: 'Settings' }
  ];

  const recentActivity = [
    { action: 'Link clicked', link: 'Instagram Profile', time: '2 minutes ago' },
    { action: 'New visitor', source: 'Twitter', time: '5 minutes ago' },
    { action: 'Link clicked', link: 'Portfolio Website', time: '8 minutes ago' },
    { action: 'CTA shown', cta: 'Newsletter Signup', time: '12 minutes ago' }
  ];

  return (
    <div className="grid lg:grid-cols-4 gap-6">
      {/* Sidebar */}
      <div className="lg:col-span-1 space-y-6">
        {/* User Profile */}
        <Card className="bg-white/60 backdrop-blur-sm border-white/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">AC</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h3 className="truncate">Alex Creator</h3>
                <p className="text-sm text-slate-600 truncate">alex_creator</p>
              </div>
              <Bell className="w-5 h-5 text-slate-400" />
            </div>
            <div className="text-center space-y-2">
              <div className="text-sm text-slate-600">linkpatch.bio/alex_creator</div>
              <Button variant="outline" size="sm" className="w-full rounded-lg">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Page
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <Card className="bg-white/60 backdrop-blur-sm border-white/50">
          <CardContent className="p-4">
            <nav className="space-y-2">
              {sidebarItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                      item.active 
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200' 
                        : 'hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="flex-1">{item.label}</span>
                    {item.count && (
                      <Badge variant="secondary" className="text-xs">
                        {item.count}
                      </Badge>
                    )}
                    <ChevronRight className="w-4 h-4" />
                  </div>
                );
              })}
            </nav>
          </CardContent>
        </Card>

        {/* Upgrade Prompt */}
        <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 text-white">
          <CardContent className="p-6 text-center space-y-4">
            <Crown className="w-12 h-12 mx-auto text-yellow-300" />
            <div className="space-y-2">
              <h3>Upgrade to Pro</h3>
              <p className="text-sm text-blue-100">
                Unlock advanced analytics, custom themes, and more
              </p>
            </div>
            <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
              Upgrade Now
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-3 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl">Good morning, Alex!</h1>
            <p className="text-slate-600">Here's what's happening with your links today.</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
            <Plus className="w-4 h-4 mr-2" />
            Add New Link
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white/60 backdrop-blur-sm border-white/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Total Clicks</p>
                  <p className="text-2xl">1,247</p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600">+12.5%</span>
                    <span className="text-sm text-slate-600">vs last week</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <MousePointer className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-white/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Page Views</p>
                  <p className="text-2xl">892</p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600">+8.2%</span>
                    <span className="text-sm text-slate-600">vs last week</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-white/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Click Rate</p>
                  <p className="text-2xl">73.4%</p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600">+2.1%</span>
                    <span className="text-sm text-slate-600">vs last week</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Links and Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-white/60 backdrop-blur-sm border-white/50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-between">
                Top Performing Links
                <Badge variant="secondary" className="text-xs">Last 7 days</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'Instagram Profile', clicks: 423, change: '+18%' },
                { name: 'Portfolio Website', clicks: 312, change: '+12%' },
                { name: 'YouTube Channel', clicks: 287, change: '+8%' },
                { name: 'Newsletter Signup', clicks: 156, change: '+23%' }
              ].map((link, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <div>
                      <p className="text-sm">{link.name}</p>
                      <p className="text-xs text-slate-600">{link.clicks} clicks</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                    {link.change}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-white/50">
            <CardHeader className="pb-4">
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">{activity.action}</p>
                    {activity.link && (
                      <p className="text-xs text-slate-600">{activity.link}</p>
                    )}
                    {activity.source && (
                      <p className="text-xs text-slate-600">from {activity.source}</p>
                    )}
                    {activity.cta && (
                      <p className="text-xs text-slate-600">{activity.cta}</p>
                    )}
                  </div>
                  <span className="text-xs text-slate-500 whitespace-nowrap">{activity.time}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-white/60 backdrop-blur-sm border-white/50">
          <CardHeader className="pb-4">
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Plus, label: 'Add Link', desc: 'Create a new link' },
                { icon: Megaphone, label: 'Create CTA', desc: 'Add smart call-to-action' },
                { icon: BarChart3, label: 'View Analytics', desc: 'See detailed stats' },
                { icon: Settings, label: 'Customize Page', desc: 'Edit appearance' }
              ].map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-slate-50 border-slate-200 rounded-xl"
                  >
                    <IconComponent className="w-6 h-6 text-slate-600" />
                    <div className="text-center">
                      <p className="text-sm">{action.label}</p>
                      <p className="text-xs text-slate-600">{action.desc}</p>
                    </div>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}