
import { error } from "@sveltejs/kit";
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
import { readMe } from "@directus/sdk";

export async function load({ parent,fetch }) {
	let task;
	let user;
	let token  = await parent();
	const directus = getDirectusInstance(fetch, token.token);
    try {
		 
          task= await directus.request(readItems('task'));
		
	} catch (err) {
		error(404, "Task not found");
	}
    
	try {
		
			user= await directus.request(
				readMe({
					fields: ["*"],
				})
			);
		
	} catch (err) {
		error(404, "User not found");
	}
	return {task,user};
}