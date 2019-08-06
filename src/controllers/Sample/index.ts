import {Request, Response, NextFunction ,Router } from 'express';

class SampleRoutes {
	public path = '/api/sample';
	public router = Router(); 
  constructor() {
			this.intializeRoutes();
		}
 
  public intializeRoutes() {
			this.router.get(this.path + '/graphql', (req: Request, res: Response, next: NextFunction) => {
				res.send('hello');
			});
		//this.router.post(this.path + '/createSubscription', testClass.createSubscription);
	}
}

export default SampleRoutes;