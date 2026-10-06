import {useState,useEffect,lazy,Suspense} from 'react';import {Routes,Route,NavLink} from 'react-router-dom';import {site} from './data/site.js';
import Home from './pages/Home.jsx';import Static from './pages/Static.jsx';
const DataLab=lazy(()=>import('./pages/DataLab.jsx'));const AppPage=lazy(()=>import('./pages/AppPage.jsx'));
const links=[['/','Home'],['/about','About'],['/data-lab','Data & AI Lab'],['/projects','Projects'],['/research','Research'],['/skills','Tools & Skills'],['/cv','CV'],['/contact','Contact']];
export default function App(){
  const [open,setOpen]=useState(false);
  const [theme,setTheme]=useState(()=>{try{return localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch{return 'light'}});
  useEffect(()=>{document.documentElement.dataset.theme=theme;try{localStorage.setItem('theme',theme)}catch{}},[theme]);
  return <>
    <nav aria-label="Main"><div className="wrap"><strong>{site.name}</strong>
      <button className="burger ghost" aria-expanded={open} onClick={()=>setOpen(!open)}>Menu</button>
      <ul className={open?'open':''} onClick={()=>setOpen(false)}>{links.map(([to,l])=><li key={to}><NavLink to={to} end={to==='/'} className={({isActive})=>isActive?'active':''}>{l}</NavLink></li>)}
      <li><button className="ghost" onClick={()=>setTheme(theme==='dark'?'light':'dark')}>{theme==='dark'?'Light':'Dark'} mode</button></li></ul></div></nav>
    <main className="wrap"><Suspense fallback={<p>Loading…</p>}><Routes>
      <Route path="/" element={<Home/>}/><Route path="/data-lab" element={<DataLab/>}/><Route path="/data-lab/:id" element={<AppPage/>}/>
      <Route path="/:page" element={<Static/>}/></Routes></Suspense></main>
    <footer className="wrap muted"><p>© {new Date().getFullYear()} {site.name}. Everything on this site is public.</p></footer></>;
}
