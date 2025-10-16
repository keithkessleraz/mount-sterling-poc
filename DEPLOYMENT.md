# Deployment Guide - Mount Sterling POC

## Deploy to Render

### Prerequisites
- GitHub account
- Render account (free tier works fine)

### Step 1: Push to GitHub

If you haven't already:

```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/mount-sterling-poc.git
git branch -M main
git push -u origin main
```

### Step 2: Create Render Web Service

1. Go to [render.com](https://render.com) and log in
2. Click "New +" and select "Web Service"
3. Connect your GitHub account if not already connected
4. Select your `mount-sterling-poc` repository

### Step 3: Configure the Service

**Basic Settings:**
- **Name**: `mount-sterling-poc` (or your preferred name)
- **Region**: Choose closest to your target audience
- **Branch**: `main`
- **Root Directory**: Leave blank
- **Runtime**: `Node`

**Build & Deploy:**
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

**Environment:**
- **Node Version**: Select `20.x` or latest LTS

### Step 4: Environment Variables (Optional)

Add these in the Render dashboard under "Environment":

```
NEXT_PUBLIC_SITE_URL=https://your-render-url.onrender.com
```

(You can update this later with your custom domain)

### Step 5: Deploy

1. Click "Create Web Service"
2. Render will automatically:
   - Install dependencies
   - Build your Next.js app
   - Deploy to a URL like: `https://mount-sterling-poc.onrender.com`

### Step 6: Verify Deployment

Once deployed, visit your Render URL and verify:
- ✅ Hero section displays correctly
- ✅ Property grid shows all 9 properties
- ✅ Property filtering works (All, Commercial, Residential)
- ✅ Contact form validates and submits
- ✅ Navigation scrolls to sections
- ✅ Mobile responsive on different screen sizes

## Custom Domain Setup (Optional)

### On Render:
1. Go to your service settings
2. Navigate to "Custom Domain"
3. Add your domain (e.g., `downtownmountsterling.com`)
4. Follow Render's DNS instructions

### DNS Configuration:
Add a CNAME record pointing to your Render URL:
```
Type: CNAME
Name: www (or @)
Value: mount-sterling-poc.onrender.com
```

## Automatic Deployments

Render automatically deploys when you push to your main branch:

```bash
# Make changes
git add .
git commit -m "Update property details"
git push

# Render automatically rebuilds and deploys
```

## Monitoring

- **Render Dashboard**: Shows build logs, deploy status, and performance
- **Logs**: Access via Render dashboard under "Logs" tab
- **Metrics**: Basic metrics available in free tier

## Troubleshooting

### Build Fails
- Check build logs in Render dashboard
- Verify all dependencies are in package.json
- Test locally: `npm run build`

### Site Not Loading
- Check if service is "Live" in Render
- Review deployment logs for errors
- Verify build command completed successfully

### Form Not Working
- Check browser console for errors
- For POC, form logs to console
- Production: Add email service (Resend/SendGrid)

## Next Steps for Production

1. **Email Integration**: Connect Resend or SendGrid for contact form
2. **Analytics**: Add Google Analytics or Plausible
3. **CMS**: Integrate Payload CMS for content management
4. **Database**: Add PostgreSQL for storing leads
5. **Images**: Upload real property photos
6. **SEO**: Submit sitemap to search engines

## Cost

**Free Tier:**
- Web Service: Free (with limitations)
- Automatic SSL: Included
- Custom domain: Free to connect

**Paid Tier (~$7/mo):**
- Better performance
- No sleep on inactivity
- More build minutes

## Support

For Render-specific issues:
- [Render Docs](https://render.com/docs)
- [Render Community](https://community.render.com)

For Next.js issues:
- [Next.js Docs](https://nextjs.org/docs)
- Check build logs for specific errors
