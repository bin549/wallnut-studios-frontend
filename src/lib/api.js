
export async function getAllQuotes() {
	const response = await fetch('http://127.0.0.1:5000/api/orders/orders/', {
      method: 'GET',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
    return data;
}
