import { redirect,fail } from '@sveltejs/kit';
import { PUBLIC_URL } from '$env/static/public';
// This makes sure that the login page is only available if the user is not logged in yet
export const load = async ({ locals,url }) => {
	if (locals.token) redirect(302, '/Login')
	return {};
}


export const actions = {
     register : async ({ cookies, request, url }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        const firstname = data.get('firstname');
        const lastname=data.get('lastname');
        const redirectedFrom = url.searchParams.get('redirectedFrom');
        const user={
                first_name:firstname,
                last_name:lastname,
                email,
                password
            }
        //a) First create the user
        let signupRequest = await fetch(`${PUBLIC_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'user-agent':request.headers.get("user-agent")
            },
            body: JSON.stringify(user)
        });
        if(signupRequest.status >= 300){
            return fail(400, { message: await signupRequest.text() });
        }
        redirect(302, redirectedFrom ? redirectedFrom : `/Login`)
        
    }
    
}