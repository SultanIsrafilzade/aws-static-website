# AWS Static Website with CloudFront CDN

A modern static website hosted on AWS S3, distributed globally via CloudFront CDN, with automated CI/CD deployment using GitHub Actions.

## 🚀 Architecture
```
GitHub → GitHub Actions → AWS S3 → CloudFront CDN → Users Worldwide
```

## 🛠️ Technologies Used

- **AWS S3** - Static website hosting
- **AWS CloudFront** - Global CDN with 400+ edge locations
- **AWS Route53** - DNS management (optional)
- **AWS Certificate Manager** - Free SSL certificates
- **GitHub Actions** - CI/CD pipeline
- **HTML/CSS/JavaScript** - Frontend

## 📋 Features

✅ **Serverless** - No EC2 instances to manage  
✅ **Global Performance** - Fast loading from anywhere via CDN  
✅ **HTTPS** - Secure with free SSL certificate  
✅ **Automated Deployments** - Push to GitHub and it goes live  
✅ **Cost-Effective** - ~$1-5/month for small sites  

## 🌐 Live Website

- **CloudFront URL:** https://d2x1uow1ho1jnq.cloudfront.net/


## 🔧 Deployment Process

1. Make changes to website files
2. Commit changes: `git add . && git commit -m "Update website"`
3. Push to GitHub: `git push`
4. GitHub Actions automatically:
   - Syncs files to S3
   - Invalidates CloudFront cache
   - Website updates in ~1-2 minutes

## 📊 AWS Services Configuration

### S3 Bucket
- **Bucket name:** sultan-static-website-project3-268054298394-eu-north-1-an
- **Region:** eu-north-1
- **Static website hosting:** Enabled
- **Public access:** Enabled (controlled by bucket policy)

### CloudFront Distribution
- **Distribution ID:** E1XHGX5W5GE0EN
- **Price class:** All edge locations
- **Default root object:** index.html
- **SSL:** Free CloudFront certificate

### IAM User (for GitHub Actions)
- **Username:** github-actions-deployer
- **Permissions:** S3 sync + CloudFront invalidation only

## 💰 Monthly Costs

- **S3 Storage:** ~$0.50/month (for 20GB)
- **CloudFront:** ~$1-3/month (1TB free tier first year)
- **Route53 Hosted Zone:** $0.50/month (if using custom domain)
- **Domain Registration:** ~$1/month ($12/year)

**Total:** ~$2-5/month (or ~$1 without custom domain)

## 🔐 Security

- All traffic encrypted with HTTPS
- S3 bucket policy restricts to read-only public access
- IAM user has minimum required permissions
- Secrets stored securely in GitHub

## 📝 Project Learnings

This project demonstrates:
- Static website hosting on AWS
- Global content delivery with CDN
- CI/CD automation with GitHub Actions
- Infrastructure as Code concepts
- Serverless architecture patterns

## 👤 Author

**Sultan Israfilzade* - DevOps Learning Journey

## 📄 License

This project is open source and available for learning purposes.