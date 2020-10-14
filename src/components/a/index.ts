import "./a.scss";

export function foo() {
    console.log("Add a debuger statement after this line, observe that it is not hit in browser");
    const elem = document.createElement("div");
    elem.id ="style1";
    elem.innerText = "Update source files";
    document.body.append(elem);
}