import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { coursesController } from './controllers/coursesController'
import { episodeController } from './controllers/episodesController'

const router = express.Router()

router.get('/categories', categoriesController.index)
router.get('/categories/:id', categoriesController.show)

router.get('/courses/featured', coursesController.featured)
router.get('/courses/newest', coursesController.newest)
router.get('/courses/search', coursesController.search)
router.get('/courses/:id', coursesController.show)

router.get('/episodes/stream', episodeController.stream)

export { router }