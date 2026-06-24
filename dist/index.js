"use strict";
// A minimal Express application.
// The root endpoint (GET /) returns a JSON greeting.
// See https://expressjs.com/ for the framework reference.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT ?? "3000", 10);
app.get("/", (_req, res) => {
    res.json({ message: "Hello World" });
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
