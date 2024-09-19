const currentDate = () => {
    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1
    const day = new Date().getDate()

    console.log(`${day}-${month}-${year}`);
}

currentDate();