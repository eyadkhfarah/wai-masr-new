import { NavList } from "@/lib/NavList";  
import { MetadataRoute } from "next";  
import { fetchPosts } from "@/lib/notion";  
  
  
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {  
  const siteUrl =  
    process.env.NEXT_PUBLIC_DOMAIN_URL || "https://w3ieg.com";  

  const post = await fetchPosts();  
  
  const links: MetadataRoute.Sitemap = [     
    {  
      url: siteUrl,  
      lastModified: new Date(),  
      changeFrequency: "weekly",  
      priority: 1,  
    },  
  
    // {  
    //   url: siteUrl + "/articles",  
    //   lastModified: new Date(),  
    //   changeFrequency: "weekly",  
    //   priority: 0.8,  
    // },  
    // {  
    //   url: siteUrl + "/contact",  
    //   lastModified: new Date(),  
    //   changeFrequency: "weekly",  
    //   priority: 0.8,  
    // },  
    // {  
    //   url: siteUrl + "/about",  
    //   lastModified: new Date(),  
    //   changeFrequency: "weekly",  
    //   priority: 0.8,  
    // },  
    // {  
    //   url: siteUrl + "/support",  
    //   lastModified: new Date(),  
    //   changeFrequency: "weekly",  
    //   priority: 0.8,  
    // },  
    // {  
    //   url: siteUrl + "/join",  
    //   lastModified: new Date(),  
    //   changeFrequency: "weekly",  
    //   priority: 0.8,  
    // },  
  ];  
  
    post.results.forEach((post: any) => {  
      links.push({  
        url: `${siteUrl}/post/${post.properties.Slug.rich_text[0].plain_text}`,  
        lastModified: new Date(),  
        changeFrequency: "hourly",  
        priority: 0.6,  
      });  
    });  
  
  return links;  
}
