function getUser() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Ahmad");
        }, 2000);

    });
}

async function showUser() {

    try {

        console.log("Loading user...");

        const user = await getUser();

        console.log(`Welcome ${user}`);

    } catch(error) {

        console.log(error);

    }

}

showUser();