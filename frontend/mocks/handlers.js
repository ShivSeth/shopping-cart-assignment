import { rest } from 'msw';
const URL = 'http://localhost:5000';
export const handlers = [
  rest.get(`${URL}/categories`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: 'Beverages',
          key: 'beverages',
          description:
            'Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ',
          enabled: true,
          order: 3,
          imageUrl: '/static/images/category/beverages.png',
          id: '5b675e5e5936635728f9fc30',
        },
        {
          name: 'Bakery Cakes and Dairy',
          key: 'bakery-cakes-dairy',
          description:
            'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.',
          enabled: true,
          order: 2,
          imageUrl: '/static/images/category/bakery.png',
          id: '5b6899123d1a866534f516de',
        },
        {
          name: 'Beauty and Hygiene',
          key: 'beauty-hygiene',
          description:
            'Buy beauty and personal care products online in India at best prices.',
          enabled: true,
          order: 4,
          imageUrl: '/static/images/category/beauty.png',
          id: '5b68994e3d1a866534f516df',
        },
      ])
    );
  }),
  rest.get(`${URL}/products`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: 'Tata Tea Gold Leaf Tea, 500 gm',
          imageURL: '/static/images/products/beverages/tata-tea.jpg',
          description:
            'Tata Tea Gold is a unique blend of fine Assam tea leaves with special 15%  long leaf.',
          price: 165,
          stock: 50,
          category: '5b675e5e5936635728f9fc30',
          sku: 'bev-tata-tea-500',
          id: '5b6c6f4a01a7c3842953088c',
        },
        {
          name: 'Sandwich Bread - White, Chemical Free, 400 gm',
          imageURL: '/static/images/products/bakery-cakes-dairy/bread.jpg',
          description:
            'Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we decided to give you just that. We start baking our breads once you order using the finest ingredients available.',
          price: 32,
          stock: 50,
          category: '5b6899123d1a866534f516de',
          sku: 'bcd-bread-400',
          id: '5b6c6d3201a7c38429530888',
        },
        {
          name: 'Listerine Mouthwash - Cool Mint, 250 ml',
          imageURL: '/static/images/products/beauty-hygiene/listerine.jpg',
          description:
            'Listerine Cool mint Antibacterial Mouthwash is rapid & easy to use, a 30 second "slosh" with Listerine after brushing and flossing reaches parts of the mouth that may be missed. Used two times daily, Listerine provides 24-hour defence against plaque and lasting bright breath assurance.',
          price: 109,
          stock: 50,
          category: '5b68994e3d1a866534f516df',
          sku: 'bh-listerine-250',
          id: '5b6c715f01a7c38429530890',
        },
      ])
    );
  }),

  rest.get(`${URL}/banners`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          bannerImageUrl: '/static/images/offers/offer1.jpg',
          bannerImageAlt: 'Independence Day Deal - 25% off on shampoo',
          isActive: true,
          order: 1,
          id: '5b6c38156cb7d770b7010ccc',
        },
        {
          bannerImageUrl: '/static/images/offers/offer2.jpg',
          bannerImageAlt: 'Independence Day Deal - Rs120 off on surf',
          isActive: true,
          order: 2,
          id: '5b6c38336cb7d770b7010ccd',
        },
        {
          bannerImageUrl: '/static/images/offers/offer3.jpg',
          bannerImageAlt: 'Independence Day Deal - Rs99 off on domex',
          isActive: true,
          order: 3,
          id: '5b6c38456cb7d770b7010cce',
        },
      ])
    );
  }),
];
