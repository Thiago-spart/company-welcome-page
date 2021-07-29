import Head from "next/head";

interface Props {
	title: string;
}

export const HeadTitle: React.FC<Props> = ({ title }) => (
	<Head>
		<title>{title} | CompanyK</title>
	</Head>
);
