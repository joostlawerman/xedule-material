
export default class Attendee {
	constructor(id, name) {
		this.id = id
		this.name = name;
	}
	loadChildren() {
		// fetch('https://devlopment.space/xedule/organisations/'+this.id+'/locations')
		// 	.then((res) => res.json())
		// 	.then((json) => {
		// 		 this.children = json.keys().map((childId) {
		// 			 return new Location(childId, json[childId]);
		// 		 })
		// 	 })
	}
}
