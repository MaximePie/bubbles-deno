import * as expressive from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";


const app = new expressive.App();
app.use(expressive.simpleLog());
app.use(expressive.bodyParser.json());
app.get("/", (req, res) => {
  res.json({message: "Welcome to the Dinosaur API!"});
});
app.post("/project", (req, res) => {
  res.json({message: "Project has been posted!", project: JSON.stringify(req.data)});
});

app.listen(8000);
export function add(a: number, b: number): number {
  return a + b;
}