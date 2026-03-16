import type { Institution } from '$lib/models/institution.model';

export interface Diocese {
	readonly id: string;
	readonly name: string;
	institutions: Institution[];
}
