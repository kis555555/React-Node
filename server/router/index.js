const express = require('express');
const router = express.Router();
const {execSync} = require('child_process')
const cmd = `git log --pretty=format:'{%n  "commit": "%H",%n%n},'`
const commitlog = execSync(cmd, {encoding: 'utf8'})
console.log(commitlog)

router.get('/', (req, res) => {
    res.send(
        {
            id : 'hello world',
            name : 'Lee'
        });
})


router.post('/serversend', (req, res) => {
    const serverid = req.body.id;
    const servername = req.body.name;
    console.log(serverid,servername);
})

module.exports = router;