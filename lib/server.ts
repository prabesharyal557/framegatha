import {env} from 'cloudflare:workers';
export function db(){if(!env.DB)throw Error('Storage is unavailable. Please try again.');return env.DB;}
export function bucket(){if(!env.BUCKET)throw Error('Photo storage is unavailable.');return env.BUCKET;}
export async function hash(password:string,salt:string){const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveBits']);const bits=await crypto.subtle.deriveBits({name:'PBKDF2',salt:new TextEncoder().encode(salt),iterations:100000,hash:'SHA-256'},key,256);return Array.from(new Uint8Array(bits),x=>x.toString(16).padStart(2,'0')).join('');}
export async function admin(req:Request){const token=req.headers.get('cookie')?.match(/(?:^|; )fg_session=([^;]+)/)?.[1];if(!token)return false;return !!await db().prepare('SELECT sessions.id FROM sessions JOIN users ON users.id=sessions.user WHERE sessions.id=? AND expires>?').bind(token,Date.now()).first();}
export async function records(kind:string){const r=await db().prepare('SELECT id,data FROM records WHERE kind=?').bind(kind).all();return r.results.map((r:any)=>({...JSON.parse(r.data),id:r.id}));}
export function str(v:unknown,max=200){if(typeof v!=='string'||!v.trim()||v.length>max)throw Error('Please check the required fields.');return v.trim();}
export async function save(kind:string,id:string,data:unknown){await db().prepare('INSERT INTO records (id,kind,data) VALUES (?,?,?) ON CONFLICT(id) DO UPDATE SET data=excluded.data WHERE records.kind=excluded.kind').bind(id,kind,JSON.stringify(data)).run();}
