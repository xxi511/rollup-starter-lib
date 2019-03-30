import * as Video from "twilio-video";

function createDiv() {
    const div = document.createElement("div");
    div.innerText = "Hi I am div";
    div.setAttribute(
        "style",
        "width:300px;height:300px;background-color:gray;"
    );
    document.body.appendChild(div);
}

export default function() {
    console.log("will create a div");
    console.log(`version is ${Video.version}`);
    createDiv();
    console.log("create done");
}
