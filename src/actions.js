import { redirect } from "react-router-dom"

const URL = "https://finalitemsbackend.onrender.com"

export const createAction = async ({ request }) => {
    const formData = await request.formData();

    const newItem = {
        title: formData.get("title"),
        description: formData.get("description"),
        amount: parseInt(formData.get("amount"), 10), // assuming amount is a number
        type: formData.get("type")
    };

    await fetch(URL + "/items/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem)
    });

    return redirect("/");
}

export const updateAction = async ({ request, params }) => {

    const formData = await request.formData();

    const id = params.id;

    const updatedItem = {
        title: formData.get("title"),
        description: formData.get("description"),
        amount: parseInt(formData.get("amount"), 10), // assuming amount is a number
        type: formData.get("type")
    };

    await fetch(URL + `/items/${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedItem)
    });

    return redirect(`/item/${id}`);
}

export const deleteAction = async ({ params }) => {
    const id = params.id;

    await fetch(URL + `/items/${id}/`, {
        method: "DELETE",
    });

    return redirect("/");
}
