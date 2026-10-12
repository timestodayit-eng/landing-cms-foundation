import { NextResponse } from 'next/server';
import { getDb } from '../../../lib/db';
function slug(v){return String(v||'').trim().toLowerCase().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-').replace(/-+/g,'-')}
export async function POST(req){try{const body=await req.json();const db=getDb();const title=body.title||'Untitled Page';const s=slug(body.slug||title)+'-'+Date.now().toString().slice(-5);const [result]=await db.query('INSERT INTO pages (category_key,title,slug,status,blocks_json) VALUES (?,?,?,?,?)',[body.category_key,title,s,body.status||'draft',JSON.stringify(body.blocks||[])]);return NextResponse.json({id:result.insertId,slug:s})}catch(e){return NextResponse.json({error:e.message},{status:500})}}
