# CR Seeds & Services website

Static Jekyll site for [crseedsandservices.com](https://crseedsandservices.com), hosted on GitHub Pages.
It recreates the original WordPress site (Farm Cultivation theme) with the same colors, logos, and images.

## Run locally

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Where things live

| What | File |
| --- | --- |
| Phone, email, address, social links | `_config.yml` |
| Menu items | `_data/navigation.yml` |
| Products page entries | `_data/products.yml` |
| Testimonials | `_data/testimonials.yml` |
| FAQ | `_data/faq.yml` |
| Quote images (home carousel) | `_data/quotes.yml` |
| About page photo gallery | `_data/gallery.yml` |
| Colors / fonts / layout | `assets/css/site.css` (color variables at the top) |
| Images | `assets/images/` |
| Pages | `index.html`, `products.html`, `about-us.html`, `contact-us.html` |

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**, set **Source** to "Deploy from a branch", and pick `main` / `/ (root)`.
3. To use the custom domain, enter `crseedsandservices.com` under **Custom domain** (this adds a `CNAME` file),
   then point the domain's DNS at GitHub Pages:
   - `A` records for the apex domain: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `<your-github-username>.github.io`
4. After DNS is working, turn on **Enforce HTTPS**.
