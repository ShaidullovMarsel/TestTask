import { Button } from "@/components";
import { Htag } from "@/components/Htag/Htag";
import { P } from "@/components/P/P";
import { Tag } from "@/components/Tag/Tag";
import { useEffect, useState } from "react";

export default function Home() {
	const [counter, setCounter] = useState<number>(0);

	useEffect(() => {
		console.log('hello');
	}, [counter]);
	
	return (
		<>
			<Htag tag='h1'>{counter}</Htag>
			<Button appearance='primary' arrow="down" onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
			<Button appearance='ghost' arrow="right">Кнопка</Button>
			<P size="s">small</P>
			<P>mall</P>
			<P size="l">large</P>
			<Tag size="m" href="/#" color="red">asd</Tag>
			<Tag size="s" href="/#">asd</Tag>
			<Tag size="m" href="/#" color="green">asd</Tag>
			<Tag size="m" href="/#" color="primary">asd</Tag>
		</>
	)
}
