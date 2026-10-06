import {useState} from 'react';import {Link} from 'react-router-dom';import {apps,categories} from '../data/apps.js';
export default function DataLab(){
  const [q,setQ]=useState('');const [cat,setCat]=useState('All');
  const list=apps.filter(a=>(cat==='All'||a.category===cat)&&(a.title+a.description+a.technologies.join(' ')).toLowerCase().includes(q.toLowerCase()));
  return <section><h1>Data & AI Lab</h1><p className="muted">Interactive analytical tools, dashboards and experiments</p>
  <p><input aria-label="Search applications" placeholder="Search" value={q} onChange={e=>setQ(e.target.value)}/> <select aria-label="Category" value={cat} onChange={e=>setCat(e.target.value)}><option>All</option>{categories.map(c=><option key={c}>{c}</option>)}</select></p>
  <div className="grid">{list.map(a=><div className="card" key={a.id}><span className={`badge ${a.status.replace(/ /g,'')}`}>{a.status}</span><h3>{a.title}</h3><p className="muted">{a.description}</p><p><small>{a.technologies.join(' · ')}</small></p>
    <Link className="btn" to={`/data-lab/${a.id}`}>{a.type==='internal'?'Open Application':'Details'}</Link> {a.github&&<a href={a.github}>View Code</a>}</div>)}
  {!list.length&&<p>No applications match. Clear the search or choose another category.</p>}</div></section>}
