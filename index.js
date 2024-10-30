const loadCategories = async () => {
    const res = await fetch (
        'https://openapi.programming-hero.com/api/peddy/categories'
    )
    const data = await res.json()
    displayCategories(data.categories)
}

const displayCategories = data => {
    console.log(data)
}



loadCategories();