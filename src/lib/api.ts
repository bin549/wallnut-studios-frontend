export async function getSkillByPage() {
    const response = await fetch('http://127.0.0.1:8000/api/skill/list/', {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json();
    return data;
}

export async function getProfileById() {
    const response = await fetch('http://127.0.0.1:8000/api/profile/get', {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await response.json()
}
