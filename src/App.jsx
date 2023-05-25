import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import * as context from './context';
import {lay} from './components';
import {adm, usr, Inicio} from './pages';

function App() {
  
  return (
    <BrowserRouter>
        <context.DjAuthProvider>
            <context.DjProvider>
                <context.UserAuthProvider>
                    <context.UserProvider>
                        <Routes>

                            <Route path='/' element={<Inicio/>}/>

                            <Route path='/user' element={<lay.UserLayout/>}>
                                <Route index element={<usr.Users/>}/>
                                <Route path='/user/dj' element={<usr.LoginDj/>}/>
                                <Route path='/user/cliente' element={<usr.LoginCliente/>}/>
                                <Route path='/user/cliente/registrar' element={<usr.RegistrarCliente/>}/>
                                <Route path='/user/cliente/:token' element={<usr.ConfirmarRegistro/>}/>
                                <Route path='/user/cliente/olvide-password' element={<usr.OlvidePassword/>}/>
                                <Route path='/user/cliente/olvide-password/:token' element={<usr.NuevoPassword/>}/>
                            </Route>

                            <Route path='/admin/dj' element={<lay.AdminDjLayout/>}>
                                <Route index element={<adm.InicioDj/>}/>
                                <Route path='/admin/dj/perfil' element={<adm.PerfilDj/>}/>
                                <Route path='/admin/dj/pedidos' element={<adm.PedidosDj/>}/>
                                <Route path='/admin/dj/pedidos-aceptados' element={<adm.PedidosAceptadosDj/>}/>
                            </Route>

                            <Route path='/admin/cliente' element={<lay.AdminClienteLayout/>}>
                                <Route index element={<adm.InicioCliente/>}/>
                                <Route path='/admin/cliente/lista-djs' element={<adm.ListaDjsCliente/>}/>
                                <Route path='/admin/cliente/pedido/:djId' element={<adm.PedidoCliente/>}/>
                                <Route path='/admin/cliente/pedidos' element={<adm.PedidosCliente/>}/>
                            </Route>
                                        
                        </Routes>
                    </context.UserProvider>
                </context.UserAuthProvider> 
            </context.DjProvider>
        </context.DjAuthProvider>
    </BrowserRouter>
  )
}

export default App
