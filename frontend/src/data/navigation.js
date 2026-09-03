export const productPortals = [
  {
    key: 'vape',
    name: 'VAPE',
    label: 'Canna vape devices',
    description: 'Devices, batteries, pods, and dab tools.',
    image: '/wp-content/uploads/2025/11/zomee-core-pulse-510-battery-1-1170x536.jpg',
    children: ['LITZ', 'MELT', 'CORE', 'DRIP', 'TERPA', 'CANNABIS VAPORIZER'],
    href: '/shop/?portal=vape',
  },
  {
    key: 'pack',
    name: 'PACK',
    label: 'Packaging systems',
    description: 'Bags, boxes, and presentation-ready formats.',
    image: '/wp-content/uploads/2025/11/pack_0002_背卡盒子_0003_背卡-拷贝-768x768.jpg',
    children: ['MYLAR BAG', 'PREROLL / WRAPS', 'CIGAR BAG', 'VAPE BOX'],
    href: '/shop/?portal=pack',
  },
  {
    key: 'switch',
    name: 'SWITCH',
    label: 'Equipment integration',
    description: 'HNB, NRT, GMO-based systems, and machinery.',
    image: '/wp-content/uploads/2025/11/switch-拷贝-768x768.jpg',
    children: ['HNB DEVICES', 'NRT SOLUTIONS', 'GMO-BASED SYSTEMS', 'MACHINE'],
    href: '/shop/?portal=switch',
  },
  {
    key: 'boost',
    name: 'BOOST',
    label: 'Business and compliance support',
    description: 'OEM/ODM, market planning, and compliance support.',
    image: '/wp-content/uploads/2025/11/1920540-about-1170x536.jpg',
    children: [],
    href: '/contact-us/',
  },
];

export const solutionLinks = [
  { title: 'OEM / ODM projects', hint: 'From product concept to market-ready', href: '/#capability' },
  { title: 'Packaging and compliance', hint: 'Formats, documentation, and market context', href: '/#proof' },
  { title: 'Equipment integration', hint: 'Connect hardware and filling workflows', href: '/#capability' },
  { title: 'Talk through a brief', hint: 'Share target market and quantity', href: '/contact-us/' },
];

// The business portals are broader than the product card categories. Keeping
// this mapping in data makes the catalogue filter easy to replace with a CMS
// adapter later.
export const portalCategories = {
  vape: ['LITZ', 'MELT', 'CORE', 'DRIP', 'TERPA', 'VAPE'],
  pack: ['PACK'],
  switch: ['SWITCH'],
  boost: [],
};
