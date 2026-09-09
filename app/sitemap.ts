import type { MetadataRoute } from "next"
import { host_url } from "./config"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${host_url}`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1
        },
        {
            url: `${host_url}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: `${host_url}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.5
        },
    ]
}