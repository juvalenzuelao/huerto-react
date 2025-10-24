const KEY = 'hh_usuarios';
async function seed(){
  if(!localStorage.getItem(KEY)){
    const data = (await import('../datos/usuarios.json')).default;
    localStorage.setItem(KEY, JSON.stringify(data));
  }
}
export async function listarUsuarios(){ await seed(); return JSON.parse(localStorage.getItem(KEY)||'[]'); }
export async function guardarUsuario(u){
  const lista = await listarUsuarios();
  if(u.id){ const i = lista.findIndex(x=>x.id===u.id); if(i>=0) lista[i] = { ...lista[i], ...u }; }
  else { u.id = crypto.randomUUID(); lista.push(u); }
  localStorage.setItem(KEY, JSON.stringify(lista));
}
export async function eliminarUsuario(id){
  const lista = await listarUsuarios();
  localStorage.setItem(KEY, JSON.stringify(lista.filter(x=>x.id!==id)));
}
