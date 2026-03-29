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
  plus: {
    name: 'plus',
    category: 'interface',
    tags: ['add', 'create', 'new'],
    paths: ['M12 5v14', 'M5 12h14'],
  },
  minus: {
    name: 'minus',
    category: 'interface',
    tags: ['remove', 'subtract', 'collapse'],
    paths: ['M5 12h14'],
  },
  check: {
    name: 'check',
    category: 'interface',
    tags: ['done', 'success', 'confirm'],
    paths: ['M20 6L9 17l-5-5'],
  },
  info: {
    name: 'info',
    category: 'interface',
    tags: ['about', 'details', 'help'],
    paths: ['M12 8h.01', 'M11 12h1v4h1', 'M12 22a10 10 0 100-20 10 10 0 000 20z'],
  },
  'help-circle': {
    name: 'help-circle',
    category: 'interface',
    tags: ['question', 'support', 'faq'],
    paths: ['M9.09 9a3 3 0 115.82 1c0 2-3 3-3 3', 'M12 17h.01', 'M12 22a10 10 0 100-20 10 10 0 000 20z'],
  },
  loader: {
    name: 'loader',
    category: 'interface',
    tags: ['spinner', 'loading', 'pending'],
    paths: ['M21 12a9 9 0 11-6.22-8.56'],
  },
  calendar: {
    name: 'calendar',
    category: 'interface',
    tags: ['date', 'schedule', 'event'],
    paths: ['M3 5h18v16H3z', 'M16 3v4', 'M8 3v4', 'M3 10h18'],
  },
  clock: {
    name: 'clock',
    category: 'interface',
    tags: ['time', 'watch', 'history'],
    paths: ['M12 6v6l4 2', 'M12 22a10 10 0 100-20 10 10 0 000 20z'],
  },
  dashboard: {
    name: 'dashboard',
    category: 'interface',
    tags: ['panel', 'overview', 'analytics'],
    paths: ['M3 13h8V3H3z', 'M13 21h8V11h-8z', 'M13 3h8v6h-8z', 'M3 21h8v-6H3z'],
  },
  command: {
    name: 'command',
    category: 'interface',
    tags: ['keyboard', 'shortcut', 'meta'],
    paths: ['M9 9a3 3 0 11-6 0 3 3 0 016 0z', 'M21 9a3 3 0 11-6 0 3 3 0 016 0z', 'M9 21a3 3 0 11-6 0 3 3 0 016 0z', 'M21 21a3 3 0 11-6 0 3 3 0 016 0z', 'M9 6h6', 'M9 18h6', 'M6 9v6', 'M18 9v6'],
  },
  'arrow-up-left': {
    name: 'arrow-up-left',
    category: 'arrows',
    tags: ['back', 'northwest', 'diagonal'],
    paths: ['M17 17L7 7', 'M17 7H7v10'],
  },
  'arrow-up-right': {
    name: 'arrow-up-right',
    category: 'arrows',
    tags: ['open', 'northeast', 'diagonal'],
    paths: ['M7 17L17 7', 'M7 7h10v10'],
  },
  'arrow-down-left': {
    name: 'arrow-down-left',
    category: 'arrows',
    tags: ['southwest', 'return', 'diagonal'],
    paths: ['M17 7L7 17', 'M7 7v10h10'],
  },
  'arrow-down-right': {
    name: 'arrow-down-right',
    category: 'arrows',
    tags: ['southeast', 'expand', 'diagonal'],
    paths: ['M7 7l10 10', 'M17 7v10H7'],
  },
  'chevrons-up': {
    name: 'chevrons-up',
    category: 'arrows',
    tags: ['collapse', 'double', 'up'],
    paths: ['M18 17l-6-6-6 6', 'M18 11l-6-6-6 6'],
  },
  'chevrons-down': {
    name: 'chevrons-down',
    category: 'arrows',
    tags: ['expand', 'double', 'down'],
    paths: ['M6 7l6 6 6-6', 'M6 13l6 6 6-6'],
  },
  'chevrons-left': {
    name: 'chevrons-left',
    category: 'arrows',
    tags: ['back', 'double', 'previous'],
    paths: ['M13 18l-6-6 6-6', 'M19 18l-6-6 6-6'],
  },
  'chevrons-right': {
    name: 'chevrons-right',
    category: 'arrows',
    tags: ['forward', 'double', 'next'],
    paths: ['M11 6l6 6-6 6', 'M5 6l6 6-6 6'],
  },
  move: {
    name: 'move',
    category: 'arrows',
    tags: ['drag', 'pan', 'reposition'],
    paths: ['M12 2v20', 'M2 12h20', 'M5 5l-3 3 3 3', 'M19 5l3 3-3 3', 'M5 19l-3-3 3-3', 'M19 19l3-3-3-3'],
  },
  repeat: {
    name: 'repeat',
    category: 'arrows',
    tags: ['loop', 'cycle', 'retry'],
    paths: ['M17 1l4 4-4 4', 'M3 11V9a4 4 0 014-4h14', 'M7 23l-4-4 4-4', 'M21 13v2a4 4 0 01-4 4H3'],
  },
  video: {
    name: 'video',
    category: 'media',
    tags: ['camera', 'meeting', 'stream'],
    paths: ['M3 7h13v10H3z', 'M16 10l5-3v10l-5-3z'],
  },
  music: {
    name: 'music',
    category: 'media',
    tags: ['song', 'audio', 'note'],
    paths: ['M9 18V5l12-2v13', 'M9 18a3 3 0 11-6 0 3 3 0 016 0z', 'M21 16a3 3 0 11-6 0 3 3 0 016 0z'],
  },
  headphones: {
    name: 'headphones',
    category: 'media',
    tags: ['audio', 'listen', 'support'],
    paths: ['M4 13a8 8 0 0116 0', 'M4 13v4a2 2 0 002 2h2v-6H6a2 2 0 00-2 2z', 'M20 13v4a2 2 0 01-2 2h-2v-6h2a2 2 0 012 2z'],
  },
  podcast: {
    name: 'podcast',
    category: 'media',
    tags: ['broadcast', 'mic', 'audio'],
    paths: ['M12 13a3 3 0 100-6 3 3 0 000 6z', 'M17 13a5 5 0 10-10 0', 'M20 13a8 8 0 10-16 0', 'M12 16v6', 'M9 22h6'],
  },
  radio: {
    name: 'radio',
    category: 'media',
    tags: ['fm', 'device', 'broadcast'],
    paths: ['M4 7h16v13H4z', 'M8 3l8 4', 'M7 11h.01', 'M11 11h5', 'M15 16a3 3 0 10-6 0', 'M13.5 16a1.5 1.5 0 10-3 0'],
  },
  'fast-forward': {
    name: 'fast-forward',
    category: 'media',
    tags: ['next', 'seek', 'speed'],
    paths: ['M4 4l8 8-8 8V4z', 'M12 4l8 8-8 8V4z'],
  },
  rewind: {
    name: 'rewind',
    category: 'media',
    tags: ['back', 'seek', 'previous'],
    paths: ['M20 4l-8 8 8 8V4z', 'M12 4L4 12l8 8V4z'],
  },
  'skip-next': {
    name: 'skip-next',
    category: 'media',
    tags: ['forward', 'track', 'music'],
    paths: ['M5 5l9 7-9 7V5z', 'M19 5v14'],
  },
  'skip-back': {
    name: 'skip-back',
    category: 'media',
    tags: ['previous', 'track', 'music'],
    paths: ['M19 5l-9 7 9 7V5z', 'M5 5v14'],
  },
  'speaker-off': {
    name: 'speaker-off',
    category: 'media',
    tags: ['mute', 'volume', 'silent'],
    paths: ['M11 5L6 9H2v6h4l5 4V5z', 'M23 9l-6 6', 'M17 9l6 6'],
  },
  send: {
    name: 'send',
    category: 'communication',
    tags: ['paper plane', 'share', 'submit'],
    paths: ['M22 2L11 13', 'M22 2L15 22l-4-9-9-4 20-7z'],
  },
  'message-square': {
    name: 'message-square',
    category: 'communication',
    tags: ['chat', 'support', 'comment'],
    paths: ['M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z'],
  },
  'message-circle': {
    name: 'message-circle',
    category: 'communication',
    tags: ['chat', 'bubble', 'discussion'],
    paths: ['M21 11.5a8.5 8.5 0 01-8.5 8.5A8.38 8.38 0 018 18l-5 2 2-5a8.38 8.38 0 01-1.5-4.5 8.5 8.5 0 0117 0z'],
  },
  'at-sign': {
    name: 'at-sign',
    category: 'communication',
    tags: ['mention', 'email', 'handle'],
    paths: ['M16 8a4 4 0 11-4 4', 'M16 8v4a2 2 0 104 0V8a8 8 0 10-8 8'],
  },
  inbox: {
    name: 'inbox',
    category: 'communication',
    tags: ['mail', 'receive', 'tray'],
    paths: ['M3 5h18l-2 12H5L3 5z', 'M3 13h5l2 3h4l2-3h5'],
  },
  outbox: {
    name: 'outbox',
    category: 'communication',
    tags: ['mail', 'send', 'tray'],
    paths: ['M3 7h18v12H3z', 'M12 3v10', 'M8 7l4-4 4 4', 'M3 15h5l2 3h4l2-3h5'],
  },
  rss: {
    name: 'rss',
    category: 'communication',
    tags: ['feed', 'news', 'subscribe'],
    paths: ['M5 11a8 8 0 018 8', 'M5 5a14 14 0 0114 14', 'M5 19h.01'],
  },
  users: {
    name: 'users',
    category: 'communication',
    tags: ['team', 'group', 'people'],
    paths: ['M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2', 'M9 11a4 4 0 100-8 4 4 0 000 8z', 'M23 21v-2a4 4 0 00-3-3.87', 'M16 3.13a4 4 0 010 7.75'],
  },
  'user-plus': {
    name: 'user-plus',
    category: 'communication',
    tags: ['invite', 'add', 'account'],
    paths: ['M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2', 'M8.5 11a4 4 0 100-8 4 4 0 000 8z', 'M20 8v6', 'M17 11h6'],
  },
  'user-minus': {
    name: 'user-minus',
    category: 'communication',
    tags: ['remove', 'account', 'team'],
    paths: ['M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2', 'M8.5 11a4 4 0 100-8 4 4 0 000 8z', 'M17 11h6'],
  },
  wallet: {
    name: 'wallet',
    category: 'commerce',
    tags: ['money', 'payment', 'cash'],
    paths: ['M3 7h18v10H3z', 'M3 7l2-3h14l2 3', 'M16 12h.01'],
  },
  receipt: {
    name: 'receipt',
    category: 'commerce',
    tags: ['bill', 'invoice', 'purchase'],
    paths: ['M6 2h12v20l-2-1-2 1-2-1-2 1-2-1-2 1V2z', 'M9 7h6', 'M9 11h6', 'M9 15h4'],
  },
  bag: {
    name: 'bag',
    category: 'commerce',
    tags: ['shopping', 'store', 'purchase'],
    paths: ['M6 7h12l-1 13H7L6 7z', 'M9 7V5a3 3 0 016 0v2'],
  },
  'shopping-bag': {
    name: 'shopping-bag',
    category: 'commerce',
    tags: ['store', 'checkout', 'retail'],
    paths: ['M6 8h12l-1 12H7L6 8z', 'M9 8V6a3 3 0 016 0v2', 'M9 12h.01', 'M15 12h.01'],
  },
  coupon: {
    name: 'coupon',
    category: 'commerce',
    tags: ['discount', 'ticket', 'offer'],
    paths: ['M3 9a2 2 0 002 2 2 2 0 010 4 2 2 0 00-2 2v3h18v-3a2 2 0 00-2-2 2 2 0 010-4 2 2 0 002-2V6H3v3z', 'M12 6v14'],
  },
  percent: {
    name: 'percent',
    category: 'commerce',
    tags: ['discount', 'sale', 'ratio'],
    paths: ['M19 5L5 19', 'M7 7a2 2 0 100-4 2 2 0 000 4z', 'M17 21a2 2 0 100-4 2 2 0 000 4z'],
  },
  banknote: {
    name: 'banknote',
    category: 'commerce',
    tags: ['money', 'cash', 'currency'],
    paths: ['M3 6h18v12H3z', 'M6 9a3 3 0 003 3 3 3 0 00-3 3', 'M18 9a3 3 0 01-3 3 3 3 0 013 3', 'M12 12h.01'],
  },
  coins: {
    name: 'coins',
    category: 'commerce',
    tags: ['currency', 'money', 'stack'],
    paths: ['M8 9c0 1.66 3.13 3 7 3s7-1.34 7-3-3.13-3-7-3-7 1.34-7 3z', 'M8 9v6c0 1.66 3.13 3 7 3s7-1.34 7-3V9', 'M5 5c0 1.35 2.24 2.47 5.24 2.85'],
  },
  calculator: {
    name: 'calculator',
    category: 'commerce',
    tags: ['math', 'billing', 'numbers'],
    paths: ['M7 2h10v20H7z', 'M9 6h6', 'M9 11h2', 'M13 11h2', 'M9 15h2', 'M13 15h2', 'M9 19h6'],
  },
  'file-text': {
    name: 'file-text',
    category: 'files',
    tags: ['document', 'notes', 'content'],
    paths: ['M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z', 'M14 2v6h6', 'M8 13h8', 'M8 17h8', 'M8 9h2'],
  },
  'file-code': {
    name: 'file-code',
    category: 'files',
    tags: ['development', 'source', 'programming'],
    paths: ['M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z', 'M14 2v6h6', 'M10 13l-2 2 2 2', 'M14 13l2 2-2 2'],
  },
  'file-json': {
    name: 'file-json',
    category: 'files',
    tags: ['data', 'api', 'config'],
    paths: ['M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z', 'M14 2v6h6', 'M10 10H9v8h1', 'M15 10h-1v8h1', 'M12 12v4'],
  },
  'file-plus': {
    name: 'file-plus',
    category: 'files',
    tags: ['create', 'new', 'document'],
    paths: ['M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z', 'M14 2v6h6', 'M12 13v6', 'M9 16h6'],
  },
  'file-minus': {
    name: 'file-minus',
    category: 'files',
    tags: ['remove', 'document', 'delete'],
    paths: ['M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z', 'M14 2v6h6', 'M9 16h6'],
  },
  'folder-open': {
    name: 'folder-open',
    category: 'files',
    tags: ['directory', 'browse', 'expanded'],
    paths: ['M3 7h6l2 2h10v9H3z', 'M3 7V5a2 2 0 012-2h4l2 2h8a2 2 0 012 2v2'],
  },
  'folder-plus': {
    name: 'folder-plus',
    category: 'files',
    tags: ['directory', 'new', 'create'],
    paths: ['M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2v11z', 'M12 10v6', 'M9 13h6'],
  },
  'folder-git': {
    name: 'folder-git',
    category: 'files',
    tags: ['repository', 'version control', 'code'],
    paths: ['M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2v11z', 'M9 12a2 2 0 100-4 2 2 0 000 4z', 'M15 18a2 2 0 100-4 2 2 0 000 4z', 'M15 10a2 2 0 100-4 2 2 0 000 4z', 'M9 12v4', 'M9 16h6', 'M15 12v2'],
  },
  terminal: {
    name: 'terminal',
    category: 'files',
    tags: ['cli', 'shell', 'console'],
    paths: ['M4 5h16v14H4z', 'M8 9l3 3-3 3', 'M13 15h3'],
  },
  code: {
    name: 'code',
    category: 'files',
    tags: ['development', 'brackets', 'syntax'],
    paths: ['M9 18l-6-6 6-6', 'M15 6l6 6-6 6'],
  },
  clipboard: {
    name: 'clipboard',
    category: 'files',
    tags: ['copy', 'paste', 'notes'],
    paths: ['M9 3h6v3H9z', 'M7 6h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2z'],
  },
  activity: {
    name: 'activity',
    category: 'charts',
    tags: ['pulse', 'monitoring', 'status'],
    paths: ['M3 12h4l3-7 4 14 3-7h4'],
  },
  'line-chart': {
    name: 'line-chart',
    category: 'charts',
    tags: ['graph', 'trend', 'analytics'],
    paths: ['M3 3v18h18', 'M7 14l4-4 3 3 5-7'],
  },
  'area-chart': {
    name: 'area-chart',
    category: 'charts',
    tags: ['graph', 'trend', 'data'],
    paths: ['M3 3v18h18', 'M7 14l4-4 3 3 5-7v8H7z'],
  },
  gauge: {
    name: 'gauge',
    category: 'charts',
    tags: ['speed', 'meter', 'performance'],
    paths: ['M12 14l4-4', 'M4.93 19.07a10 10 0 1114.14 0'],
  },
  database: {
    name: 'database',
    category: 'charts',
    tags: ['storage', 'sql', 'backend'],
    paths: ['M12 5c4.42 0 8 1.34 8 3s-3.58 3-8 3-8-1.34-8-3 3.58-3 8-3z', 'M4 8v4c0 1.66 3.58 3 8 3s8-1.34 8-3V8', 'M4 12v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4'],
  },
  server: {
    name: 'server',
    category: 'charts',
    tags: ['backend', 'hosting', 'infra'],
    paths: ['M3 4h18v6H3z', 'M3 14h18v6H3z', 'M7 7h.01', 'M7 17h.01', 'M11 7h6', 'M11 17h6'],
  },
  cpu: {
    name: 'cpu',
    category: 'charts',
    tags: ['chip', 'processor', 'hardware'],
    paths: ['M9 9h6v6H9z', 'M12 2v3', 'M12 19v3', 'M2 12h3', 'M19 12h3', 'M5 5l2 2', 'M17 17l2 2', 'M5 19l2-2', 'M17 7l2-2', 'M7 12V8h10v8H7z'],
  },
  'hard-drive': {
    name: 'hard-drive',
    category: 'charts',
    tags: ['disk', 'storage', 'drive'],
    paths: ['M3 16h18v4H3z', 'M5 16V6a2 2 0 012-2h10a2 2 0 012 2v10', 'M8 20h.01', 'M16 20h.01'],
  },
  bug: {
    name: 'bug',
    category: 'charts',
    tags: ['debug', 'issue', 'testing'],
    paths: ['M9 9h6v10H9z', 'M12 3v6', 'M5 13H2', 'M22 13h-3', 'M5 7l2 2', 'M19 7l-2 2', 'M5 19l2-2', 'M19 19l-2-2', 'M8 9a4 4 0 118 0'],
  },
  layers: {
    name: 'layers',
    category: 'charts',
    tags: ['stack', 'group', 'layout'],
    paths: ['M12 2L2 7l10 5 10-5-10-5z', 'M2 12l10 5 10-5', 'M2 17l10 5 10-5'],
  },
  laptop: {
    name: 'laptop',
    category: 'devices',
    tags: ['computer', 'notebook', 'development'],
    paths: ['M4 5h16v10H4z', 'M2 19h20'],
  },
  tablet: {
    name: 'tablet',
    category: 'devices',
    tags: ['device', 'screen', 'touch'],
    paths: ['M6 2h12v20H6z', 'M12 18h.01'],
  },
  watch: {
    name: 'watch',
    category: 'devices',
    tags: ['time', 'wearable', 'smartwatch'],
    paths: ['M9 2h6l1 3h-8l1-3z', 'M8 6h8v12H8z', 'M9 22h6l1-3h-8l1 3z', 'M12 12h.01'],
  },
  keyboard: {
    name: 'keyboard',
    category: 'devices',
    tags: ['input', 'typing', 'keys'],
    paths: ['M3 7h18v10H3z', 'M6 10h.01', 'M9 10h.01', 'M12 10h.01', 'M15 10h.01', 'M18 10h.01', 'M6 14h8', 'M16 14h2'],
  },
  mouse: {
    name: 'mouse',
    category: 'devices',
    tags: ['pointer', 'input', 'desktop'],
    paths: ['M12 2a5 5 0 00-5 5v5a5 5 0 0010 0V7a5 5 0 00-5-5z', 'M12 2v6'],
  },
  printer: {
    name: 'printer',
    category: 'devices',
    tags: ['print', 'office', 'paper'],
    paths: ['M6 9V3h12v6', 'M6 18h12v3H6z', 'M6 14H4a2 2 0 01-2-2v-1a3 3 0 013-3h14a3 3 0 013 3v1a2 2 0 01-2 2h-2', 'M8 13h8'],
  },
  scanner: {
    name: 'scanner',
    category: 'devices',
    tags: ['scan', 'document', 'capture'],
    paths: ['M5 7V5h4', 'M15 5h4v2', 'M19 17v2h-4', 'M9 19H5v-2', 'M4 12h16'],
  },
  usb: {
    name: 'usb',
    category: 'devices',
    tags: ['connector', 'port', 'hardware'],
    paths: ['M12 2v11', 'M12 6l-3 3', 'M12 6l3 3', 'M12 13l-3 3', 'M12 13l3 3', 'M9 16v2a2 2 0 002 2h2a2 2 0 002-2v-2', 'M12 2h.01'],
  },
  battery: {
    name: 'battery',
    category: 'devices',
    tags: ['power', 'charge', 'mobile'],
    paths: ['M2 8h18v8H2z', 'M22 11v2'],
  },
  'battery-charging': {
    name: 'battery-charging',
    category: 'devices',
    tags: ['power', 'charge', 'energy'],
    paths: ['M2 8h18v8H2z', 'M22 11v2', 'M11 9l-2 4h3l-1 4 4-6h-3l1-2z'],
  },
  fingerprint: {
    name: 'fingerprint',
    category: 'security',
    tags: ['biometric', 'auth', 'login'],
    paths: ['M12 11a4 4 0 014 4', 'M8 15a4 4 0 018-1', 'M7 10a5 5 0 0110 0', 'M5 10a7 7 0 0114 0', 'M12 3a9 9 0 019 9', 'M12 21a5 5 0 01-5-5'],
  },
  'qr-code': {
    name: 'qr-code',
    category: 'security',
    tags: ['scan', 'barcode', 'auth'],
    paths: ['M3 3h6v6H3z', 'M15 3h6v6h-6z', 'M3 15h6v6H3z', 'M17 15h1', 'M15 15h1', 'M20 15h1', 'M15 20h1', 'M18 18h3', 'M9 9h1', 'M15 9h1'],
  },
  scan: {
    name: 'scan',
    category: 'security',
    tags: ['qr', 'reader', 'barcode'],
    paths: ['M4 7V4h3', 'M17 4h3v3', 'M20 17v3h-3', 'M7 20H4v-3', 'M8 12h8'],
  },
  'shield-check': {
    name: 'shield-check',
    category: 'security',
    tags: ['verified', 'safe', 'secure'],
    paths: ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', 'M9 12l2 2 4-4'],
  },
  'shield-alert': {
    name: 'shield-alert',
    category: 'security',
    tags: ['warning', 'risk', 'security'],
    paths: ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', 'M12 8v5', 'M12 16h.01'],
  },
  'user-check': {
    name: 'user-check',
    category: 'security',
    tags: ['verified', 'account', 'approved'],
    paths: ['M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2', 'M8.5 11a4 4 0 100-8 4 4 0 000 8z', 'M17 11l2 2 4-4'],
  },
  'user-x': {
    name: 'user-x',
    category: 'security',
    tags: ['blocked', 'remove', 'account'],
    paths: ['M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2', 'M8.5 11a4 4 0 100-8 4 4 0 000 8z', 'M18 8l4 4', 'M22 8l-4 4'],
  },
  keyhole: {
    name: 'keyhole',
    category: 'security',
    tags: ['lock', 'password', 'secure'],
    paths: ['M7 11V8a5 5 0 0110 0v3', 'M5 11h14v10H5z', 'M12 15a2 2 0 100 4v2'],
  },
  'badge-check': {
    name: 'badge-check',
    category: 'security',
    tags: ['verified', 'approval', 'trust'],
    paths: ['M12 3l2.4 2.4 3.4-.5.5 3.4L21 11l-2.7 2.7.5 3.4-3.4.5L12 20l-3.4-2.4-3.4-.5.5-3.4L3 11l2.7-2.7-.5-3.4 3.4.5L12 3z', 'M9 12l2 2 4-4'],
  },
  'badge-alert': {
    name: 'badge-alert',
    category: 'security',
    tags: ['warning', 'notice', 'risk'],
    paths: ['M12 3l2.4 2.4 3.4-.5.5 3.4L21 11l-2.7 2.7.5 3.4-3.4.5L12 20l-3.4-2.4-3.4-.5.5-3.4L3 11l2.7-2.7-.5-3.4 3.4.5L12 3z', 'M12 8v5', 'M12 16h.01'],
  },
  compass: {
    name: 'compass',
    category: 'nature',
    tags: ['navigation', 'direction', 'location'],
    paths: ['M12 22a10 10 0 100-20 10 10 0 000 20z', 'M14.5 9.5l-5 5 5-5', 'M9.5 14.5l5-5-5 5'],
  },
  navigation: {
    name: 'navigation',
    category: 'nature',
    tags: ['direction', 'location', 'gps'],
    paths: ['M3 11l18-8-8 18-2-8-8-2z'],
  },
  flag: {
    name: 'flag',
    category: 'nature',
    tags: ['marker', 'goal', 'milestone'],
    paths: ['M5 3v18', 'M5 4h11l-2 4 2 4H5'],
  },
  route: {
    name: 'route',
    category: 'nature',
    tags: ['path', 'travel', 'map'],
    paths: ['M6 19a2 2 0 100-4 2 2 0 000 4z', 'M18 9a2 2 0 100-4 2 2 0 000 4z', 'M8 17h4a4 4 0 004-4V9'],
  },
  umbrella: {
    name: 'umbrella',
    category: 'nature',
    tags: ['weather', 'rain', 'protection'],
    paths: ['M3 12a9 9 0 0118 0H3z', 'M12 12v7a2 2 0 104 0'],
  },
  snowflake: {
    name: 'snowflake',
    category: 'nature',
    tags: ['winter', 'cold', 'weather'],
    paths: ['M12 2v20', 'M4.93 4.93l14.14 14.14', 'M2 12h20', 'M19.07 4.93L4.93 19.07'],
  },
  thermometer: {
    name: 'thermometer',
    category: 'nature',
    tags: ['temperature', 'weather', 'heat'],
    paths: ['M14 14.76V5a2 2 0 10-4 0v9.76a4 4 0 104 0z'],
  },
  wind: {
    name: 'wind',
    category: 'nature',
    tags: ['air', 'weather', 'breeze'],
    paths: ['M3 8h11a3 3 0 100-6', 'M2 16h14a3 3 0 110 6', 'M5 12h13'],
  },
  sunrise: {
    name: 'sunrise',
    category: 'nature',
    tags: ['morning', 'sun', 'day'],
    paths: ['M3 18h18', 'M5 14a7 7 0 0114 0', 'M12 2v5', 'M5 9l-2-2', 'M19 9l2-2', 'M12 9h.01'],
  },
  sunset: {
    name: 'sunset',
    category: 'nature',
    tags: ['evening', 'sun', 'night'],
    paths: ['M3 18h18', 'M5 14a7 7 0 0114 0', 'M12 7V2', 'M5 9l-2-2', 'M19 9l2-2', 'M12 22v-5'],
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
