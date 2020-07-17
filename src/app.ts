const elem = document.createElement("div");
elem.innerText = "Hey there!";
document.body.append(elem);

async function init() {
  const foo = await import(/* webpackChunkName: "foo" */ "./components/a");
  foo.foo();
  const bar = await import(/* webpackChunkName: "bar" */ "./components/b");
  bar.bar();
}

init();