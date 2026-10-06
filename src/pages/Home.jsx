import {Link} from 'react-router-dom';import {site} from '../data/site.js';
const caps=[['Data Analytics','Python, SQL, EDA, dashboards and decision support.'],['AI & Machine Learning','Regression, anomaly detection and time-series models for agriculture.'],['Remote Sensing','Sentinel-2 indices, temporal analysis and yield modelling.'],['GIS & Geospatial','QGIS, raster/vector processing and spatial modelling.'],['Irrigation & Water','Scheduling, water productivity and hydraulic systems.'],['Precision Agriculture','UAV mapping, field monitoring and crop analytics.']];
export default function Home(){return <>
  <section><h1>Data. AI. Engineering. Agriculture.</h1>
  <p className="muted" style={{maxWidth:'60ch'}}>I use data, geospatial technologies, remote sensing and artificial intelligence to solve problems in irrigation, agriculture, infrastructure and environmental management.</p>
  <p><Link className="btn" to="/data-lab">Explore Data Applications</Link> <Link className="btn ghost" to="/projects">View Projects</Link></p>
  <p><a href={site.github}>GitHub</a> · <a href={site.linkedin}>LinkedIn</a> · <Link to="/cv">CV</Link> · <Link to="/research">Research</Link></p></section>
  <section><h2>Where engineering meets data</h2><div className="grid">{caps.map(([t,d])=><div className="card" key={t}><h3>{t}</h3><p className="muted">{d}</p></div>)}</div></section></>}
