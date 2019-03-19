const cp = require("child_process")

const p1 = cp.fork("fibonacci.js")
const p2 = cp.fork("fibonacci.js")
const p3 = cp.fork("fibonacci.js")
const p4 = cp.fork("fibonacci.js")

