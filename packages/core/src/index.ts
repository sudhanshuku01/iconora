/**
 * @iconora/core
 * Raw SVG data and icon metadata for the Iconora icon library.
 */

export type IconCategory =
  | 'interface'
  | 'arrows'
  | 'media'
  | 'communication'
  | 'commerce'
  | 'files'
  | 'charts'
  | 'nature'
  | 'devices'
  | 'security';

export interface IconMeta {
  name: string;
  category: IconCategory;
  tags: string[];
  paths: string[];
  viewBox?: string;
}

export interface IconoraIconData {
  [key: string]: IconMeta;
}

// ---------------------------------------------------------------------------
// Icon definitions — 60 hand-crafted icons
// ---------------------------------------------------------------------------
export const icons: IconoraIconData = {
  // ── Interface ──────────────────────────────────────────────────────────
  home: {
    name: 'home',
    category: 'interface',
    tags: ['house', 'main', 'dashboard'],
    paths: [
      'M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z',
      'M9 21V12h6v9',
    ],
  },
  menu: {
    name: 'menu',
    category: 'interface',
    tags: ['hamburger', 'nav', 'list'],
    paths: ['M3 6h18', 'M3 12h18', 'M3 18h18'],
  },
  close: {
    name: 'close',
    category: 'interface',
    tags: ['x', 'cancel', 'dismiss'],
    paths: ['M18 6L6 18', 'M6 6l12 12'],
  },
  search: {
    name: 'search',
    category: 'interface',
    tags: ['find', 'magnifier', 'lookup'],
    paths: ['M21 21l-4.35-4.35', 'M17 11A6 6 0 115 11a6 6 0 0112 0z'],
  },
  settings: {
    name: 'settings',
    category: 'interface',
    tags: ['gear', 'options', 'config'],
    paths: [
      'M12 15a3 3 0 100-6 3 3 0 000 6z',
      'M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z',
    ],
  },
  user: {
    name: 'user',
    category: 'interface',
    tags: ['person', 'account', 'profile'],
    paths: [
      'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2',
      'M12 11a4 4 0 100-8 4 4 0 000 8z',
    ],
  },
  bell: {
    name: 'bell',
    category: 'interface',
    tags: ['notification', 'alert', 'alarm'],
    paths: [
      'M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9',
      'M13.73 21a2 2 0 01-3.46 0',
    ],
  },
  heart: {
    name: 'heart',
    category: 'interface',
    tags: ['like', 'love', 'favorite'],
    paths: [
      'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z',
    ],
  },
  star: {
    name: 'star',
    category: 'interface',
    tags: ['favorite', 'rating', 'bookmark'],
    paths: [
      'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    ],
  },
  bookmark: {
    name: 'bookmark',
    category: 'interface',
    tags: ['save', 'tag', 'mark'],
    paths: ['M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z'],
  },
  filter: {
    name: 'filter',
    category: 'interface',
    tags: ['sort', 'funnel', 'refine'],
    paths: ['M22 3H2l8 9.46V19l4 2v-8.54L22 3z'],
  },
  grid: {
    name: 'grid',
    category: 'interface',
    tags: ['layout', 'tiles', 'view'],
    paths: [
      'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
    ],
  },
  list: {
    name: 'list',
    category: 'interface',
    tags: ['items', 'rows', 'view'],
    paths: ['M8 6h13', 'M8 12h13', 'M8 18h13', 'M3 6h.01', 'M3 12h.01', 'M3 18h.01'],
  },
  moon: {
    name: 'moon',
    category: 'interface',
    tags: ['dark', 'night', 'theme'],
    paths: ['M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'],
  },
  sun: {
    name: 'sun',
    category: 'interface',
    tags: ['light', 'day', 'theme'],
    paths: [
      'M12 7a5 5 0 100 10A5 5 0 0012 7z',
      'M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42',
    ],
  },

  // ── Arrows ──────────────────────────────────────────────────────────────
  'arrow-up': {
    name: 'arrow-up',
    category: 'arrows',
    tags: ['up', 'navigate', 'direction'],
    paths: ['M12 19V5', 'M5 12l7-7 7 7'],
  },
  'arrow-down': {
    name: 'arrow-down',
    category: 'arrows',
    tags: ['down', 'navigate', 'direction'],
    paths: ['M12 5v14', 'M19 12l-7 7-7-7'],
  },
  'arrow-left': {
    name: 'arrow-left',
    category: 'arrows',
    tags: ['back', 'previous', 'direction'],
    paths: ['M19 12H5', 'M12 19l-7-7 7-7'],
  },
  'arrow-right': {
    name: 'arrow-right',
    category: 'arrows',
    tags: ['forward', 'next', 'direction'],
    paths: ['M5 12h14', 'M12 5l7 7-7 7'],
  },
  'chevron-up': {
    name: 'chevron-up',
    category: 'arrows',
    tags: ['collapse', 'up'],
    paths: ['M18 15l-6-6-6 6'],
  },
  'chevron-down': {
    name: 'chevron-down',
    category: 'arrows',
    tags: ['expand', 'down'],
    paths: ['M6 9l6 6 6-6'],
  },
  'chevron-left': {
    name: 'chevron-left',
    category: 'arrows',
    tags: ['previous', 'back'],
    paths: ['M15 18l-6-6 6-6'],
  },
  'chevron-right': {
    name: 'chevron-right',
    category: 'arrows',
    tags: ['next', 'forward'],
    paths: ['M9 18l6-6-6-6'],
  },
  refresh: {
    name: 'refresh',
    category: 'arrows',
    tags: ['reload', 'rotate', 'sync'],
    paths: [
      'M23 4v6h-6',
      'M1 20v-6h6',
      'M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15',
    ],
  },
  'external-link': {
    name: 'external-link',
    category: 'arrows',
    tags: ['open', 'new tab', 'link'],
    paths: [
      'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6',
      'M15 3h6v6',
      'M10 14L21 3',
    ],
  },

  // ── Media ───────────────────────────────────────────────────────────────
  play: {
    name: 'play',
    category: 'media',
    tags: ['start', 'video', 'audio'],
    paths: ['M5 3l14 9-14 9V3z'],
  },
  pause: {
    name: 'pause',
    category: 'media',
    tags: ['stop', 'video', 'audio'],
    paths: ['M6 4h4v16H6zM14 4h4v16h-4z'],
  },
  stop: {
    name: 'stop',
    category: 'media',
    tags: ['end', 'video', 'audio'],
    paths: ['M4 4h16v16H4z'],
  },
  volume: {
    name: 'volume',
    category: 'media',
    tags: ['sound', 'audio', 'speaker'],
    paths: [
      'M11 5L6 9H2v6h4l5 4V5z',
      'M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07',
    ],
  },
  image: {
    name: 'image',
    category: 'media',
    tags: ['photo', 'picture', 'gallery'],
    paths: [
      'M21 19a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14z',
      'M8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z',
      'M21 15l-5-5L5 21',
    ],
  },
  camera: {
    name: 'camera',
    category: 'media',
    tags: ['photo', 'picture', 'capture'],
    paths: [
      'M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z',
      'M12 17a4 4 0 100-8 4 4 0 000 8z',
    ],
  },
  mic: {
    name: 'mic',
    category: 'media',
    tags: ['microphone', 'record', 'audio'],
    paths: [
      'M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z',
      'M19 10v2a7 7 0 01-14 0v-2',
      'M12 19v4M8 23h8',
    ],
  },

  // ── Communication ────────────────────────────────────────────────────────
  mail: {
    name: 'mail',
    category: 'communication',
    tags: ['email', 'message', 'inbox'],
    paths: [
      'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
      'M22 6l-10 7L2 6',
    ],
  },
  chat: {
    name: 'chat',
    category: 'communication',
    tags: ['message', 'talk', 'bubble'],
    paths: [
      'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z',
    ],
  },
  phone: {
    name: 'phone',
    category: 'communication',
    tags: ['call', 'contact', 'mobile'],
    paths: [
      'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z',
    ],
  },
  link: {
    name: 'link',
    category: 'communication',
    tags: ['url', 'chain', 'connect'],
    paths: [
      'M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71',
      'M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71',
    ],
  },
  share: {
    name: 'share',
    category: 'communication',
    tags: ['send', 'distribute', 'social'],
    paths: [
      'M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8',
      'M16 6l-4-4-4 4',
      'M12 2v13',
    ],
  },
  globe: {
    name: 'globe',
    category: 'communication',
    tags: ['world', 'web', 'internet'],
    paths: [
      'M12 2a10 10 0 100 20A10 10 0 0012 2z',
      'M2 12h20',
      'M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z',
    ],
  },

  // ── Commerce ─────────────────────────────────────────────────────────────
  cart: {
    name: 'cart',
    category: 'commerce',
    tags: ['shop', 'buy', 'basket'],
    paths: [
      'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z',
      'M3 6h18',
      'M16 10a4 4 0 01-8 0',
    ],
  },
  credit: {
    name: 'credit',
    category: 'commerce',
    tags: ['card', 'payment', 'billing'],
    paths: [
      'M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2z',
      'M1 10h22',
    ],
  },
  tag: {
    name: 'tag',
    category: 'commerce',
    tags: ['label', 'price', 'badge'],
    paths: [
      'M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z',
      'M7 7h.01',
    ],
  },
  gift: {
    name: 'gift',
    category: 'commerce',
    tags: ['present', 'reward', 'bonus'],
    paths: [
      'M20 12v10H4V12',
      'M2 7h20v5H2z',
      'M12 22V7',
      'M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z',
      'M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z',
    ],
  },

  // ── Files ────────────────────────────────────────────────────────────────
  file: {
    name: 'file',
    category: 'files',
    tags: ['document', 'paper', 'text'],
    paths: [
      'M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z',
      'M13 2v7h7',
    ],
  },
  folder: {
    name: 'folder',
    category: 'files',
    tags: ['directory', 'storage', 'files'],
    paths: [
      'M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2v11z',
    ],
  },
  download: {
    name: 'download',
    category: 'files',
    tags: ['save', 'export', 'pull'],
    paths: ['M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4', 'M7 10l5 5 5-5', 'M12 15V3'],
  },
  upload: {
    name: 'upload',
    category: 'files',
    tags: ['push', 'import', 'send'],
    paths: ['M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4', 'M17 8l-5-5-5 5', 'M12 3v12'],
  },
  trash: {
    name: 'trash',
    category: 'files',
    tags: ['delete', 'remove', 'bin'],
    paths: [
      'M3 6h18',
      'M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6',
      'M10 11v6M14 11v6',
      'M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2',
    ],
  },
  edit: {
    name: 'edit',
    category: 'files',
    tags: ['pencil', 'write', 'modify'],
    paths: [
      'M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7',
      'M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z',
    ],
  },
  copy: {
    name: 'copy',
    category: 'files',
    tags: ['duplicate', 'clone', 'paste'],
    paths: [
      'M20 9h-9a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-9a2 2 0 00-2-2z',
      'M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1',
    ],
  },

  // ── Charts ───────────────────────────────────────────────────────────────
  'bar-chart': {
    name: 'bar-chart',
    category: 'charts',
    tags: ['graph', 'data', 'analytics'],
    paths: [
      'M12 20V10',
      'M18 20V4',
      'M6 20v-4',
    ],
  },
  'pie-chart': {
    name: 'pie-chart',
    category: 'charts',
    tags: ['graph', 'data', 'percentage'],
    paths: [
      'M21.21 15.89A10 10 0 118 2.83',
      'M22 12A10 10 0 0012 2v10z',
    ],
  },
  trending: {
    name: 'trending',
    category: 'charts',
    tags: ['up', 'growth', 'analytics'],
    paths: ['M23 6l-9.5 9.5-5-5L1 18', 'M17 6h6v6'],
  },

  // ── Devices ──────────────────────────────────────────────────────────────
  monitor: {
    name: 'monitor',
    category: 'devices',
    tags: ['screen', 'desktop', 'display'],
    paths: [
      'M20 3H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2z',
      'M8 21h8M12 17v4',
    ],
  },
  smartphone: {
    name: 'smartphone',
    category: 'devices',
    tags: ['mobile', 'phone', 'device'],
    paths: [
      'M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2z',
      'M12 18h.01',
    ],
  },
  wifi: {
    name: 'wifi',
    category: 'devices',
    tags: ['internet', 'wireless', 'network'],
    paths: [
      'M5 12.55a11 11 0 0114.08 0',
      'M1.42 9a16 16 0 0121.16 0',
      'M8.53 16.11a6 6 0 016.95 0',
      'M12 20h.01',
    ],
  },
  bluetooth: {
    name: 'bluetooth',
    category: 'devices',
    tags: ['wireless', 'connect', 'device'],
    paths: ['M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11'],
  },

  // ── Security ─────────────────────────────────────────────────────────────
  lock: {
    name: 'lock',
    category: 'security',
    tags: ['secure', 'password', 'private'],
    paths: [
      'M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2z',
      'M7 11V7a5 5 0 0110 0v4',
    ],
  },
  unlock: {
    name: 'unlock',
    category: 'security',
    tags: ['open', 'access', 'public'],
    paths: [
      'M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2z',
      'M7 11V7a5 5 0 019.9-1',
    ],
  },
  shield: {
    name: 'shield',
    category: 'security',
    tags: ['protect', 'security', 'safe'],
    paths: ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'],
  },
  key: {
    name: 'key',
    category: 'security',
    tags: ['password', 'access', 'auth'],
    paths: [
      'M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4',
    ],
  },
  eye: {
    name: 'eye',
    category: 'security',
    tags: ['view', 'visible', 'show'],
    paths: [
      'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z',
      'M12 15a3 3 0 100-6 3 3 0 000 6z',
    ],
  },
  'eye-off': {
    name: 'eye-off',
    category: 'security',
    tags: ['hidden', 'invisible', 'hide'],
    paths: [
      'M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94',
      'M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19',
      'M1 1l22 22',
      'M14.12 14.12a3 3 0 01-4.243-4.243',
    ],
  },

  // ── Nature ───────────────────────────────────────────────────────────────
  'map-pin': {
    name: 'map-pin',
    category: 'nature',
    tags: ['location', 'place', 'pin'],
    paths: [
      'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z',
      'M12 13a3 3 0 100-6 3 3 0 000 6z',
    ],
  },
  cloud: {
    name: 'cloud',
    category: 'nature',
    tags: ['weather', 'sky', 'storage'],
    paths: ['M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z'],
  },
  zap: {
    name: 'zap',
    category: 'nature',
    tags: ['lightning', 'energy', 'fast'],
    paths: ['M13 2L3 14h9l-1 8 10-12h-9l1-8z'],
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Get all icon names */
export const iconNames = Object.keys(icons) as Array<keyof typeof icons>;

/** Get icons by category */
export function getIconsByCategory(category: IconCategory): IconMeta[] {
  return Object.values(icons).filter((icon) => icon.category === category);
}

/** Search icons by name or tag */
export function searchIcons(query: string): IconMeta[] {
  const q = query.toLowerCase();
  return Object.values(icons).filter(
    (icon) =>
      icon.name.includes(q) ||
      icon.tags.some((tag) => tag.includes(q))
  );
}

/** Get all unique categories */
export const categories: IconCategory[] = [
  'interface', 'arrows', 'media', 'communication',
  'commerce', 'files', 'charts', 'nature', 'devices', 'security',
];
