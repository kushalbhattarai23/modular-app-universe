
import { AppConfig } from '@/types';

export const availableApps: AppConfig[] = [
  {
    id: 'public',
    name: 'Public',
    description: 'Browse public shows and universes',
    icon: 'Globe',
    color: 'blue',
    routes: [
      { path: '/public/universes', name: 'All Universes', icon: 'Globe' },
      { path: '/public/shows', name: 'All Shows', icon: 'Tv' }
    ]
  },
  {
    id: 'tv-shows',
    name: 'TV Shows',
    description: 'Track your favorite TV shows and manage watchlists',
    icon: 'Tv',
    color: 'purple',
    routes: [
      { path: '/tv-shows', name: 'Dashboard', icon: 'BarChart3' },
      { path: '/tv-shows/my-shows', name: 'My Shows', icon: 'Heart' },
      { path: '/tv-shows/public-shows', name: 'Browse Shows', icon: 'Globe' },
      { path: '/tv-shows/public-universes', name: 'Public Universes', icon: 'Globe' },
      { path: '/tv-shows/private-universes', name: 'Private Universes', icon: 'Lock' },
      { path: '/tv-shows/show/:slug', name: 'Show Detail', icon: 'Tv' }
    ]
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Manage your personal finances and track expenses',
    icon: 'DollarSign',
    color: 'green',
    routes: [
      { path: '/finance', name: 'Dashboard', icon: 'BarChart3' },
      { path: '/finance/transactions', name: 'Transactions', icon: 'Receipt' },
      { path: '/finance/wallets', name: 'Wallets', icon: 'Wallet' },
      { path: '/finance/categories', name: 'Categories', icon: 'Tag' },
      { path: '/finance/transfers', name: 'Transfers', icon: 'ArrowLeftRight' },
      { path: '/finance/budgets', name: 'Budgets', icon: 'Target' },
      { path: '/finance/reports', name: 'Reports', icon: 'FileBarChart' },
      { path: '/finance/settings', name: 'Settings', icon: 'Settings' }
    ]
  },
  {
    id: 'admin',
    name: 'Admin',
    description: 'System administration and management',
    icon: 'Settings',
    color: 'red',
    routes: [
      { path: '/admin', name: 'Dashboard', icon: 'BarChart3' },
      { path: '/admin/users', name: 'Users', icon: 'Users' },
      { path: '/admin/content', name: 'Content', icon: 'Globe' },
      { path: '/admin/add-show', name: 'Add Show', icon: 'Plus' }
    ]
  }
];

export const getEnabledApps = (settings: any) => {
  // Return all apps including the new public app - available to everyone
  return availableApps.filter(app => app.id !== 'admin');
};

