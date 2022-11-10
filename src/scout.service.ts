import { Injectable, Inject } from '@nestjs/common';
import { ScoutOptionsDto } from './dto/scout-options.dto';

@Injectable()
export class ScoutService {

	constructor(
		@Inject('SCOUT_OPTIONS') 
		private scoutOptions: ScoutOptionsDto
	) 
	{}

	async IsOK(): Promise<boolean> {
		return this.scoutOptions.field_one == 'OK'
	}
}
