export async function getUserData(token) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/userdata`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "Authorization": token },
    })

    return await response.json()
}

