const express = require("express");
var bodyParser = require('body-parser')
const app = express();
const cors = require("cors");
const pool = require("./db");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//post
app.post("/addparty", async(req, res) =>{
try {
    let partyId = req.body.PartyId;
    let name = req.body.Name;
    let address = req.body.Address;
    
    console.log(req.body);
    
    const newParty = await pool.query("INSERT INTO Party (PartyId, Name, Address) VALUES (?, ?,?)",[partyId,name,address]);
    res.json("Party table was updated");
} catch (error) {
    console.error(error.message);
}
});

//get All Parties
app.get("/getpartydetails", async(req, res) =>{
    try {
        const party = await pool.query("select * from Party");
        res.json(party[0]);
    } catch (error) {
        console.error(error.message);
    }
    });
// getParty
app.get("/getparty/:partyid", async(req, res) =>{
    try {
        const {partyid} = req.params;
        const party = await pool.query("select * from Party WHERE PartyId = ?",[partyid]);
        res.json(party[0]);
    } catch (error) {
        console.error(error.message);
    }
    });
//
app.use(cors());
app.use(express.json())
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});