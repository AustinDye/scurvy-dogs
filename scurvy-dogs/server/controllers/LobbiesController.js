import { Auth0Provider } from "@bcwdev/auth0provider";
import { historiesService } from "../services/HistoriesService.js";
import { lobbiesService } from "../services/LobbiesService.js";
import { shipsService } from "../services/ShipsService.js";
import BaseController from "../utils/BaseController.js";

export class LobbiesController extends BaseController
{
    constructor()
    {
        super("api/lobby");
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .get("", this.getAllLobbies)
            .get("/:id", this.getById)
            .get("/:id/ships", this.getShips)
            .get("/:id/history", this.getHistory)
            .post("", this.create)
            .put("/:id", this.edit) //TODO change this once the lobby is server-sided
            .delete("/:id", this.remove);           
    }

    async getAllLobbies(req, res, next)
    {
        try
        {
            return res.send(await lobbiesService.getAll());
        }
        catch(error)
        {
            next(error);
        }
    }

    async getById(req, res, next)
    {
        try
        {
            return res.send(await lobbiesService.getById(req.params.id));
        }
        catch(error)
        {
            next(error);
        }
    }

    async getShips(req, res, next)
    {
        try
        {
            return res.send(await shipsService.getByLobby(req.params.id));
        }
        catch(error)
        {
            next(error);
        }
    }

    async getHistory(req, res, next)
    {
        try
        {
            return res.send(await historiesService.getBylobbyId(req.params.id));
        }
        catch(error)
        {
            next(error);
        }
    }

    async create(req, res, next)
    {
        try
        {
            req.body.creatorId = req.userInfo.id;
            return res.send(await lobbiesService.create(req.body));
        }
        catch(error)
        {
            next(error);
        }
    }

    async edit(req, res, next)
    {
        try
        {
            req.body.id = req.params.id;
            req.creatorId = req.userInfo.id;
            return res.send(await lobbiesService.edit(req.body));
        }
        catch(error)
        {
            next(error);
        }
    }

    async remove(req, res, next)
    {
        try
        {
            return res.send(await lobbiesService.remove(req.params.id, req.userInfo.id));
        }
        catch(error)
        {
            next(error);
        }
    }
}