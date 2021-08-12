import { Router } from "express"
import * as usersCtrl from "../controllers/users.js"
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js"
import * as repsCtrl from '../controllers/reps.js'
import * as senatorCtrl from '../controllers/senators.js'

const router = Router()

// ========= Public Routes =========

// /*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get("/", checkAuth, usersCtrl.index)
router.put("/:id", checkAuth, usersCtrl.update)
router.delete('/:id', checkAuth, repsCtrl.deleteFollowing)
router.delete("/:id", checkAuth, senatorCtrl.deleteFollowingSen)


export { router }
