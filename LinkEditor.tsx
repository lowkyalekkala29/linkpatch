import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { 
  Save, 
  Plus, 
  Trash2, 
  Edit3, 
  GripVertical,
  Megaphone
} from 'lucide-react';

export default function LinkEditor() {
  const savedLinks = [
    { title: 'My Portfolio Website', url: 'https://portfolio.com' },
    { title: 'Instagram Profile', url: 'https://instagram.com/user' },
    { title: 'YouTube Channel', url: 'https://youtube.com/channel' },
    { title: 'Latest Blog Post', url: 'https://blog.com/post' },
  ];

  return (
    <div className="space-y-6">
      {/* Add/Edit Link Form */}
      <Card className="bg-white">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Add New Link</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Link Title</Label>
            <Input 
              placeholder="e.g., My Instagram" 
              className="bg-gray-50"
            />
          </div>
          
          <div className="space-y-2">
            <Label>URL</Label>
            <Input 
              placeholder="https://instagram.com/username" 
              className="bg-gray-50"
            />
          </div>
          
          <Button className="w-full">
            <Save className="w-4 h-4 mr-2" />
            Save Link
          </Button>
        </CardContent>
      </Card>

      {/* Smart CTA Option */}
      <Card className="bg-white border-dashed border-2 border-gray-300">
        <CardContent className="p-4 text-center">
          <Megaphone className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <h3 className="text-sm mb-1">Add Smart CTA</h3>
          <p className="text-xs text-gray-600 mb-3">
            Promote your latest content or offer
          </p>
          <Button variant="outline" size="sm">
            <Plus className="w-3 h-3 mr-1" />
            Add Smart CTA
          </Button>
        </CardContent>
      </Card>

      {/* Saved Links */}
      <Card className="bg-white">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Your Links ({savedLinks.length})</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {savedLinks.map((link, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <GripVertical className="w-4 h-4 text-gray-400" />
              <div className="flex-1 min-w-0">
                <div className="text-sm truncate">{link.title}</div>
                <div className="text-xs text-gray-500 truncate">{link.url}</div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Edit3 className="w-3 h-3" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Reorder Instructions */}
      <Card className="bg-gray-50 border-dashed border-2 border-gray-300">
        <CardContent className="p-4 text-center">
          <GripVertical className="w-6 h-6 text-gray-400 mx-auto mb-2" />
          <p className="text-xs text-gray-600">
            Drag links to reorder them on your bio page
          </p>
        </CardContent>
      </Card>
    </div>
  );
}