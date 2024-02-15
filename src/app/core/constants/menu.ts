import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Gestión',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Database',
          route: '/dashboard',
          children: [
            { 
              label: 'Clientes', 
              route: '/dashboard/clientes',
          
            },
            // { label: 'Facturas', route: '/dashboard/facturas' },
            { label: 'Contratos', route: '/dashboard/contratos' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Autenticación',
          route: '/auth',
          children: [
            { label: 'Iniciar sesión', route: '/auth/sign-in' },
          ],
        },
      ],
    },
  
    {
      group: 'Configuración',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Ajustes',
          route: '/settings',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Notificaciones',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Carpetas',
          route: '/folders',
          children: [
            { label: 'Archivos actuales', route: '/folders/current-files' },
            { label: 'Descargas', route: '/folders/download' },
            { label: 'Papelera', route: '/folders/trash' },
          ],
        },
      ],
    },
  ];
}
