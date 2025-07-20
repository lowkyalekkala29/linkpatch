import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Link, 
  Palette, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe, 
  Check,
  Star,
  ArrowRight,
  Smartphone,
  Users,
  TrendingUp,
  Sparkles
} from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: Link,
      title: 'Unlimited Links',
      description: 'Add as many links as you want with no restrictions'
    },
    {
      icon: Palette,
      title: 'Beautiful Themes',
      description: 'Customize your page with stunning themes and colors'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track clicks, visitors, and engagement in real-time'
    },
    {
      icon: Zap,
      title: 'Smart CTAs',
      description: 'Dynamic call-to-actions based on visitor source'
    },
    {
      icon: Shield,
      title: 'Custom Domains',
      description: 'Use your own domain for a professional look'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Lightning-fast loading times worldwide'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Content Creator',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
      content: 'LinkPatch transformed how I share my content. The analytics are incredible!'
    },
    {
      name: 'Marcus Johnson',
      role: 'Digital Artist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'Clean design and powerful features. My audience engagement doubled!'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Photographer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'The custom themes make my bio page look exactly like my brand.'
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="text-center space-y-8 py-12">
        <Badge variant="secondary" className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 px-4 py-2">
          <Sparkles className="w-4 h-4 mr-2" />
          Trusted by 50,000+ creators
        </Badge>
        
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
            All Your Links.<br />One Beautiful Page.
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Create a stunning link in bio that showcases your content, grows your audience, and tracks every click.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-2xl shadow-lg shadow-blue-200 transition-all duration-200">
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" className="px-8 py-6 text-lg rounded-2xl border-slate-200 hover:bg-slate-50">
            See Examples
          </Button>
        </div>
      </div>

      {/* Product Preview */}
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
        <Card className="relative bg-white/80 backdrop-blur-sm border-white/50 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl">See LinkPatch in Action</h3>
                <p className="text-slate-600">
                  Create beautiful, responsive bio pages that work perfectly on any device. 
                  Your links have never looked this good.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Mobile-optimized design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Lightning-fast loading</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Built-in analytics</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
                  <div className="w-full max-w-xs mx-auto space-y-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-3"></div>
                      <h4 className="text-lg">Alex Creator</h4>
                      <p className="text-sm text-slate-600">Digital Artist & Designer</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl p-4 text-white text-center">
                      <p className="text-sm">🎨 New artwork collection live!</p>
                    </div>
                    
                    <div className="space-y-3">
                      {['Portfolio Website', 'Instagram', 'YouTube Channel', 'Shop'].map((link, index) => (
                        <div key={index} className="bg-slate-50 hover:bg-slate-100 transition-colors rounded-xl p-4 flex items-center justify-between">
                          <span className="text-sm">{link}</span>
                          <ArrowRight className="w-4 h-4 text-slate-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Features Grid */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl">Everything you need to succeed</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Powerful features designed to help creators share their content and grow their audience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group bg-white/60 backdrop-blur-sm border-white/50 hover:bg-white/80 transition-all duration-200 hover:shadow-lg hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg">{feature.title}</h4>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl">Simple, transparent pricing</h2>
          <p className="text-xl text-slate-600">Start free, upgrade when you're ready</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/60 backdrop-blur-sm border-white/50">
            <CardHeader className="text-center space-y-4">
              <div>
                <h3 className="text-2xl">Free</h3>
                <p className="text-slate-600">Perfect for getting started</p>
              </div>
              <div className="text-4xl">$0<span className="text-lg text-slate-600">/month</span></div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {['Unlimited links', 'Basic analytics', 'Mobile optimized', 'LinkPatch branding'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full py-3 rounded-xl" variant="outline">
                Get Started Free
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Popular
              </Badge>
            </div>
            <CardHeader className="text-center space-y-4">
              <div>
                <h3 className="text-2xl">Pro</h3>
                <p className="text-slate-600">For serious creators</p>
              </div>
              <div className="text-4xl">$9<span className="text-lg text-slate-600">/month</span></div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {['Everything in Free', 'Advanced analytics', 'Custom themes', 'Smart CTAs', 'Custom domain', 'Remove branding'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Upgrade to Pro
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl">Loved by creators worldwide</h2>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-slate-600">4.9/5 from 1,000+ reviews</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/60 backdrop-blur-sm border-white/50">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <ImageWithFallback 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm">{testimonial.name}</p>
                    <p className="text-xs text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
        <CardContent className="p-12 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl">Ready to get started?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of creators who are already using LinkPatch to grow their audience.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-2xl">
            Create Your Free Page
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </CardContent>
      </Card>

      {/* Footer */}
      <footer className="border-t border-slate-200 pt-12 space-y-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">LinkPatch</span>
            </div>
            <p className="text-slate-600">
              The modern way to share all your links in one beautiful page.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4>Product</h4>
            <div className="space-y-2 text-slate-600">
              <p>Features</p>
              <p>Pricing</p>
              <p>Templates</p>
              <p>Analytics</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4>Company</h4>
            <div className="space-y-2 text-slate-600">
              <p>About</p>
              <p>Blog</p>
              <p>Careers</p>
              <p>Contact</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4>Support</h4>
            <div className="space-y-2 text-slate-600">
              <p>Help Center</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Status</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 text-center text-slate-600">
          <p>&copy; 2024 LinkPatch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}