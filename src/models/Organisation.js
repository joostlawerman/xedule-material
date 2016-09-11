
import Location from './Location.js';

export default class Organisation {
	constructor(id, name) {
		this.children = [];
		this.id = id;
		this.name = name;
	}
	loadChildren() {
		fetch('https://devlopment.space/xedule/organisations/'+this.id+'/locations')
			.then((res) => res.json())
			.then((json) => {
				 this.children = Object.keys(json).map((childId) => {
					 return new Location(childId, json[childId]);
				 })
			 })
	}
}
