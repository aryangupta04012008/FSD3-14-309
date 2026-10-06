import http from "http";

const server = http.createServer((req, res)=>{
    res.end("<h2> Welcome to serverside</h2>");
});
const PORT = 4444;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});