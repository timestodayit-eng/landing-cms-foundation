import AdminShell from '../../../../components/AdminShell';
import PageEditor from '../../../../components/PageEditor';
import { getDb } from '../../../../lib/db';
export const dynamic='force-dynamic';
export default async function EditorPage({params,searchParams}){
  const id=params.id; let page=null; let category=searchParams?.category||'call';
  if(id!=='new'){const db=getDb();const [rows]=await db.query('SELECT * FROM pages WHERE id=? LIMIT 1',[id]);page=rows[0]||null;if(page){category=page.category_key;try{page.blocks=JSON.parse(page.blocks_json||'[]')}catch{page.blocks=[]}}}
  return <AdminShell><PageEditor page={page} category={category}/></AdminShell>;
}
