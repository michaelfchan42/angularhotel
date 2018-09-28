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
			if(this.task.name != ''){
				this.tasks.push({id: (new Date()).getTime(), name: this.task.name});
			}
		}
	}
	onEnter(event){
		if(event.key === "Enter"){
			this.onClick();
		}
	}

	removeAll(){
		this.tasks = [];
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