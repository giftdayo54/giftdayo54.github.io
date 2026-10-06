import {useState} from 'react';import {demo} from '../data/demo.js';
const idx={NDVI:1,EVI:2,NDRE:3};
function Line({rows,k}){const W=420,H=160,P=28,v=rows.map(r=>r[idx[k]]),mx=Math.max(...v),mn=Math.min(...v);
  const pts=v.map((y,i)=>`${P+i*(W-2*P)/(v.length-1)},${H-P-(y-mn)/(mx-mn||1)*(H-2*P)}`).join(' ');
  return <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${k} by month: from ${v[0]} to ${v[v.length-1]}`} style={{width:'100%'}}><polyline points={pts} fill="none" stroke="var(--primary)" strokeWidth="2"/><text x={P} y={H-6}>Month 1–{rows.length}</text><text x={P} y={14}>{k} {mn}–{mx}</text></svg>}
function Scatter({rows,k}){const W=420,H=200,P=30,x=rows.map(r=>r[idx[k]]),y=rows.map(r=>r[4]),n=x.length,mx=x.reduce((a,b)=>a+b)/n,my=y.reduce((a,b)=>a+b)/n;
  const b=x.reduce((s,xi,i)=>s+(xi-mx)*(y[i]-my),0)/x.reduce((s,xi)=>s+(xi-mx)**2,0),a=my-b*mx;
  const r2=1-y.reduce((s,yi,i)=>s+(yi-(a+b*x[i]))**2,0)/y.reduce((s,yi)=>s+(yi-my)**2,0);
  const lo=Math.min(...x),hi=Math.max(...x),ylo=Math.min(...y)-2,yhi=Math.max(...y)+2,X=v=>P+(v-lo)/(hi-lo||1)*(W-2*P),Y=v=>H-P-(v-ylo)/(yhi-ylo)*(H-2*P);
  return <><svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Scatter of yield against ${k} with regression line`} style={{width:'100%'}}>{x.map((xi,i)=><circle key={i} cx={X(xi)} cy={Y(y[i])} r="4" fill="var(--secondary)"/>)}
  <line x1={X(lo)} y1={Y(a+b*lo)} x2={X(hi)} y2={Y(a+b*hi)} stroke="var(--accent)" strokeWidth="2"/><text x={P} y={14}>Yield (t/ha) vs {k}</text></svg><p className="muted">OLS: yield = {a.toFixed(1)} + {b.toFixed(1)}×{k}; R² = {r2.toFixed(2)}</p></>}
export default function YieldExplorer(){
  const [f,setF]=useState('Field A');const [k,setK]=useState('NDVI');const rows=demo[f],ys=rows.map(r=>r[4]);
  return <div><p className="card"><b>Demonstration dataset — replace with real data.</b></p>
  <p><select aria-label="Field" value={f} onChange={e=>setF(e.target.value)}>{Object.keys(demo).map(x=><option key={x}>{x}</option>)}</select> <select aria-label="Index" value={k} onChange={e=>setK(e.target.value)}>{Object.keys(idx).map(x=><option key={x}>{x}</option>)}</select></p>
  <p>Yield: mean {(ys.reduce((a,b)=>a+b)/ys.length).toFixed(1)}, min {Math.min(...ys)}, max {Math.max(...ys)} t/ha</p>
  <div className="grid"><div className="card"><Line rows={rows} k={k}/></div><div className="card"><Scatter rows={rows} k={k}/></div></div></div>}
