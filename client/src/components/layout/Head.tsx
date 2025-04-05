import { Helmet } from "react-helmet";

interface HeadProps {
  title: string;
  description: string;
}

const Head = ({ title, description }: HeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Head;
