import Link from 'next/link';
import { CATEGORIES } from '../lib/categories';
export default function AdminShell({children}){
  return <div className='shell'><aside className='sidebar'><div className='brand'>Landing CMS</div><nav className='nav'><Link href='/admin'>Dashboard</Link>{CATEGORIES.map(cat=><Link key={cat.key} href={`/admin/pages/${cat.key}`}>{cat.name}</Link>)}</nav></aside><main className='main'>{children}</main></div>;
}
