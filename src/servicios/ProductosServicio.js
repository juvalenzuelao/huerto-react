const KEY = 'hh_productos';
async function seed(){
  if(!localStorage.getItem(KEY)){
    const data = (await import('../datos/productos.json')).default;
    localStorage.setItem(KEY, JSON.stringify(data));
  }
}
export async function listarProductos(){ await seed(); return JSON.parse(localStorage.getItem(KEY)||'[]'); }
export async function guardarProducto(p){
  const lista = await listarProductos();
  if(p.id){ const i = lista.findIndex(x=>x.id===p.id); if(i>=0) lista[i] = { ...lista[i], ...p }; }
  else { p.id = crypto.randomUUID(); lista.push(p); }
  localStorage.setItem(KEY, JSON.stringify(lista));
}
export async function eliminarProducto(id){
  const lista = await listarProductos();
  localStorage.setItem(KEY, JSON.stringify(lista.filter(x=>x.id!==id)));
}
