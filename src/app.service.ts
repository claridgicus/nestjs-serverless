import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	constructor() {}

	root() {
		return 'Hello!';
	}
}
