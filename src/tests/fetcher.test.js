const {
	createFetcher,
} = require("../index");

const api = createFetcher(
	"https://jsonplaceholder.typicode.com"
);

test("GET request", async () => {
	const data =
		await api.get("/posts/1");
	expect(data).toHaveProperty("id", 1);
});

test("POST request", async () => {
	const data = await api.post(
		"/posts",
		{
			title: "foo",
			body: "bar",
			userId: 1,
		}
	);
	expect(data).toHaveProperty(
		"title",
		"foo"
	);
});
