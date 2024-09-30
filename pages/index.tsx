import { GetStaticProps } from 'next';
import { Button } from "@/components";
import { Htag } from "@/components/Htag/Htag";
import { P } from "@/components/P/P";
import { Tag } from "@/components/Tag/Tag";
import { Rating } from "@/components/Rating/Rating";
import { useState } from "react";
import { withLayout } from "@/layout/Layout";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";
import { API } from '../pages/api/api';


function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag='h1'>Заголовок</Htag>
			<Button appearance='primary' arrow="down">Кнопка</Button>
			<Button appearance='ghost' arrow="right">Кнопка</Button>
			<P size="s">small</P>
			<P>mall</P>
			<P size="l">large</P>
			<Tag size="m" href="/#" color="red">asd</Tag>
			<Tag size="s" href="/#">asd</Tag>
			<Tag size="m" href="/#" color="green">asd</Tag>
			<Tag size="m" href="/#" color="primary">asd</Tag>
			<Rating rating={rating} isEditable setRating={setRating}></Rating>
			<ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
		</>
	)
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}