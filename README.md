# temporary
JavaScript library for temporary-mail.net
# main
```js
async function main(){
    const {temporary} = require('./temporary');
    const mail= new temporary();
    let req=await mail.get_email()
    console.log(req)
    mail.mailbox=req["mailbox"]
}
main()
```
