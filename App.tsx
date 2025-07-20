import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import LandingPage from './components/LandingPage';
import AuthPages from './components/AuthPages';
import Dashboard from './components/Dashboard';
import LinkManager from './components/LinkManager';
import BioEditor from './components/BioEditor';
import SmartCTAs from './components/SmartCTAs';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import PublicBioPage from './components/PublicBioPage';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto p-4 max-w-6xl">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </div>
            <h1 className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">LinkPatch</h1>
          </div>
          <p className="text-slate-600">Modern link-in-bio platform for creators</p>
        </div>
        
        <Tabs defaultValue="landing" className="w-full">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-2 mb-8 shadow-sm border border-white/50">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-9 gap-1 bg-transparent h-auto p-0">
              <TabsTrigger value="landing" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3 px-2 text-xs lg:text-sm">Landing</TabsTrigger>
              <TabsTrigger value="auth" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3 px-2 text-xs lg:text-sm">Auth</TabsTrigger>
              <TabsTrigger value="dashboard" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3 px-2 text-xs lg:text-sm">Dashboard</TabsTrigger>
              <TabsTrigger value="links" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3 px-2 text-xs lg:text-sm">Links</TabsTrigger>
              <TabsTrigger value="editor" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3 px-2 text-xs lg:text-sm">Editor</TabsTrigger>
              <TabsTrigger value="ctas" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3 px-2 text-xs lg:text-sm">CTAs</TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3 px-2 text-xs lg:text-sm">Analytics</TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3 px-2 text-xs lg:text-sm">Settings</TabsTrigger>
              <TabsTrigger value="bio" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl py-3 px-2 text-xs lg:text-sm">Bio Page</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="landing" className="mt-0">
            <LandingPage />
          </TabsContent>
          
          <TabsContent value="auth" className="mt-0">
            <AuthPages />
          </TabsContent>
          
          <TabsContent value="dashboard" className="mt-0">
            <Dashboard />
          </TabsContent>
          
          <TabsContent value="links" className="mt-0">
            <LinkManager />
          </TabsContent>
          
          <TabsContent value="editor" className="mt-0">
            <BioEditor />
          </TabsContent>
          
          <TabsContent value="ctas" className="mt-0">
            <SmartCTAs />
          </TabsContent>
          
          <TabsContent value="analytics" className="mt-0">
            <Analytics />
          </TabsContent>
          
          <TabsContent value="settings" className="mt-0">
            <Settings />
          </TabsContent>
          
          <TabsContent value="bio" className="mt-0">
            <PublicBioPage />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}