class temporary{
    constructor(){
        this.api = "https://temporary-mail.net/api/v1"
        this.mailbox=null
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","Host":"temporary-mail.net","Referer":"https://temporary-mail.net","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","x-requested-with": "XMLHttpRequest","Accept":"application/json, text/javascript, */*; q=0.01"}
    }
    async get_cookie(){
        let req=await fetch(`https://temporary-mail.net/`,{method:"GET",headers: this.headers});
        this.headers["cookie"]=req.headers.get("set-cookie")
    }
    async get_messages(){
        let req=await fetch(`${this.api}/mailbox/${this.mailbox}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async get_email(){
        this.get_cookie()
        let req=await fetch(`${this.api}/mailbox/keepalive?mailbox=`,{method:"GET",headers: this.headers});
        this.headers["cookie"]=req.headers.get("set-cookie")
        return req.json();
    }
}
module.exports = {temporary};