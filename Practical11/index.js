function show1(name) {
  console.log(`Hello ${name}`);
}
function show2(showname) {
  const name = "atharva";
  showname(name);
}
show2(show1);
