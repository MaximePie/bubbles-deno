import express from "https://esm.sh/express@4.18.2";

const app = express();

app.get("/", (req, res) => {
  res.json({message: "Welcome to the Dinosaur API!"});
});

app.listen(8000);
export function add(a: number, b: number): number {
  return a + b;
}