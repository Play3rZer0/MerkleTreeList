const express = require("express");
const verifyProof = require("../utils/verifyProof");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const port = 1225;

const app = express();
app.use(express.json());

// hardcode a merkle root here representing the whole nice list
const merkleTree = new MerkleTree(niceList);
const root = merkleTree.getRoot();

// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT = root;

app.post("/gift", (req, res) => {
  // grab the parameters from the front-end here
  const body = req.body;
  const { name, proof } = body;

  // prove that a name is in the list
  const isInTheList = verifyProof(proof, name, MERKLE_ROOT);
  console.log(isInTheList);
  if (isInTheList) {
    res.send("You are going to receive a special gift!");
  } else {
    res.send("Sorry, you did not make the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
