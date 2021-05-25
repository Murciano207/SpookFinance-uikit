export const links = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.yogi.fi',
        external: true,
      },
      {
        label: 'Liquidity',
        href: 'https://pools.yogi.fi',
        external: true,
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Buy',
    icon: 'SwapVertIcon',
    href: `https://yogi.fi/buy`,
    external: true,
  },
  {
    label: 'Github',
    icon: 'GithubIcon',
    href: 'https://github.com/yogi-fi',
    external: true,
  },
  {
    label: 'Blog',
    icon: 'MediumIcon',
    href: 'https://medium.com/yogi-fi',
    external: true,
  },
];

export const socials = [
  {
    label: 'Discord',
    icon: 'DiscordIcon',
    href: 'https://discord.gg/W6wUZ4tgNC',
  },
  {
    label: 'Telegram',
    icon: 'TelegramIcon',
    href: 'https://t.me/yogi_finance',
  },
  {
    label: 'Twitter',
    icon: 'TwitterIcon',
    href: 'https://twitter.com/yogi_finance',
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
