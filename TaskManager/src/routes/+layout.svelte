<script>
import '../app.css';
export let data;
import getDirectusInstance from '$lib/directus'; 
		import { setContext } from 'svelte'; 


        if (data && data.token) {
  const directus = getDirectusInstance(fetch, data.token);
  setContext('directus', directus); 
} else {
  console.error('Data or token is undefined');
}
</script>

<slot></slot>