import { Router } from "express";
import {
  getMoviesController,
  getMovieDetailsController,
} from "../controllers/movieController";

const router = Router();

router.get("/getMovies", getMoviesController);
router.get("/getMovieDetails", getMovieDetailsController);

export default router;
