import Link from 'next/link';
import AdminShell from '../../../../components/AdminShell';
import { getCategory } from '../../../../lib/categories';
import { getDb } from '../../../../lib/db';
export const dynamic='force-dynamic';
export default async function CategoryPages({params}){
  const category=getCategory(params.category); if(!category) return <AdminShell><h1>Category not found</h1></AdminShell>;
  const db=getDb(); const [rows]=await db.query('SELECT id,title,slug,status,updated_at FROM pages WHERE category_key=? ORDER BY updated_at DESC',[category.key]);
  return <AdminShell><div className='top'><div><h1>{category.name}</h1><p>Pages under this fixed category.</p></div><Link className='btn' href={`/admin/editor/new?category=${category.key}`}>+ New Page</Link></div><div className='page-list'>{rows.length===0&&<div className='card'>No pages yet.</div>}{rows.map(page=><div className='page-item' key={page.id}><div><strong>{page.title}</strong><div>/p/{page.slug}</div></div><div className='row'><span className='status'>{page.status}</span><Link className='btn secondary' href={`/admin/editor/${page.id}`}>Edit</Link><Link className='btn secondary' href={`/p/${page.slug}`} target='_blank'>View</Link></div></div>)}</div></AdminShell>;
}
