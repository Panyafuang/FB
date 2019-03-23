/* const http = new Promise((resolve, reject) =>{
	fetch('https://jsonplaceholder.typicode.com/todos/')
	.then(res => res.json())
	.then(data => resolve(data))

});
console.log(http);
// http.then(data => console.log(data));
 */

 async function http(url){

	 try{
		 const res = await fetch(url);
		 const result = res.json();
		 return result;
		
	 }catch(error){
		console.log(error)
	 }
 }

http('https://jsonplaceholder.typicode.com/todos/').then(data => {
	data.forEach((curr, index) => console.log(index, curr.title));
});




 const getId = new Promise((resolve, reject) =>{
	 setTimeout(() =>{
		const id = [101, 102, 103, 104];
		resolve(id);
	 }, 2000);
 });

 const getRecipe = recipeID =>{
	 return new Promise((resolve, reject) =>{
		 setTimeout(id =>{
			const recipe = {title: 'pizza', publisher: 'Carter Doe'};
			resolve(`${id}: ${recipe.title} ${recipe.publisher}`);
		 }, 2000, recipeID)
	 })
 }

 const getRelate = publisher =>{
	 return new Promise((resolve, reject) =>{
		 setTimeout(publisher =>{
			const recipe2 = {title: 'coffee'};
			resolve(`${recipe2.title} ${publisher}`);
		 }, 1000, publisher);
	 });
 }


/* getId.then( ID =>{
	console.log(ID)
	return getRecipe(ID[1])
})
.then(recipe =>{
	console.log(recipe);
	return getRelate(recipe);
	
})
.then(publisher => console.log(publisher))
.catch(err => console.log(err)) */





/**
 * ASYNC AWAIT
 */
async function getRecipes(){
	try{
		const id = await getId;
		console.log(id);
		const recipe = await getRecipe(id[2]);
		console.log(recipe);
		const publisher = await getRelate('Ammie Willson');
		console.log(publisher)
	
		return publisher

	}catch(error){
		alert(error)
	}
}

/* let data;
getRecipes().then(result => {
	data = result;
	console.log(data);

}); */

console.log('Hello world');
