import express, {Request,Response} from "express";
import {ITodo} from "../module/ITodo";

let router = express.Router();

let todos: ITodo[] = [{
    name : "Test", description: "Lorem ipsum ..."
},{
    name: "Have Fun", description: "Enjoy my hollidays!!!!"
},{
    name: "Lukas den rothaarigen nerven", description:"Lukas is a opfa"
}]

router.get('/', (req:Request, res:Response) => {
    res.send(todos);
})

module.exports = router;