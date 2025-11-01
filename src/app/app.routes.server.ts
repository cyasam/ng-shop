import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'categories/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // örnek: API'den kategori slug'larını al

      const slugs = await fetch('https://fakestoreapi.com/products/categories').then((res) =>
        res.json()
      );

      // Angular'a build-time'da hangi parametrelerle render edeceğini bildir
      return slugs.map((slug: string) => {
        return { slug: encodeURIComponent(slug) };
      });
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
