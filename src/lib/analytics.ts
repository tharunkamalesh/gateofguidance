import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGA = () => {
    if (GA_MEASUREMENT_ID) {
        ReactGA.initialize(GA_MEASUREMENT_ID);
        console.log("GA4 Initialized with ID:", GA_MEASUREMENT_ID);
    } else {
        console.warn("GA4 Measurement ID not found. Analytics disabled.");
    }
};

export const trackPageView = (path: string) => {
    // Only track if GA is initialized and not an admin route
    if (GA_MEASUREMENT_ID && !path.startsWith("/admin")) {
        ReactGA.send({ hitType: "pageview", page: path });
        console.log("GA4 PageView tracked:", path);
    }
};
