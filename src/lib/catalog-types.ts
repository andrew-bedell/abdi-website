export type Service = {
  id: string; slug: string; name: string; description: string; duration: string;
  status: 'draft' | 'published' | 'archived'; groupIds: string[];
  photos: { url: string; alt: string }[];
  price: { type: 'fixed' | 'from' | 'quote'; amount: number | null; currency: string; unit: string };
};
export type Group = { id: string; slug: string; name: string; description: string };
export type MenuItem = { id: string; label: string; type: 'group' | 'service' | 'page'; target: string; parentId: string | null };
export type Catalog = { services: Service[]; groups: Group[]; navigation: MenuItem[] };
export function servicePrice(service: Service) {
  const price = service.price;
  if (price.type === 'quote' || price.amount === null) return 'Price on request';
  return `${price.type === 'from' ? 'From ' : ''}${new Intl.NumberFormat('en', { style: 'currency', currency: price.currency, maximumFractionDigits: 2 }).format(price.amount)}${price.unit ? ` ${price.unit}` : ''}`;
}
export function menuHref(item: MenuItem, catalog: Catalog) {
  if (item.type === 'page') return item.target;
  if (item.type === 'service') return `/experiences/${catalog.services.find(s => s.id === item.target)?.slug}`;
  return `/experiences/groups/${catalog.groups.find(g => g.id === item.target)?.slug}`;
}
