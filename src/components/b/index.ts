import "./b.scss";

export function bar() {
    const elem = document.createElement("div");
    elem.id ="style2";
    elem.innerText = "and look at your chrome devtools";
    document.body.append(elem);
}