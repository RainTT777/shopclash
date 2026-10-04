export const site = {
  name: 'ClashShop',
  url: import.meta.env.PUBLIC_SITE_URL || 'https://clashshop.net',
  description: 'ClashShop 机场推荐与购买教程，提供优惠码核验、节点购买平台、订阅套餐、计费方式和付款渠道指南。',
  email: 'contact@clashshop.net'
} as const;

export const nav = [
  { href: '/help/', label: '帮助中心' },
  { href: '/tools/', label: '工具汇总' },
  { href: '/faq/', label: '问题库帮助' },
  { href: '/methodology/', label: '评测方法' }
] as const;
