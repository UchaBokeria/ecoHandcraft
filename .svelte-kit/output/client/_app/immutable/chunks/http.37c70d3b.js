var c=Object.defineProperty;var h=(t,e,s)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var r=(t,e,s)=>(h(t,typeof e!="symbol"?e+"":e,s),s);import{U as p}from"./store.24a303ad.js";let i;p.subscribe(t=>i={email:t==null?void 0:t.email,token:t==null?void 0:t.token});class o{static async get(e,s={}){e+=`?${Object.entries(s).map(n=>`${n[0]}=${n[1]}`)}`;const a=await fetch(e,{method:"GET",headers:this.headers});return await this.response(a)}static async post(e,s={}){const a=await fetch(e,{method:"POST",headers:this.headers,body:JSON.stringify(s)});return await this.response(a)}static async put(e,s={}){const a=await fetch(e,{method:"PUT",headers:this.headers,body:JSON.stringify(s)});return await this.response(a)}static async delete(e,s={}){const a=await fetch(e,{method:"DELETE",headers:this.headers,body:JSON.stringify(s)});return await this.response(a)}}r(o,"headers",{"X-User":`${i==null?void 0:i.email}`,"Content-Type":"application/json",Authorization:`Bearer ${i==null?void 0:i.token}`}),r(o,"response",async e=>({status:e.status,result:await e.json()}));export{o as h};