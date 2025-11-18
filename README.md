# Sewing For Jesus — static site for GitHub Pages

This repository is a small static website scaffold for the Sewing For Jesus ministry (Evangel Baptist Church).

Included pages
- `index.html` — main page with Facebook feed placeholder and Google Maps embed
- `about.html` — about the ministry and contact info
- `donations.html` — donation options and address
- `photos.html` — gallery with lightbox

Where to customize
- Facebook feed: open `index.html` and replace the iframe href value `YourPageNameHere` with your Facebook Page slug (URL-encoded). Example: if your page is `https://www.facebook.com/SewingForJesusMinistry` set the encoded href to `https%3A%2F%2Fwww.facebook.com%2FSewingForJesusMinistry`.

Facebook group visibility and login note
- Facebook groups often require visitors to be logged in to view posts or the admin may have restricted group visibility. If the group is private or Facebook requires login, the embedded group plugin will show a login prompt instead of the timeline. Options:
	- Make the Facebook group public (if appropriate) so the plugin can show posts without login.
	- Create a public Facebook Page for Sewing for Jesus and use the Page plugin (public Pages show more reliably to anonymous visitors).
	- Manually post important updates to this site (we can add a small "news" area you can edit), or use a third-party service that fetches and republishes posts (note: may require scraping or API access and must follow Facebook's terms).

- PayPal/Donate link: edit `donations.html` and update the PayPal URL.
- Photos: replace the example images in `photos.html` with your own images. Place images in `assets/images/` and update the `src` attributes.

Deploy to GitHub Pages (quick)
1. Create a new GitHub repository and push this folder as the repository root (default branch `main` or `master`).
2. In the GitHub repository settings -> Pages, choose the branch (`main`) and root folder `/` as the publishing source.
3. Save — GitHub Pages will publish your site at `https://<your-username>.github.io/<repo-name>/`.

Tips
- If your site files are at the repository root (as here) use the root choice in Pages settings. If you publish from a `docs/` folder, move these files there or update.
- If links appear broken when previewing locally, GitHub Pages serves at `/repo-name/`; when testing locally consider using a simple static server or keep paths relative.

Questions or next steps
- Want a custom domain, contact forms, or automatic Facebook integration? I can add deployment steps or GitHub Actions to build and upload assets.
