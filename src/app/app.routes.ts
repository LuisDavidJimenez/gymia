import { Routes } from '@angular/router';
import { ChatComponent } from './features/chat/chat.component';

export const routes: Routes = [
    // Ruta que dirige automaticamente a chat
    {path: '', redirectTo: 'chat', pathMatch: 'full'},
    // Ruta /chat que renderiza ChatComponent
    {path: 'chat', component: ChatComponent},
    // Ruta comodin que redirige a cualquier otra ruta 'chat'
    { path: '**', redirectTo: 'chat'}
];
