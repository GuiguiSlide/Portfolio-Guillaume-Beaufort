export async function getHello() {
  const res = await fetch("http://localhost:3000");
  return res.text();
}