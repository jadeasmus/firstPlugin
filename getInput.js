"use strict";
figma.showUI(__html__);
figma.ui.onmessage = (msg) => {
    if (msg.type === "create") {
        console.log(msg.command);
        const selectedElement = figma.currentPage.selection[0];
        const input = msg.command;
        if (input.includes("blue")) {
            console.log("i made past checks");
            // @ts-ignore
            selectedElement.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 1 } }];
            console.log(selectedElement.name, "is now blue");
            figma.closePlugin("bluified");
        }
    }
    figma.closePlugin("plugin closed");
};
