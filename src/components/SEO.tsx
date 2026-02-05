import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description?: string;
    noindex?: boolean;
}

const SEO = ({ title, description, noindex }: SEOProps) => {
    return (
        <Helmet>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
            {noindex && <meta name="robots" content="noindex, nofollow" />}
        </Helmet>
    );
};

export default SEO;
