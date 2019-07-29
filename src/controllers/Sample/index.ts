import async from 'async';
import { Request, Response, NextFunction, Router } from 'express';

class SampleRoutes {
	public path = '/api/sample';
	public router = Router();
 
  constructor() {
		this.intializeRoutes();
  }
 
  public intializeRoutes() {
			this.router.get(this.path, function(req: Request, res: Response) {
				res.send('success');
			});
		//this.router.post(this.path + '/createSubscription', testClass.createSubscription);
	}
}

export default SampleRoutes;