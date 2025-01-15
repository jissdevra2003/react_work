require('dotenv').config()
const express=require('express')
const app=express()
const port=3000

const gitData={
  "login": "jissdevra2003",
  "id": 96423636,
  "node_id": "U_kgDOBb9O1A",
  "avatar_url": "https://avatars.githubusercontent.com/u/96423636?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/jissdevra2003",
  "html_url": "https://github.com/jissdevra2003",
  "followers_url": "https://api.github.com/users/jissdevra2003/followers",
  "following_url": "https://api.github.com/users/jissdevra2003/following{/other_user}",
  "gists_url": "https://api.github.com/users/jissdevra2003/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/jissdevra2003/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/jissdevra2003/subscriptions",
  "organizations_url": "https://api.github.com/users/jissdevra2003/orgs",
  "repos_url": "https://api.github.com/users/jissdevra2003/repos",
  "events_url": "https://api.github.com/users/jissdevra2003/events{/privacy}",
  "received_events_url": "https://api.github.com/users/jissdevra2003/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Jiss devra ",
  "company": null,
  "blog": "",
  "location": "UJJAIN",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-12-20T12:12:11Z",
  "updated_at": "2025-01-08T12:44:47Z"
}

app.get('/',(req,res)=>{
res.send("Hello jiss,you are good")
})
app.get('/login',(req,res)=>{
res.send(`<h1>Jiss is learning express ${port}</h1>`)
})
app.get('/ronaldo',(req,res)=>{
res.send(`<h1>Ronaldo is from portugal</h1>`)
})
app.get('/messi',(req,res)=>{
res.send(`<h3>Messi is from argentina</h3>`)
})
app.get('/neymar',(req,res)=>{
res.send(`<h3>Neymar is from Brazil</h3>`)
})
app.get('/github',(req,res)=>{
res.json(gitData)
})

app.listen(process.env.PORT,()=>{
console.log(`Watching friends ${process.env.PORT}`)
})