import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, X, PenTool, Plus } from 'lucide-react';
import { BlogPost } from '../types';
import { INITIAL_BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_BLOG_POSTS);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  
  const [newPost, setNewPost] = useState({ title: '', excerpt: '', content: '', tags: '' });

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const post: BlogPost = {
      id: Date.now().toString(),
      title: newPost.title,
      excerpt: newPost.excerpt,
      content: newPost.content,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: `${Math.max(1, Math.ceil(newPost.content.split(' ').length / 200))} min read`,
      tags: newPost.tags.split(',').map(t => t.trim()).filter(t => t),
      imageUrl: `https://picsum.photos/800/400?random=${posts.length + 30}`
    };
    setPosts([post, ...posts]);
    setIsCreating(false);
    setNewPost({ title: '', excerpt: '', content: '', tags: '' });
  };

  return (
    <section id="blog" className="py-16 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-1">Knowledge</h2>
            <div className="w-12 h-1 bg-sky-500 rounded-full"></div>
          </div>
          <button onClick={() => setIsCreating(true)} className="flex items-center px-4 py-2 bg-slate-900 text-sky-400 rounded-lg border border-slate-800 font-bold text-xs"><Plus size={14} className="mr-1" /> New Post</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <article key={post.id} className="group bg-slate-900/30 border border-slate-800 rounded-xl overflow-hidden hover:border-sky-500/20 transition-all duration-300 flex flex-col">
              <div className="relative h-40 overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute top-3 left-3 flex gap-1.5 z-20">
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-1.5 py-0.5 bg-slate-950/80 text-[8px] font-black text-sky-300 rounded uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center text-[9px] text-slate-500 mb-2 space-x-3 font-bold uppercase tracking-widest">
                  <span className="flex items-center"><Calendar size={10} className="mr-1" /> {post.date}</span>
                  <span className="flex items-center"><Clock size={10} className="mr-1" /> {post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors line-clamp-2 tracking-tight">{post.title}</h3>
                <p className="text-slate-400 text-xs mb-4 flex-grow leading-relaxed line-clamp-2">{post.excerpt}</p>
                <button onClick={() => setSelectedPost(post)} className="inline-flex items-center text-sky-500 hover:text-sky-400 text-xs font-bold transition-all">Read More <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" /></button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedPost && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" onClick={() => setSelectedPost(null)}></div>
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-200">
            <div className="relative h-48 flex-shrink-0">
              <img src={selectedPost.imageUrl} className="w-full h-full object-cover" />
              <button onClick={() => setSelectedPost(null)} className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full"><X size={18} /></button>
            </div>
            <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
                <h2 className="text-2xl font-black text-white mb-4">{selectedPost.title}</h2>
                <div className="prose prose-invert prose-sm max-w-none text-slate-300">
                    {selectedPost.content.split('\n\n').map((p, i) => <p key={i} className="mb-4">{p}</p>)}
                </div>
            </div>
          </div>
        </div>
      )}

      {isCreating && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" onClick={() => setIsCreating(false)}></div>
          <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl animate-in zoom-in-95">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white flex items-center"><PenTool className="mr-2 text-sky-500" /> New Article</h3>
                <button onClick={() => setIsCreating(false)} className="text-slate-400"><X size={20} /></button>
             </div>
             <form onSubmit={handleCreateSubmit} className="space-y-4">
               <input type="text" required value={newPost.title} onChange={(e) => setNewPost({...newPost, title: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none" placeholder="Title" />
               <input type="text" required value={newPost.excerpt} onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none" placeholder="Summary" />
               <textarea rows={4} required value={newPost.content} onChange={(e) => setNewPost({...newPost, content: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none resize-none" placeholder="Content"></textarea>
               <button type="submit" className="w-full py-3 bg-sky-600 text-white rounded-lg font-bold text-sm">Publish</button>
             </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;