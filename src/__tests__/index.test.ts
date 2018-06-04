import {upload} from "../index";
import * as fs from "fs";

describe("upload", () => {
    test("ファイルをアップロードする", () => {
        return upload("test", fs.readFileSync(`${__dirname}/asset/do.mp3`));
    })
});
