function add(a, b){
	return a+b;
}

function multiAsync(a, b) {
	return new Promise((resolve, reject)=>{
		for(let i=0;i<50000;i++){
			// console.log(i);
		}
		resolve(a*b);
		// reject(a*b);
	})
}


async function mainThen(){
		let first =  await multiAsync(5, 7).then(data=>{
			console.log(data);
		});

	
}
async function main(){
	try{
		let first =  await multiAsync(5, 7);
		console.log(first);
	}catch(e){
		console.log(e);
	}
}
main();






