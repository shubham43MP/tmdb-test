import { Router } from "express";
import {
  getMoviesController,
  getMovieDetailsController,
} from "../controllers/movieController";

const router = Router();

router.get("/", getMoviesController);
router.get("/:imdbID", getMovieDetailsController);

export default router;
