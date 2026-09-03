export const featuredProducts = [
  {
    id: 1,
    title: 'CORE Pulse 510 Battery',
    category: 'CORE',
    sku: 'CORE-510',
    image: '/wp-content/uploads/2025/11/zomee-core-pulse-510-battery-e1764217815913-150x133.jpg',
    href: '/product/core-pulse-510/',
  },
  {
    id: 2,
    title: 'MELT MAX',
    category: 'MELT',
    sku: 'MELT-MAX',
    image: '/wp-content/uploads/2025/11/MELT-MAX_0000s_0001_01-8-150x150.jpg',
    href: '/product/melt-max/',
  },
  {
    id: 3,
    title: 'CORE Ceramic Cartridge',
    category: 'CORE',
    sku: 'CORE-CERAMIC',
    image: '/wp-content/uploads/2025/11/core-14x95.2-400mah_0000_组-1-拷贝-8-700x700.jpg',
    href: '/product/core-ceramic-cartridge/',
  },
  {
    id: 4,
    title: 'MELT Dabber',
    category: 'MELT',
    sku: 'MELT-DABBER',
    image: '/wp-content/uploads/2025/11/melt-dabber_0002s_0003_微信图片_20251121170257_333_39-150x150.jpg',
    href: '/product/melt-dabber/',
  },
  {
    id: 5,
    title: 'Custom Packaging Box',
    category: 'PACK',
    sku: 'PACK-BOX',
    image: '/wp-content/uploads/2025/11/pack_0002_背卡盒子_0003_背卡-拷贝-768x768.jpg',
    href: '/product/custom-packaging-box/',
  },
  {
    id: 6,
    title: 'Switch Equipment System',
    category: 'SWITCH',
    sku: 'SWITCH-SYSTEM',
    image: '/wp-content/uploads/2025/11/switch-拷贝-768x768.jpg',
    href: '/product/switch-equipment-system/',
  },
];

export const solutionCards = [
  {
    portal: 'VAPE',
    title: 'Build a hardware range',
    copy: 'Start with device format, oil compatibility, target market, and the parts your launch needs around it.',
    image: productPortalsImage('vape'),
    href: '/shop/?portal=vape',
  },
  {
    portal: 'PACK',
    title: 'Pair the product with packaging',
    copy: 'Bring bags, boxes, child-resistant formats, and presentation details into one product decision.',
    image: productPortalsImage('pack'),
    href: '/shop/?portal=pack',
  },
  {
    portal: 'SWITCH',
    title: 'Connect the production route',
    copy: 'Map equipment, HNB, NRT, and system requirements before committing to a format or workflow.',
    image: productPortalsImage('switch'),
    href: '/shop/?portal=switch',
  },
  {
    portal: 'BOOST',
    title: 'Set an OEM or ODM route',
    copy: 'Use a defined brief to align product direction, customization, and target-market questions with the team.',
    image: productPortalsImage('boost'),
    href: '/contact-us/',
  },
];

function productPortalsImage(key) {
  const images = {
    vape: '/wp-content/uploads/2025/11/zomee-core-pulse-510-battery-1-1170x536.jpg',
    pack: '/wp-content/uploads/2025/11/pack_0002_背卡盒子_0003_背卡-拷贝-768x768.jpg',
    switch: '/wp-content/uploads/2025/11/switch-拷贝-768x768.jpg',
    boost: '/wp-content/uploads/2025/11/1920540-about-1170x536.jpg',
  };

  return images[key];
}

export const insightPreviews = [
  { date: 'NOV 2025', title: 'How to scope a hardware brief before sampling', copy: 'A short checklist for product format, market, volume, and open decisions.', href: '/news/' },
  { date: 'OCT 2025', title: 'Packaging choices that affect the launch route', copy: 'Bring format, finish, and compliance questions into the same conversation.', href: '/news/' },
  { date: 'SEP 2025', title: 'From product direction to a production route', copy: 'The decisions that help an OEM or ODM project move with less backtracking.', href: '/news/' },
];
