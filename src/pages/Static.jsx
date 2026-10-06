import {Link,useParams} from 'react-router-dom';import {projects} from '../data/projects.js';import {pathway,themes,question,skills} from '../data/research.js';import {site} from '../data/site.js';
const Projects=()=><><h1>Projects</h1>{projects.map(p=><article className="card" key={p.slug} style={{marginBottom:16}}><h2>{p.title}</h2><p className="muted">{p.category} · {p.year}</p>
<p><b>Problem.</b> {p.problem}</p><p><b>Tools.</b> {p.technologies.join(', ')}</p><p><b>Methodology.</b> {p.methodology.join(' → ')}</p><p><b>Results.</b> {p.results}</p>
{p.github&&<a href={p.github}>Code</a>} {p.liveDemo&&<a href={p.liveDemo}>Live application</a>}</article>)}</>;
const Research=()=><><h1>Research</h1><p className="muted" style={{maxWidth:'60ch'}}>{question}</p><h2>Research pathway</h2>
<div className="path">{pathway.map(s=><div key={s}>{s}</div>)}</div><h2 style={{marginTop:24}}>Themes</h2><ul>{themes.map(t=><li key={t}>{t}</li>)}</ul></>;
const Skills=()=><><h1>Tools & Skills</h1><div className="grid">{Object.entries(skills).map(([k,v])=><div className="card" key={k}><h3>{k}</h3><p className="muted">{v.join(', ')}</p></div>)}</div></>;
const About=()=><><h1>About</h1><p style={{maxWidth:'62ch'}}>I work as an irrigation engineer in large-scale commercial sugarcane production and apply data, remote sensing and machine learning to turn field, satellite and operational data into decisions. [INSERT YOUR EVIDENCE-BASED NARRATIVE HERE.]</p></>;
const CV=()=><><h1>CV</h1><p>[INSERT summary, experience, education, certifications — do not publish anything unverified.]</p><a className="btn" href={site.cvPdf}>Download CV PDF</a></>;
const Contact=()=><><h1>Contact</h1><p><a className="btn" href={`mailto:${site.email}`}>Email Me</a></p><p><a href={site.linkedin}>LinkedIn</a> · <a href={site.github}>GitHub</a></p></>;
const pages={projects:Projects,research:Research,skills:Skills,about:About,cv:CV,contact:Contact};
export default function Static(){const {page}=useParams();const P=pages[page];return P?<section><P/></section>:<section><h1>Page not found</h1><Link to="/">Back home</Link></section>}
