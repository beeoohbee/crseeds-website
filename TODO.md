# Website improvement TODO

Recommendations from the post-migration review, roughly in priority order.
Items 1–3 are mostly one-time setup with the biggest payoff for being found; 4–5 most directly turn visitors into calls.

## 1. Point crseedsandservices.com at the new site
The new site only lives at `beeoohbee.github.io/crseeds-website`, and the old WordPress site is still live on the real domain. Two copies of the same content split search ranking.

- [ ] Add the custom domain in GitHub **Settings → Pages**
- [ ] Update DNS (A records for the apex domain, CNAME for `www`; see README)
- [ ] Set `baseurl` back to `""` in `_config.yml`
- [ ] Turn on **Enforce HTTPS**
- [ ] Retire the WordPress hosting

## 2. Make the site easy for search engines to find
There's no `sitemap.xml` or `robots.txt`, and every page uses the same generic description.

- [ ] Add the `jekyll-sitemap` and `jekyll-seo-tag` plugins (both supported by GitHub Pages)
- [ ] Give each page its own description, e.g. "Beck's seed dealer and soil sampling in Winston, MO"
- [ ] Add a social sharing image (shown when the link is posted on Facebook, etc.)

## 3. Add local-business details for Google
Customers will mostly search things like "Beck's seed dealer near Cameron MO" or "soil sampling Daviess County".

- [ ] Add structured business data (name, address, phone, hours, service area) so Google can show it in local results and Maps
- [ ] Set up or claim a free **Google Business Profile**; for a local ag business it may matter more than the website

## 4. Add a contact form and make the map interactive
The Contact page is a static map picture plus a phone number.

- [ ] Add a simple form (Formspree or Basin work on static sites) so farmers can reach out after hours
- [ ] Include a "What are you interested in?" choice: Seed / Soil sampling / Fertility / Livestock / Grain bags
- [ ] Replace the map picture with an embedded Google Map, or link it to directions

## 5. Rework the home page headline
The current hero line is warm but doesn't say *what* the business does or *where*.

- [ ] Try something like "Beck's Hybrids, Soil Sampling & Fertility Programs in Northwest Missouri"
- [ ] Add a "Call or Text" button in the hero
- [ ] Show all six products on the home page, not just Beck's and Maximum Farming

## 6. Give each product a clear next step
- [ ] End each product on the Products page with its own link, e.g. "Call or text about grain bags"
- [ ] Add alt text to the five product images that are missing it

## 7. Keep the content fresh: events, news and seasonal offers
The home page sends visitors to social media for events, which takes them off the site.

- [ ] Add a simple "News & Events" list (Jekyll handles this well and it's easy to update)
- [ ] Post field days, the customer appreciation event, early-order discounts and summer incentives

## 8. Tidy up the wording
- [ ] Testimonial: "genuinely **care's**" → "cares" (`_data/testimonials.yml`)
- [ ] FAQ: "not at **the this** point in time" → "not at this point in time" (`_data/faq.yml`)
- [ ] Split the About bio into 3–4 short paragraphs and fix the semicolons
- [ ] Consider a short timeline: 2003 internships → 2014 founded → 2016 Maximum Farming → 2022 Beck's

## 9. Strengthen trust signals
- [ ] Add more testimonials with first names or towns, with permission
- [ ] Mention years in business (since 2014) and the Mizzou agribusiness degree up front
- [ ] Add Beck's and Ag Spectrum partner badges
- [ ] Show the Advisory Council recognition that appears in the photos

## 10. Speed and upkeep
- [ ] Replace the home page hero image with a larger version (currently 960 px wide, soft on big screens)
- [ ] Delete the 10 unused quote screenshots in `assets/images/`
- [ ] Trim the 65-photo About carousel to the best 20–25
- [ ] Add analytics; the old WordPress site used Google Site Kit, so there may be a Google Analytics account to reconnect

---

**Can be done right away in code:** #2, #3, #6, #8, and the cleanup in #10.
**Needs details first:** #1 (DNS provider), #4 (which form service), #7 (event dates and text).
