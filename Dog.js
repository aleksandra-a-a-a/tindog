// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `<img id='dog-photo' src='${avatar}'>
                    <div class='desc'>
                        <h1>${name}, ${age}</h1>
                        <p>${bio}</p>
                    </div>`
    }
}

export default Dog