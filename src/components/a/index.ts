import "./a.scss";

export function foo() {
    const elem = document.createElement("div");
    elem.id ="style1";
    elem.innerText = "Update source files";
    document.body.append(elem);
}