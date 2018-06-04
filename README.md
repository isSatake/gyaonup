# gyaonup
### usage

in node.js
```
import {upload} from "gyaonup";
import {readFileSync} "fs";

const gyaonId = "hoge";
const soundFile = readFileSync("/path/to/sound/file");

upload(gyaonId, soundFile).then(res => {
    // succeeded
}).catch(err => {
    // failed
});

```