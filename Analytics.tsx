import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Calendar, 
  TrendingUp, 
  Users, 
  MousePointer, 
  Globe,
  Smartphone,
  Monitor,
  Instagram,
  Twitter,
  Youtube,
  ExternalLink,
  Download,
  Filter,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('7d');
  
  const timeRanges = [
    { value: '24h', label: 'Last 24 hours' },
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 90 days' },
    { value: 'all', label: 'All time' }
  ];

  const overviewStats = [
    { 
      title: 'Page Views', 
      value: '2,347', 
      change: '+23.5%', 
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    { 
      title: 'Link Clicks', 
      value: '1,892', 
      change: '+18.2%', 
      trend: 'up',
      icon: MousePointer,
      color: 'green'
    },
    { 
      title: 'Click Rate', 
      value: '80.6%', 
      change: '+5.3%', 
      trend: 'up',
      icon: TrendingUp,
      color: 'purple'
    },
    { 
      title: 'Avg. Session', 
      value: '2m 34s', 
      change: '-8.1%', 
      trend: 'down',
      icon: Activity,
      color: 'orange'
    }
  ];

  const topLinks = [
    { name: 'Portfolio Website', clicks: 523, percentage: 28, icon: Globe, trend: '+15%' },
    { name: 'Instagram Profile', clicks: 412, percentage: 22, icon: Instagram, trend: '+23%' },
    { name: 'YouTube Channel', clicks: 387, percentage: 20, icon: Youtube, trend: '+8%' },
    { name: 'Latest Blog Post', clicks: 298, percentage: 16, icon: Globe, trend: '+45%' },
    { name: 'Twitter Profile', clicks: 272, percentage: 14, icon: Twitter, trend: '+12%' }
  ];

  const trafficSources = [
    { name: 'Instagram', visits: 892, percentage: 38, color: '#E4405F' },
    { name: 'Direct', visits: 634, percentage: 27, color: '#6B7280' },
    { name: 'Twitter', visits: 423, percentage: 18, color: '#1DA1F2' },
    { name: 'YouTube', visits: 298, percentage: 13, color: '#FF0000' },
    { name: 'Other', visits: 101, percentage: 4, color: '#9CA3AF' }
  ];

  const deviceStats = [
    { type: 'Mobile', percentage: 72, color: '#3B82F6' },
    { type: 'Desktop', percentage: 23, color: '#10B981' },
    { type: 'Tablet', percentage: 5, color: '#F59E0B' }
  ];

  const clicksData = [
    { date: 'Mon', clicks: 45 },
    { date: 'Tue', clicks: 78 },
    { date: 'Wed', clicks: 92 },
    { date: 'Thu', clicks: 65 },
    { date: 'Fri', clicks: 134 },
    { date: 'Sat', clicks: 167 },
    { date: 'Sun', clicks: 145 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl">Analytics</h1>
          <p className="text-slate-600">Track your link performance and audience insights</p>
        </div>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40 bg-white/60 border-white/50 rounded-xl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {timeRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" className="rounded-xl">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="bg-white/60 backdrop-blur-sm border-white/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-slate-600">{stat.title}</p>
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                    stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    stat.color === 'green' ? 'bg-green-100 text-green-600' :
                    stat.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl">{stat.value}</p>
                  <div className="flex items-center gap-1">
                    <TrendingUp className={`w-4 h-4 ${
                      stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`} />
                    <span className={`text-sm ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-slate-600">vs last period</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-1 shadow-sm border border-white/50">
          <TabsList className="grid w-full grid-cols-4 bg-transparent h-auto p-0">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3">
              Overview
            </TabsTrigger>
            <TabsTrigger value="links" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3">
              Links
            </TabsTrigger>
            <TabsTrigger value="audience" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3">
              Audience
            </TabsTrigger>
            <TabsTrigger value="realtime" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3">
              Real-time
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="space-y-6">
          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Click Trends */}
            <Card className="bg-white/60 backdrop-blur-sm border-white/50">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Click Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-48 bg-gradient-to-t from-blue-50 to-transparent rounded-xl p-4 relative overflow-hidden">
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
                      {clicksData.map((day, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                          <div 
                            className="w-8 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm"
                            style={{ height: `${(day.clicks / 200) * 120}px` }}
                          ></div>
                          <span className="text-xs text-slate-600">{day.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center text-sm text-slate-600">
                    Total clicks this week: <span className="text-slate-900">826</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Traffic Sources */}
            <Card className="bg-white/60 backdrop-blur-sm border-white/50">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5" />
                  Traffic Sources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trafficSources.map((source, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: source.color }}
                        ></div>
                        <span className="text-sm">{source.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-slate-600">{source.visits}</span>
                        <span className="text-sm font-medium w-10 text-right">{source.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Device Breakdown */}
          <Card className="bg-white/60 backdrop-blur-sm border-white/50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                Device Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {deviceStats.map((device, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="relative w-24 h-24 mx-auto">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E5E7EB"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke={device.color}
                          strokeWidth="3"
                          strokeDasharray={`${device.percentage}, 100`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg">{device.percentage}%</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm">{device.type}</h4>
                      <p className="text-xs text-slate-600">Primary device</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="links" className="space-y-6">
          <Card className="bg-white/60 backdrop-blur-sm border-white/50">
            <CardHeader className="pb-4">
              <CardTitle>Link Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="truncate">{link.name}</h4>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-sm text-slate-600">{link.clicks} clicks</span>
                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                          {link.trend}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg">{link.percentage}%</div>
                      <div className="text-xs text-slate-600">of total</div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-xl">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-white/60 backdrop-blur-sm border-white/50">
              <CardHeader className="pb-4">
                <CardTitle>Geographic Distribution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { country: 'United States', percentage: 34, flag: '🇺🇸' },
                  { country: 'United Kingdom', percentage: 18, flag: '🇬🇧' },
                  { country: 'Canada', percentage: 12, flag: '🇨🇦' },
                  { country: 'Australia', percentage: 8, flag: '🇦🇺' },
                  { country: 'Germany', percentage: 6, flag: '🇩🇪' },
                  { country: 'Others', percentage: 22, flag: '🌍' }
                ].map((country, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{country.flag}</span>
                      <span className="text-sm">{country.country}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                          style={{ width: `${country.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium w-10 text-right">{country.percentage}%</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-white/50">
              <CardHeader className="pb-4">
                <CardTitle>Peak Activity Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-6 gap-2">
                    {Array.from({ length: 24 }, (_, hour) => {
                      const activity = Math.random() * 100;
                      return (
                        <div key={hour} className="text-center">
                          <div 
                            className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm mb-1"
                            style={{ height: `${Math.max(activity * 0.4, 8)}px` }}
                          ></div>
                          <span className="text-xs text-slate-600">
                            {hour.toString().padStart(2, '0')}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-xs text-slate-600 text-center">
                    Peak activity: 2-4 PM and 8-10 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="realtime" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/60 backdrop-blur-sm border-white/50">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Active Visitors
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl mb-2">23</div>
                <div className="text-sm text-slate-600">Right now</div>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-white/50">
              <CardHeader className="pb-4">
                <CardTitle>Clicks (Last hour)</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl mb-2">47</div>
                <div className="text-sm text-slate-600">+12 from previous hour</div>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-white/50">
              <CardHeader className="pb-4">
                <CardTitle>Top Source</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-xl mb-2">Instagram</div>
                <div className="text-sm text-slate-600">38% of current traffic</div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/60 backdrop-blur-sm border-white/50">
            <CardHeader className="pb-4">
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { action: 'Link clicked', link: 'Portfolio Website', time: '2 seconds ago' },
                { action: 'New visitor', source: 'Instagram', time: '8 seconds ago' },
                { action: 'Link clicked', link: 'YouTube Channel', time: '15 seconds ago' },
                { action: 'New visitor', source: 'Direct', time: '23 seconds ago' },
                { action: 'Link clicked', link: 'Instagram Profile', time: '31 seconds ago' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="text-sm">{activity.action}</p>
                      <p className="text-xs text-slate-600">
                        {activity.link && `${activity.link}`}
                        {activity.source && `from ${activity.source}`}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500">{activity.time}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}