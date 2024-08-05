import { createDirectus, rest, authentication  } from '@directus/sdk';
import { readItems, readItem, updateItem, updateUser, createItem, deleteItem } from '@directus/sdk';
import { PUBLIC_URL,PUBLIC_COOKIE_DOMAIN } from '$env/static/public';


function getDirectusInstance(fetch,token) {
  	const options = fetch ? { globals: { fetch } } : {};
	const directus = createDirectus(PUBLIC_URL, options ).with(authentication('cookie', { credentials: 'include' })).with(rest());
	if(token) directus.setToken(token); 
	return directus;
}

export default getDirectusInstance;

export const constructCookieOpts = (age) => { 
	return { 
    	'domain': PUBLIC_COOKIE_DOMAIN, 
        
        // send cookie for every page 
        'path': '/', 
        
        // server side only cookie so you can't use `document.cookie` 
        'httpOnly': true, 
        
        // only requests from same site can send cookies 
        'sameSite': "strict", 
        
        // only sent over HTTPS in production 
        'secure': process.env.NODE_ENV === 'production', 
 
        // set cookie to expire after a given time 
        'maxAge': age 
	} 
} 