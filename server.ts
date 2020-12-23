import { Application, Router } from 'https://deno.land/x/oak@v6.4.0/mod.ts';
import { v4 } from 'https://deno.land/std@0.82.0/uuid/mod.ts';

const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

interface Book {
	id: string;
	title: string;
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
		id: '3',
		title: 'Book Three',
		author: 'Three'
	}
];

router
	.get('/', (context) => {
		context.response.body = 'Hello WOrld!';
	})
	.get('/books', (context) => {
		context.response.body = books;
	})
	.post('/book', async (ctx) => {
		const body = await ctx.request.body();
		// 만약 정보를 제공하지 않았다면
		if (!ctx.request.hasBody) {
			ctx.response.status = 400;
			ctx.response.body = '제공받은 데이터가 없습니다.';
		} else {
			// 정보를 제공 받았다면
			// 우선 임의로 아이디를 생성하고 제공받은 정보로 book object 를 만들어준다
			const book: Book = await body.value;
			book.id = v4.generate();
			books.push(book);
			ctx.response.status = 201;
			ctx.response.body = book;
		}
	})
	.get('/book/:id', async (context) => {
		const book: Book | undefined = books.find((b) => b.id === context.params.id);
		if (book) {
			context.response.body = book;
			context.response.status = 200;
		} else {
			context.response.body = '해당 조건에 맞는 책을 찾지 못했습니다.';
			context.response.status = 404;
		}
	});
console.log('Server is listening on port 3000');
await app.listen({ port: 3000 });
