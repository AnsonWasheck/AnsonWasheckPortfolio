import { useState } from 'react';
import { IconChevronDown, IconEdit, IconMessage, IconSearch } from '@tabler/icons-react';

const topics = ['About this portfolio', 'Selected work', 'Experience', 'Education'];

export default function Home() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const submit = () => { const value = input.trim(); if (!value) return; setMessages((items) => [...items, value]); setInput(''); };
  return <main className="app-shell">
    <aside className="sidebar">
      <div className="brand">ChatGPT <span className="brand-mark">◐</span></div>
      <button className="new-chat" onClick={() => setMessages([])}><IconEdit size={17} /> New chat</button>
      <div className="side-section"><span>Explore</span>{topics.map((topic) => <button key={topic} onClick={() => setInput(topic)}><IconMessage size={16} />{topic}</button>)}</div>
      <div className="side-section"><span>Projects</span><button><IconMessage size={16} />Project Alpha</button><button><IconMessage size={16} />Project Beta</button></div>
      <div className="account"><div className="avatar">P</div><div><strong>Your Portfolio</strong><small>Personal workspace</small></div><IconChevronDown size={16} /></div>
    </aside>
    <section className="main-panel">
      <header><div className="mode-toggle"><button className="active">Chat</button><button>Work</button></div><IconSearch size={18} /></header>
      <div className="conversation">
        {messages.length === 0 ? <div className="welcome"><h1>Ready when you are.</h1><p>Ask about the work, projects, or experience in this portfolio.</p></div> : <div className="messages">{messages.map((message, index) => <div className="message" key={`${message}-${index}`}><div className="user-bubble">{message}</div><div className="assistant-copy">This shell is ready for your portfolio content and answer engine.</div></div>)}</div>}
      </div>
      <div className="composer"><button aria-label="Attach">＋</button><input value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && submit()} placeholder="Ask about this portfolio" /><button className="send" onClick={submit}>↑</button></div>
      <footer>Portfolio chat shell · connect your own data and reasoning layer</footer>
    </section>
  </main>;
}
