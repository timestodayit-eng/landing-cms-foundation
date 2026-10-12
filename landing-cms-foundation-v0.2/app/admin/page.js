import Link from 'next/link';
import AdminShell from '../../components/AdminShell';
import { CATEGORIES } from '../../lib/categories';
export default function AdminHome(){
  return <AdminShell><div className='top'><div><h1>Dashboard</h1><p>Create unlimited pages inside fixed landing-page categories.</p></div></div><div className='grid cols'>{CATEGORIES.map(cat=><Link className='card' key={cat.key} href={`/admin/pages/${cat.key}`}><h3>{cat.name}</h3><p>Open this category and create pages.</p></Link>)}</div></AdminShell>;
}
