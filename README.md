Merkle Tree List

This project uses Merkle proofs and verification to prove that a user is part
of a "gift list".

A pre-filled JSON file contains a list of names (/utils/niceList.json). If the
name is on the list and has proof that it is part of a Merkle Tree, the user
will receive a gift. If the user's name is not on the list they will get a
message to inform them.

The following is the folder structure:

## Client

This contains the client files. Think of the client as the prover, or the user who will need to prove that their name is on the list.

Run the file `node client/index`. This script will send an HTTP request to the server.

## Server

You must run `node server/index` to launch the server. The server which runs a service on port 1225 that responds to client requests.

The server as the verifier, that holds the Merkle Tree. It verifies that name of the user is in the "gift list". If the name is on the list, they will be receiving a gift.

## Utils

The files in this folder are the following (with brief description):

`niceList.json` - Contains the names of the people who will be receiving a gift.

`example.js` - A sample script that shows how to generate a root, generate a proof and verify that some value is in the root using the proof.

`MerkleTree.js` - Import this in client/server program for reference to the Merkle Tree.

`verifyProof.js` - Use this function to prove a name is in the Merkle Root.
