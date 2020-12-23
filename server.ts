import { Application, Router } from 'https://deno.land/x/oak@v6.4.0/mod.ts';

const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

interface Book {
	id: String;
	title: String;
	author: string;
}

let books: Book[] = [
	{
		id: '1',
		title: 'Book One',
		author: 'One'
	},
	{
		id: '2',
		title: 'Book Two',
		author: 'Two'
	},
	{
		id: '1',
		title: 'Book Three',
		author: 'Three'
	}
];

router.get('/', (context) => {
	context.response.body = 'Hello WOrld!';
});
console.log('Server is listening on port 3000');
await app.listen({ port: 3000 });
