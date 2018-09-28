import { Component } from '@angular/core';

@Component({
	selector: 'app-hotel',
	templateUrl: './app.hotel.html',
	styleUrls: [
		'../assets/css/bootstrap.min.css',
		'./app.hotel.css'

	]
})

export class HotelComponent {
	task = {
		name: '',
		id: 0
	};
	tasks = [];

	onClick(){
		if(this.task.id == 0){
			this.tasks.push({id: (new Date()).getTime(), name: this.task.name});
		}
	}
	onEnter(event){
		if(this.task.id == 0 && event.key === "Enter"){
			this.tasks.push({id: (new Date()).getTime(), name: this.task.name});
		}
	}

	onDelete(item){
		for(var i = 0; i < this.tasks.length; i++){
			if(item.id == this.tasks[i].id){
				this.tasks.splice(i,1);
				break;
			}
		}
	}
}