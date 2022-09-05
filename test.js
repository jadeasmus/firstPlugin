"use strict";
function getSelectedElements() {
    let selectedElements = figma.currentPage.selection;
    if (selectedElements.length === 0) {
        figma.notify("Please select a rectangle element");
    }
    if (selectedElements.length > 0) {
        selectedElements.map((node) => {
            // @ts-ignore
            node.fills = [{ type: "SOLID", color: { r: 0, g: 0.5, b: 1 } }];
            console.log(node.name, "is now blue");
        });
        figma.closePlugin("i colored the elements");
    }
}
// getSelectedElements();
if (figma.editorType === "figma") {
    figma.showUI(__html__);
    figma.ui.onmessage = (msg) => {
        console.log(msg);
        if (msg.type === "run-command") {
            const input = msg.input;
            console.log("i typed ", input);
            //   figma.closePlugin("i printed message");
        }
        figma.closePlugin();
    };
}
