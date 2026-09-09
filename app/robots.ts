import type { MetadataRoute } from "next"
import { host_url } from "./config"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap: `${host_url}/sitemap.xml`,
    }
}