"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BookModel_1 = __importDefault(require("./database/models/BookModel"));
const CommentModel_1 = __importDefault(require("./database/models/CommentModel"));
(async () => {
    const books = await BookModel_1.default.findAll({ raw: true });
    console.table(books);
    const comments = await CommentModel_1.default.findAll({ raw: true });
    console.table(comments);
    const booksWithComments = await BookModel_1.default.findAll({ raw: true, include: ['comments'] });
    console.table(booksWithComments);
    process.exit(0);
})();
