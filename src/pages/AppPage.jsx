import {useParams,Link} from 'react-router-dom';import {Suspense} from 'react';import {apps} from '../data/apps.js';import {internalApps} from './internalApps.js';
export default function AppPage(){
  const {id}=useParams();const a=apps.find(x=>x.id===id);if(!a)return <section><p>Application not found.</p><Link to="/data-lab">Back to Data Lab</Link></section>;
  const Internal=a.type==='internal'&&internalApps[a.id];
  return <section><Link to="/data-lab">← Data Lab</Link><h1>{a.title}</h1><p className="muted">{a.description}</p>
  {a.type==='internal'?(Internal?<Suspense fallback="Loading…"><Internal/></Suspense>:<p>This application is {a.status.toLowerCase()}.</p>)
  :a.embed?<iframe title={a.title} src={a.url} loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"/>
  :<div className="card"><p>This application opens in a new window.</p><a className="btn" href={a.url} target="_blank" rel="noopener noreferrer">Launch Application →</a></div>}</section>}
