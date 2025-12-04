export const GA_ID = "G-3SESXY6SRS";

export const pageview = (url: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "page_view", {
            page_path: url,
        });
    }
};
